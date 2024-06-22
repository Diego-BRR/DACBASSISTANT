const { SlashCommandBuilder } = require('discord.js');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '89.213.175.181',
    user: 'whmcs',
    password: 'Heimdallhost@',
    database: 'whmcs',
});

async function checkEmail(email) {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute('SELECT * FROM tblusers WHERE email = ?', [email]);
        connection.release();
        return rows.length > 0;
    } catch (error) {
        console.error('Erreur lors de la vérification de l\'email dans la base de données :', error);
        throw error;
    }
}

module.exports = {
    name: "link",
    description: "Connectez votre compte client à Discord",
	category:"UTILITY",
    async execute(interaction) {
        const userEmail = interaction.options.getString('email');

        try {
            const emailExists = await checkEmail(userEmail);

            if (emailExists) {
                const member = interaction.guild.members.cache.get(interaction.user.id);
                const verifiedRole = interaction.guild.roles.cache.find(role => role.name === 'Clients');

                if (verifiedRole) {
                    await member.roles.add(verifiedRole);
                    await interaction.reply({ content: 'Votre adresse e-mail a été vérifiée avec succès ! Vous avez été attribué le rôle vérifié.', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'Le rôle "Clients" n\'a pas été trouvé. Veuillez contacter un administrateur.', ephemeral: true });
                }
            } else {
                await interaction.reply({ content: 'Votre adresse e-mail n\'a pas été trouvée dans notre base de données. Veuillez réessayer avec une adresse e-mail valide.', ephemeral: true });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la vérification de l\'e-mail :', error);
            await interaction.reply({ content: 'Une erreur s\'est produite lors de la vérification de votre adresse e-mail. Veuillez réessayer plus tard.', ephemeral: true });
        }
    }
};
