module.exports = {
  OWNER_IDS: [""], // ID de l'utilisateur ADMIN
  SUPPORT_SERVER: "https://discord.gg/UxW2QttkGq", // Serveur Support
  PREFIX_COMMANDS: {
    ENABLED: true, // Activer ou desactiver les "/"commandes
    DEFAULT_PREFIX: ".", // Préfixe par défaut du bot
  },
  INTERACTIONS: {
    SLASH: true, // Voullez vous activer les Intéractions ? (true ou false)
    CONTEXT: true, // Voullez vous activer les contextes ? (true ou false)
    GLOBAL: true, // Voullez vous que les interactions soient globalement enregistrées ?
    TEST_GUILD_ID: "", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#068ADD",
    TRANSPARENT: "#36393F",
    SUCCESS: "#00A56A",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Erreur inattendue du backend ! Réessayez plus tard ou contactez le serveur d'assistance",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: false, //Acctiver ou Désactiver les commandes d'auto modération
    LOG_EMBED: "#36393F",
    DM_EMBED: "#36393F",
  },

  DASHBOARD: {
    enabled: true, // activer ou désactiver le DASHBOARD  true (activer) ou false (désactiver)
    baseURL: "https://exemple.nomdedomaine.fr", // URL de base
    failureURL: "https://exemple.fr", // URL de déconnexion
    port: "-", // Le port de votre site
  },

  ECONOMY: {
    ENABLED: true,
    CURRENCY: "₪",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "-", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud
    // Add any number of lavalink nodes here
    // Vous référer à https://github.com/freyacodes/Lavalink pour héberger votre serveur LavaLink
    LAVALINK_NODES: [
      {
        host: "-", //Votre lien LavaLink Server
        port: PORT, //Le port de votre LavaLink Server
        password: "-", //Le Mot De Passe de votre LavaLink Server
        id: "-", //ID de votre LavaLink Server
        secure: false, //Certificat SSL ? true (oui) ou false (non)
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: false, //Activer ou Désactiver le système de Giveways
    REACTION: "🎁",
    START_EMBED: "#FF468A",
    END_EMBED: "#FF468A",
  },

  IMAGE: {
    ENABLED: false, //Activer ou Désactiver la géneration des images (true ou false)
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: false, //Activer ou Désactiver l'invitation du bot (true ou false)
  },

  MODERATION: {
    ENABLED: false, //Activer ou Désactiver les commandes de Modération (true ou false)
    EMBED_COLORS: {
      TIMEOUT: "#102027",
      UNTIMEOUT: "#4B636E",
      KICK: "#FF7961",
      SOFTBAN: "#AF4448",
      BAN: "#D32F2F",
      UNBAN: "#00C853",
      VMUTE: "#102027",
      VUNMUTE: "#4B636E",
      DEAFEN: "#102027",
      UNDEAFEN: "#4B636E",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    },
  },

  PRESENCE: {
    ENABLED: false, // Activer ou Désactiver le statuts du bot (true ou false)
    STATUS: " ", // Les statuts disponibles [online (En ligne), idle (Innactif), dnd (Ne pas déranger), invisible (Hors ligne)]
    TYPE: " ", // Les activités disponibles [PLAYING (Joue)| LISTENING (Écoute)| WATCHING (Regarde)| COMPETING (Participe)]
    MESSAGE: "Edité par Diego-BRR sur GitHub", // Votre message de statuts
  },

  STATS: {
    ENABLED: false, //Activer ou Désactiver les notifications de niveau (true ou false)
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, Vous venez d'arriver au niveau **Level {level}**",
  },

  SUGGESTIONS: {
    ENABLED: false, // Activer ou Désactiver le système de vote (true ou false)
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#4F545C",
    APPROVED_EMBED: "#43B581",
    DENIED_EMBED: "#F04747",
  },

  TICKET: {
    ENABLED: false, //Activer ou Désactiver le système de tickets (true ou false)
    CREATE_EMBED: "#068ADD",
    CLOSE_EMBED: "#068ADD",
  },
};
