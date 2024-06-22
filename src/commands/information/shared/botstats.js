const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { EMBED_COLORS, SUPPORT_SERVER, DASHBOARD } = require("@root/config");
const { timeformat } = require("@helpers/Utils");
const os = require("os");
const { stripIndent } = require("common-tags");

/**
 * @param {import('@structures/BotClient')} client
 */
module.exports = (client) => {
  // STATS
  const guilds = client.guilds.cache.size;
  const channels = client.channels.cache.size;
  const users = client.guilds.cache.reduce((size, g) => size + g.memberCount, 0);

  // CPU
  const platform = process.platform.replace(/win32/g, "Windows");
  const architecture = os.arch();
  const cores = os.cpus().length;
  const cpuUsage = `${(process.cpuUsage().user / 1024 / 1024).toFixed(2)} MB`;

  // RAM
  const botUsed = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`;
  const botAvailable = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
  const botUsage = `${((process.memoryUsage().heapUsed / os.totalmem()) * 100).toFixed(1)}%`;

  const overallUsed = `${((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2)} GB`;
  const overallAvailable = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
  const overallUsage = `${Math.floor(((os.totalmem() - os.freemem()) / os.totalmem()) * 100)}%`;

  let desc = "";
  desc += `❒ Je suis dans ces serveues ${guilds}\n`;
  desc += `❒ Je comporte ces  utilisateurs ${users}\n`;
  desc += `❒ Je gère ces salons ${channels}\n`;
  desc += `❒ J'ai ce ping ${client.ws.ping} ms\n`;
  desc += "\n";

  const embed = new EmbedBuilder()
    .setTitle("Informations du bot")
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(desc)
    .addFields(
      {
        name: "CPU",
        value: stripIndent`
        ❯ **OS:** ${platform} [${architecture}]
        ❯ **Coeurs:** ${cores}
        ❯ **Utilisation:** ${cpuUsage}
        `,
        inline: true,
      },
      {
        name: "RAM du Bot",
        value: stripIndent`
        ❯ **Utilisé:** ${botUsed}
        ❯ **Disponible:** ${botAvailable}
        ❯ **Utilisation:** ${botUsage}
        `,
        inline: true,
      },
      {
        name: "RAM du serveur",
        value: stripIndent`
        ❯ **Utilisé:** ${overallUsed}
        ❯ **Disponible:** ${overallAvailable}
        ❯ **Utilisation:** ${overallUsage}
        `,
        inline: true,
      },
      {
        name: "Ma verssion de Node JS",
        value: process.versions.node,
        inline: false,
      },
      {
        name: "Mon temps de marche",
        value: "```" + timeformat(process.uptime()) + "```",
        inline: false,
      }
    );

  // Buttons
  let components = [];
  components.push(new ButtonBuilder().setLabel("Invite Moi !").setURL(client.getInvite()).setStyle(ButtonStyle.Link));

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
};
