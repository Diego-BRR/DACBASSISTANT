const { MessageEmbed } = require('discord.js');
const axios = require('axios');

/**
 * @param {import('@src/structures').BotClient} client
 */
module.exports = async (client) => {
  const channelId = '1225511749084778676'; // Remplacez par l'ID du salon spécifique

  // Fonction pour récupérer les informations sur les nœuds
  async function getNodeStatus() {
    try {
      const response = await axios.get('https://panel.heimdallhost.com/api/application/nodes', {
        headers: {
          Authorization: 'ptla_y06x7FEESZhDejyWzszCSVjEiNnD8TcRyjR8o3VFrcp', // Remplacez par votre clé API Pterodactyl
        },
      });

      const nodes = response.data.data;

      const embed = new MessageEmbed()
        .setTitle('Status des nodes Pterodactyl')
        .setColor('#0099ff');

      nodes.forEach(node => {
        embed.addField(
          `Node: ${node.name}`,
          `Stockage : ${node.attributes.disk_overall.used}/${node.attributes.disk_overall.total} GB\n` +
          `RAM : ${node.attributes.memory.current} MB / ${node.attributes.memory.limit} MB\n` +
          `Nombre de serveurs : ${node.attributes.servers}\n\n`
        );
      });

      return embed;
    } catch (error) {
      console.error('Erreur lors de la récupération du statut des nodes :', error);
      return new MessageEmbed()
        .setTitle('Erreur')
        .setColor('#ff0000')
        .setDescription('Une erreur est survenue lors de la récupération du statut des nodes.');
    }
  }

  // Récupération de l'embed à envoyer
  const embed = await getNodeStatus();

  // Envoi de l'embed dans le salon spécifié
  const channel = await client.channels.fetch(channelId);
  if (channel && channel.type === 'text') {
    channel.send(embed);
  } else {
    console.error(`Le salon avec l'ID ${channelId} est introuvable ou n'est pas un salon textuel.`);
  }
};
