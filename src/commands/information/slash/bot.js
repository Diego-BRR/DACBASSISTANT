const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonStyle,
} = require("discord.js");
const { timeformat } = require("@helpers/Utils");
const { EMBED_COLORS, SUPPORT_SERVER, DASHBOARD } = require("@root/config.js");
const botstats = require("../shared/botstats");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "bot",
  description: "bot related commands",
  category: "INFORMATION",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: false,
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "invite",
        description: "get bot's invite",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "stats",
        description: "get bot's statistics",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "uptime",
        description: "get bot's uptime",
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
  },

  async interactionRun(interaction) {
    const sub = interaction.options.getSubcommand();
    if (!sub) return interaction.followUp("Ce n'est pas une commande valide");

    // Invite
    if (sub === "invite") {
      const response = botInvite(interaction.client);
      try {
        await interaction.user.send(response);
        return interaction.followUp("Verifiez vos DM pour inspécter mes informations ! :envelope_with_arrow:");
      } catch (ex) {
        return interaction.followUp("Je ne peux pas vous envoyer mes informations ! Vos DM sont-ils ouverts ?");
      }
    }

    // Stats
    else if (sub === "stats") {
      const response = botstats(interaction.client);
      return interaction.followUp(response);
    }

    // Uptime
    else if (sub === "uptime") {
      await interaction.followUp(`Je suis allumé depuis: \`${timeformat(process.uptime())}\``);
    }
  },
};

function botInvite(client) {
  const embed = new EmbedBuilder()
    .setAuthor({ name: "Invite" })
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("Salut toi! Merci de vouloir m'inviter dans ton serveur, clique sur les boutons ci-dessous pour naviguer parmis les options");

  // Buttons
  let components = [];
  components.push(new ButtonBuilder().setLabel("Invite moi !").setURL(client.getInvite()).setStyle(ButtonStyle.Link));

  if (SUPPORT_SERVER) {
    components.push(new ButtonBuilder().setLabel("Serveur Support").setURL(SUPPORT_SERVER).setStyle(ButtonStyle.Link));
  }

  if (DASHBOARD.enabled) {
    components.push(
      new ButtonBuilder().setLabel("Mon Dashboard").setURL(DASHBOARD.baseURL).setStyle(ButtonStyle.Link)
    );
  }

  let buttonsRow = new ActionRowBuilder().addComponents(components);
  return { embeds: [embed], components: [buttonsRow] };
}
