const { counterHandler, inviteHandler, presenceHandler } = require("@src/handlers");
const { cacheReactionRoles } = require("@schemas/ReactionRoles");
const { getSettings } = require("@schemas/Guild");

/**
 * @param {import('@src/structures').BotClient} client
 */
module.exports = async (client) => {
  client.logger.success(`Connecté à ${client.user.tag}! (${client.user.id})`);

  // Initialize Music Manager
  if (client.config.MUSIC.ENABLED) {
    client.musicManager.connect(client.user.id);
    client.logger.success("Gestionaire de musique initialisé !");
  }

  // Initialize Giveaways Manager
  if (client.config.GIVEAWAYS.ENABLED) {
    client.logger.log("Initialisation du système de Giveways...");
    client.giveawaysManager._init().then((_) => client.logger.success("Gestionaire de Giveways initialisé !"));
  }

  // Update Bot Presence
  if (client.config.PRESENCE.ENABLED) {
    presenceHandler(client);
  }

  // Register Interactions
  if (client.config.INTERACTIONS.SLASH || client.config.INTERACTIONS.CONTEXT) {
    if (client.config.INTERACTIONS.GLOBAL) await client.registerInteractions();
    else await client.registerInteractions(client.config.INTERACTIONS.TEST_GUILD_ID);
  }

  // Load reaction roles to cache
  await cacheReactionRoles(client);

  for (const guild of client.guilds.cache.values()) {
    const settings = await getSettings(guild);

    // initialize counter
    if (settings.counters.length > 0) {
      await counterHandler.init(guild, settings);
    }

    // cache invites
    if (settings.invite.tracking) {
      inviteHandler.cacheGuildInvites(guild);
    }
  }

  setInterval(() => counterHandler.updateCounterChannels(client), 10 * 60 * 1000);
};
