
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUS4+jRhD+K1FfcrC1gDEYkEZa8AN7sGcM+IEd7aEHmofB0KYbbGZlKUpyiLSKZGWjvfm2P9A/IcKzszuHZDO5VVe1qr6q76t6D9IsIshAFVDeA5xHJaSoNmmFEVCAVvg+ykETeJBCoAC3H9s87iNjnhJVHmfrcizuxbuOb7ramp8WfUL2M2/RclurG3BsAlw8JJH7nYR6Pl46bMe1oBYuOlHQ4rd4Wt3NJqYsatbDrij0QtsgV7fJDTjWGWGUR2nQxyHaohwmBqqmMMpfB397G2+cR5k24p7E4WgioVFnbDTamN1rXH/Y65kNWeWwum2R18FXURlXWe8gYMH3BYtdjl3vNm3Lt9LdmLtn24wVbuVVNV/b8RN8EgUp8kYeSmlEq1fPXR86bMVpEyq4pR/TUZvViac53GGRQiZxyHBmE7+QjZCdvw54ud510caOH+aMsHykpFfO9LuhXZiTxS7sGK2hIWJGCplFor4EPs2ftRL/n7nbhrmDllCJ0jw48KvbwOU2Dk1uxWC27tH2qr9hOnxfVBvp/nXwB1V7a0Ey2FdoQQw1kR2s3Q+Kabb3ZN1Ft/fQTPc8P7fYF/AhLfLvobxv5Ba1/dIZbUSODwPa6OuDdkXxZGMxDMttGoxrxbNHx+sx9J7F7qAsOMs78El/upI8YRgSJFUPFd+yw/6QKSRzt9PUm2tHMapGHlC4YxPkKIgIzSGNsrT28WITQK+0kZsjep0uiE01PrDsQd2JA0NYhtldqwe10V1W4NBoiWQgRpGdbldRzN6AJsB55iJCkDeMCM3yaoIIgQEiQPnpXROk6ECfeLtW45rAj3JC52mBkwx6z6Q+B6HrZkVK7Sp1u7WBcqCw39yI0igNSD3GIoW5G0Yl6oaQEqD4MCHoa4MoRx5QaF6gr0vbzbx67sv1YtQVNRM0wfbKR+QBBXBSSxZ5QWx1BIV/S97s66QQ4zcpoqAJUlj/BZdPnz9ezqcPP17Op58v59Mfl/Ppz8v59PvlfPqtfv9wOZ9+vZxPf/3wIvLhOXo5n3652p8+fwRNkFwr87LY4TmeZzmZ70gK/7Z2H7+2XCP0EIVRQoACutMev9+5w/7Uh5xk6rraD9RuoIJvI3qW2hOXGwE7aqTN0ka1Xm5czG02tmvvdRMWh7i7dMY+ioYk4YRKuvmHJEABOYcxxQ2zY/WspT7WBTMMIBMWZYYzwYMwGO4E3zo06OzAi2V71mVkkzpYTszC5nUvM9a9lhZ52nws9QzRvuO9QtDMm7qah8rIRS+L3TuO9OjEVrE8tPShE1f3vXCWoIcDI4kbeQQXZGzOzSwvH1olhbk+MezGgmxlY4FZKrDzhtbAzIDpCo8qSzR+tREnphY8LcF1CZMvxy+66rMmv376Ebreki80/4cYnmDXimWPzRcZvtymf9lvbdWAi/0omAsM2S4y3vBWbTbtEy3Wc7JWk6Ti+Szs3HrILcHx+K4JcAKpn+VboACyfYCgCfKsqPU/Sv3sO5W62mikfmk6gYSq33ZqFm0RoXCLgcJ1hLYoiFxLevo1zTM8hCQECpguY0EDx78BXWINLp8HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "50944543940", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "18296356275", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "MR_HOMMIE", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "MR_HOMMIE", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "MR_HOMMIE", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "truee",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
