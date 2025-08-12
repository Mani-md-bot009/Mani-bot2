const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJIc0lLWDZSdDUySk5vNFNwd2UzczYzNmxVQ1FMVEdzMzFzWnFpNURtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0JkK21TTHBPdkpYb3pHWVF5dmZaYlBLMUc5S1lkQ3VCMmJrV3I2d0lpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTFhUM2RMdEZxZDlFUWcyS2ZYWm8zV0NmSzNXYjRxVk9KRmNQbk80bjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvN2FYTCswbmxaQWIwTkk5bytQN3dIZU9TaE1ZeFJML3RTMk5NZDdWSms4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPMnlwY0ZaRHZ1WHY2c2phK0hwOFRJK3ljaVJrV2twNFdJRXR2Skx6MEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRqaGM5MGVYbDUzdVVncGhJVFBZSjI2Q1pvVVNCVG1kdjBhSW54L3p0R0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdTaS85eDl6R3hGYkxkclNxQU5vVFRQZWhJRG9kdGtac0pjNVAxNWRWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmpxcER0Y1F6U0d3S3JpVkZiN1o3Qy9GZnQ4MHkvZ3A5NjRvdXpMdEFDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCOEdDL3VtbmNxeThyY2tBUHlISGt4NlRhOWlyeVkvaTQyZkxVY3hXVU1KRTFPTHk5VkpjTXZLeUQzZjBBaSszNnlhczJSTVZ4V2dxZXg4UjZBTWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJPcDZwZXVodW1nQ3dNa0lZeis2eWlrbHpveER2NVNheU5MQk5INFdSWmpVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5ODk3NzY5MjcyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QkM3RUQ5N0FGOTM4N0VBNDU2MDA0NUUyNzE3OTVBNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDE3MTY2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTg5Nzc2OTI3MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREFERjEwQTg4QUY2NzE5Qjc1N0UyRjNBRTI1M0RGRDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTAxNzE2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTk4OTc3NjkyNzIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgzQjMwQjBEMjkyNjU0ODBDQzczNUNDNDFCOTYyQ0M2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwMTcxNjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhLSjNOQVBGIiwibWUiOnsiaWQiOiI5OTg5Nzc2OTI3MjE6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1MjExMDkwNjEwMTg2MToxQGxpZCIsIm5hbWUiOiJNYW5pIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWDB3KzRHRU1mZjdjUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1QmUyYU1vTUVEeVdpcURoYXJyMXJEZHR1NUhEOFlIek5qQVZacTN6NEdvPSIsImFjY291bnRTaWduYXR1cmUiOiIwL0pZVkY1ZmZ6ZGhnTjZSeTBhMzMvNmhKeXVodGo5VmRZaDk1VVF2dWt5eXppVEVXNjl6NFRBZ1BhQXpiMGRvV0V0b0JsYXhzSFgyakQreXV6SWJBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibVZJZER4SFRoMFp1Zk5pMFo0TWdKQnNzMnhUeXhMcFVRdVh3dlBwMU9zNXljNU02VXhuYkxNMFFBak82VTJxeDlkdjRUVGFzZkRzUm55bHlVdkxXaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5OTg5Nzc2OTI3MjE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUVh0bWpLREJBOGxvcWc0V3E2OWF3M2JidVJ3L0dCOHpZd0ZXYXQ4K0JxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwMTcxNjMsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWQ2In0=",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
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
