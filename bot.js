require("dotenv").config();
require("module-alias/register");

// register extenders
require("@helpers/extenders/Message");
require("@helpers/extenders/Guild");
require("@helpers/extenders/GuildChannel");

const { checkForUpdates } = require("@helpers/BotUtils");
const { initializeMongoose } = require("@src/database/mongoose");
const { BotClient } = require("@src/structures");
const { validateConfiguration } = require("@helpers/Validator");

// Ajout du code de planification des messages
function scheduleMessage(channel, messageContent, targetHour, targetMinute) {
    const now = new Date();
    const targetDate = new Date();
    targetDate.setHours(targetHour, targetMinute, 0, 0);

    // Si l'heure cible est déjà passée pour aujourd'hui, planifier pour demain
    if (now.getHours() > targetHour || (now.getHours() === targetHour && now.getMinutes() >= targetMinute)) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    // Calculer la différence en millisecondes
    const delay = targetDate.getTime() - now.getTime();

    // Planifier l'envoi du message
    setTimeout(() => {
        channel.send(messageContent);
    }, delay);
}

validateConfiguration();

// Initialiser le client
const client = new BotClient();
client.loadCommands("src/commands");
client.loadContexts("src/contexts");
client.loadEvents("src/events");

// trouver des refus de promesses non gérés
process.on("unhandledRejection", (err) => client.logger.error(`Unhandled exception`, err));

(async () => {
    // Vérifier les Mises à Jour
    await checkForUpdates();

    // Démarrage du DashBoard
    if (client.config.DASHBOARD.enabled) {
        client.logger.log("Lancement du tableau de bord");
        try {
            const { launch } = require("@root/dashboard/app");

            // Laisser le DashBoard gérer la base de donnée
            await launch(client);
        } catch (ex) {
            client.logger.error("Erreur du lancement du dashboard", ex);
        }
    } else {
        // Initialiser la base de donnée
        await initializeMongoose();
    }

    // Démarrer le client
    await client.login(process.env.BOT_TOKEN);


})();

