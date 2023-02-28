const express = require('express')
const app = express();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

app.listen(3000, () => {
  console.log('Source code in discord.gg/hyrisecity !')
});

app.get("/", (req, res) => {
  res.send('https://github.com/kurodzs1tg')
});

client.on('ready', (c) => {
  console.log("Bot đang hoạt động")
  
  client.user.setActivity({
    name: '.gg/hyrisecity',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  });
});

client.login(process.env.token)
