const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xPTkllcFpoVVFxMDErSGNIR1F4TFdtd2E1UXNiT0xPb1NXNloydzczRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JCWXJ5UHQzaFFsZS96eEhua3ppMXhrbzJtMWxGaCtFVEFiSVhTdFppND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHlvQ2lMM0t5ZTBQVFpIZzV1ZFFxWUFZMi9JVmU3dytDem9qZUpYZmxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkamN2UjYzV09teTJ4b0RDOC9hUm1Yd0w2Zm1SaTVxNTRNTEsyclI4akVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLL0RHeGVwb2ZsL2QxWmh3TXMrWko5Z25zV1laenBKWVNqSUtIVGpLSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNRWWVtZVJncUR4MkJybzAyOVY5WlRJY1lqdEcwVEVHRkRlS0p4YTkzVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT08waks3V1kxQWJ2bXRDU2dkWHA0SmRmZkp3K21VeTBtRGxmNXRNN0NFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejUwaGJzcm10T0k4d0RHQ2haTXJIY3ZMYmZ0cTZWQnhZRkM2U2Q5V0Myaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIwUktOU2ZKbkpMaWtBazV2aGZ2T2RFU29ad0pUeFV6K3dyZVprR3BEZXJpejF0MWozSUhXMzR1NVRZY1NnRTdKTTcvVmQ0ekxrTWhKMGI3TjFtMEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJ6YVM0M3c4RnRCWityMWxUQUpXcTRsTnpjenVBKzFvNDJFTXRDSzlLVXZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5ODk3NzY5MjcyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQ0MzQzNBM0MzQzNCRDM4NUQyQjgxMzEyNjNDMEVCMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MzY0NzQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTg5Nzc2OTI3MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFDMzAyQTdDMzYyRkE3RDdCNTVFRTZFMjI2QzBCMDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM2NDc0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTk4OTc3NjkyNzIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVCNzkyQTIzNUQ0RUFDMDk4MEExMTk2RkVGMTk4QzdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNjQ3NTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1FUVZCSkxRIiwibWUiOnsiaWQiOiI5OTg5Nzc2OTI3MjE6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1MjExMDkwNjEwMTg2MTo1QGxpZCIsIm5hbWUiOiJNYW5pIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZjB3KzRHRUliN2dzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1QmUyYU1vTUVEeVdpcURoYXJyMXJEZHR1NUhEOFlIek5qQVZacTN6NEdvPSIsImFjY291bnRTaWduYXR1cmUiOiJia25tT0pBajI2VE96NTNIRGttcTRFR0xqWlB4aDk2Q0UxMC9wT082dmZuVUNxNkhiS2ZmS3gxaTdyVW9wbG1mVlpueFJTMHk1MDZzOFk3QzI4R2NCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVRRRkxad1hLN2syUWRJQlgreStBMFZzYzlwQ2Vwa3VpUjlNeWFrZ0UyWi82Yk1ZTFdEalo2dVJHaFRpTXRseFJyemp5NDd6VFNBWkNndU5paG4zQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5OTg5Nzc2OTI3MjE6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUVh0bWpLREJBOGxvcWc0V3E2OWF3M2JidVJ3L0dCOHpZd0ZXYXQ4K0JxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNjQ3NDUsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHNWIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Mani-bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/mneeys.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Mani-bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mani-bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923033096103",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ManiMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ManiMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "9233033096103",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
