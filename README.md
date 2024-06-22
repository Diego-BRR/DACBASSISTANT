<h1 align="center">
  <br>
  <a href="https://github.com/saiteja-madha"><img src="./docs/.gitbook/assets/strange.png" height="200" alt="Discord.js v14 Bot"></a>
  <br>
  Discord.js v14 Bot
  <br>
</h1>


<p align="center">Admin, AutoMod, Animé, Économy, Fun, Giveaway, Image, Invitation, Information, Moderation, Musique, Owner, Social, Statistiques, Suggestions, Tickets, Utilitaires et plus...</p>
<br>

<p align="center">
  <a href="#-liens-utiles">Lien des ressources</a>
  •
  <a href="#-prerequisit">Prérequis</a>
  •
  <a href="#-commencer">Pour Commencer</a>
  •
  <a href="#-features">Fonctionalités</a>
</p>

<br>

## 🔗 Liens Utiles

- 🤖 Bot de démo: [Ajouter a votre serveur](https://discord.com/oauth2/authorize?client_id=1229810158645809253&permissions=8&integration_type=0&scope=bot+applications.commands)
- 🐳 Docker Image: [Hub](https://hub.docker.com/r/saitejamadha/discord-js-bot)

## 📦 Prerequis

- [Node.js](https://nodejs.org/en/) v16.11.0 ou plus récent
- [Git](https://git-scm.com/downloads)
- [MongoDB](https://www.mongodb.com)

## 🚀 Commencer

- Ouvrez le terminal et éxécutez ces commandes

```
git clone https://github.com/saiteja-madha/discord-js-bot.git
cd discord-js-bot
npm install
```

- Patientez pendant que les dépendances s'installent
- Rennomez `.env.example` en `.env` et modifiez les valeurs du fichier
- Modifiez les valeurs de `config.js`
- Tapez `npm run start` pour démmarer le bot

Si vous avez besoin de plus d'aide vous pouvez consulter notre documentation [ici](docs/additional/installation.md)

<br>

<h1 align="center"> ✨ Fonctionalités ✨ </h1>

### 📡 **DashBord Fonctionel**

- Gérer et paramétrez des fonctions dédiées à chaques serveurs !
- Effectuez des modifications rapidement et facilement !

### 🛑 **Une modération active:**

- **Commandes de modération.** <br /> _Commandes:_ `ban`, `unban`, `timeout`, `voice moderation`, `deafen`, `move`, `warn`, `setnick`, ...
- **Plusieurs commandes de purge** <br /> _Commandes:_ `purge`, `purge attach`, `purge bots`, `purge links`, `purge token`, `purge user`, ...

### 🤖 **Auto Modération:**

- **Système de détéction** <br /> _Commandes:_ `anti ghostping`, `anti spam`, `anti massmention`, ...
- **Système d'auto suppression** <br /> _Commandes:_ `autodelete attachments`, `autodelete invites`, `autodelete links`, `autodelete maxlines`, ...
- **Système d'auto modération** <br /> _Commandes:_ `automod status`, `automod strikes`, `automod action`, `automod debug`, `automod whitelist`, ...

### ⚙️ **Configuration Admin:**

- **Servez vous du bot comme votre assistant!** <br /> _Commandes:_ `autorole`, `farewell`, `welcome`, `counters`, `flag translation`, `reaction roles`, ...
- **Personnalisez votre bot pour chaque serveur.** <br /> _Commandes:_ `setprefix`, `maxwarns`, `modlog`...

### 💁 **Information Gathering:**

- **User Context Interactions**
- **Advanced Information** Get deep information about a user, channel, role, etc.

### 🎵 **Musique:**

- **LossLess Music!** Enjoy high quality lossless music
- **Multi-Platform** Play music from YouTube, SoundCloud, Spotify, and more
- **Filters** Apply filters to your music and spice it up

### 🎉 **Giveaways:**

- **Easy to use** Create giveaways with ease
- **Role specific** giveaways
- **Customizable** Customize the giveaway to your liking
- **Limitless** Create unlimited giveaways

### 🫂 **Social Content:**

- **You Have A CV In Each Server-Specific Bot!** <br /> _Commands:_ `rep`, `rep view`...
- **Do You Love Someone?** <br /> _Commands:_ `rep give`...

### 🎟 **Ticket System:**

- **Make Supporting Members A Breeze With Tickets!** <br/> Highly customizable ticket system with staff roles
- **Multiple Categories** <br/> Don't Want The Tickets To Be Everywhere? Categorize them using select menus

### 📉 **Stats Tracking:**

- **Levelling** Track your server's activity with a level system
- **Leaderboards** See who is the most active user in your server
- **Customizable System** Configure the levelup message, rank cards to your liking

### 🙋‍♂️ **Suggestions:**

- **Get Suggestions From Server Members To Help Your Server Become The Best!** <br /> _Commands:_ `suggest`, `suggestion`...
- **Accept Or Decline The Suggestions And Customize Them To The Max!** <br /> _Commands:_ `suggestion status`, `suggestion channel`, `suggestion appch`, `suggestion rejch`, `suggestion approve`, `suggestion staffadd`, `suggestion staffremove`...

### ⚒️ **Utility Commands:**

- **Need Some Help With Something? Use The Utility Commands To Find Out The Answer To It** <br /> _Commands:_ `bigemoji`, `covid`, `pokedex`, `urban`, `weather`, ...
- **Need Help With Some More Stuff?** <br /> _Commands:_ `help`, `proxies`, `translate`, `paste`, ...

### ⭐ **Anime Content:**

- **Love Anime? Express You Love To Someone Using The React Commands** <br /> _Commands:_ `react`, `hug`, `kiss`, `cuddle`, `pat`, `poke`, `slap`, `smug`, ...

### 🪙 **Economy System:**

- **Want To Become Richest? Use The Economy Commands!** <br /> _Commands:_ `bank`, `daily`, `beg`, `gamble`...
- **Give People Money, Check Your Balance, Or Just Flex!** <br /> _Commands:_ `bank balance`, `bank deposit`, `bank withdraw`, `bank transfer`, ...

### 😁 **Fun Commands:**

- **Have Some Fun In Your Server!** <br /> _Commands:_ `animal`, `facts`, `meme`, `flip`, ...
- **Play Games And Enjoy Yourself** <br /> _Commands:_ `snake`, `together`, `flip coin`, `flip text`, ...

### 📨 **Invite Tracking:**

- **Track who has been inviting people to your server!**
- **Invite Ranks!** Inviter can get awesome rewards and be recognised
- **Configure these settings and customize them to your liking!** <br /> _Commands:_ `resetinvites`, `addinvites`, `invitesimport`, `inviterank`...

### 📷 **Image Manipulation:**

- **Customize other peoples avatars** <br /> _Commands:_ `blur`, `greyscale`, `invert`, `pixelate`, `blur`, `sepia`, `sharpen`, `ad`, `affect`, `beautiful`, `color`...
- **Make some images by yourself or make some art** <br /> _Commands:_ `bobross`, `confusedstonk`, `delete`, `facepalm`, ` hitler`, `jail`, `jokeoverhead`, `karaba`, `mms`, `notstonk`, `poutine`, `rainbow`, `rip`, ` shit`, `stonk`, `tatoo`, `thomas`, `trash`, `wanted`, `wasted`, ...

<br>