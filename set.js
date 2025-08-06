
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA71V2YrjRhT9lVCvNjOStRsaRqtlu721VynkoSyV5NLuKsm2PPgtkDyE0CGQt37LB/YnBLm7Z5pkMulAiEBQurrce+5yTn0EWY4pGqIadD+CguADLFFzLOsCgS7QqiBABLSBD0sIumBpKquTiQyyTo+8MFno8XQpdxS0Oxl7T5BHsT+dFzY5wdS5AZc2KKptgr2vBIwk3hhK87Pj4+0+j1T/Nt8dplZ1tvWIboJijvvHgqw8zzRvwKWJCDHBWWgWO5QiApMhqqcQk7fBb+ljYzI9jvJgNnP9nSBu5URyTKljHo6Kvt7RSTGLBy4qbPo2+OHEHrrz0ImiVDodjtLEdzxoCumQ2lup1R/Mppp0cAJjvvKe4FMcZsjv+ygrcVm/ve+qjcd+YKvucXpnn9OetV/Qobs+MqPEVA9WqbNiNDyrU3v0NuCFpGhua1tz0awYDM8HJqA85PZraXXepbA3NqMi3rdu7ZkVvgY+JS+7Ev+bvu/VyoeJv9jZJ6FyZVPMKl1idH+zV6PxnitOTM+N8jsccvHb4Jd+TmZSoUbqGs/zdCkvyulS8axeeN5FiimM5mzskmwYnF71HZYV+RpKLIuLQYH3MJYVNlgmmcd6pD5JzI54TlJHAmf1xNY638Nl3Eu8eL9aa3dJsRsa+1lnamyN2t0sstFoTDaxX5vcMilDNby5VhSjuu+DLntpA4JCTEsCS5xnjU1uA+gf5sgjqLw2FyjFxuss0XzLVnZCk+C2t5lrliltpF7laFujUhcnX6iG7G1+A9qgILmHKEW+jWmZk3qEKIUhoqD77XVOTckEpXmJBtgHXcDKHUXkBLEjCR/ou+MOlhQWxbsMlaANApKnIwS6JalQG1z9DUnheU1gDMZSRV2wJFPkLN2wGEa3WNVSmvrSp5wLnCJawrQAXVYSeF7oCB3m0v5PYDAmK2uiIGmyzGgSz7OSyHOMppk6qzKKyPxPMCzOMlipo4u6qnAyb0imwVs6z3KaIDK6Zv4jjO/aIEOn8olKzQJwbBsEmNBymVVFkkP/hWcvP6Hn5VVWzuvM05sDIqD7yozKEmchbQqrMki8HT4gvakDdAOYUPRp5xBB/kstzzqq535DhUFnzDodZQAa7E2gP7emy/61ORlsfMHjb7//+vhw/9Pjw/0v3zw+3P/w+HD/87OheX98fLj/vnECbZBc43KKKHEsxzGswklyl/3QmC+fCmry+6iEOKGgC/SJxB33nm0OqriWZ72eaoaqHqrgcwNeuP3EnkgoNirWFlmrdteRV7BRNPfmx94MVqdYX29uA4RtmrBCLd98IQjogirC/WJ4qPnKJptgFWXL7P1SvPNuidHLJpmAVgF2LMFiAnOxGnvb0iEedl0UQz9eEsPw+dai4/jOkQ0NPyg2CjkaVyFoAx8dsIdeJzsqorp0pFwan6veRqMdvjKnmDqdu9tTsj3vluuB5hpBjx7spCwVUsWnmr2L6WSCU/R+OZsZC40qB8tyGWF+Toy8Q6F6fFKdq+olz7cNflYEfP0MMLqK9/MQ/2HUT7CbfWQu7VcRni+DvxFUzWnB1bEfLoX3NF3l3NB3eCYzqRb3CHXVJKk5Lt9JAx95B3BpiFEksAxykoIuoOkWgjYgedVsdz8L8q9k0rV+/0VqE0hL9TNjvkBCVnzympK8sCHdgS6YrmNBa7a/VotiXsLyhX9AbR5T3oPLH1gQRs0tCQAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
