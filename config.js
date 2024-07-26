const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '')"2250704618563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || "null,2250704618563

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_54_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVmtuN3dxZWpiYnN4a1NpUGFQODBHWkxxNnRnTTZzYmY5dExHdXN2VFRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJROTFDek5TOVJlV21Ic0Zfc0h0RmF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYxYzhmNjE5LTA1YjgtNDBlYy05ZDUxLTc2ZTdhYTNlODMwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxMDIsXG4gICAgICAxMCxcbiAgICAgIDIzNyxcbiAgICAgIDE4MyxcbiAgICAgIDE3MixcbiAgICAgIDUwLFxuICAgICAgMTI2LFxuICAgICAgMjMyLFxuICAgICAgMTQ2LFxuICAgICAgMjExLFxuICAgICAgMTQzLFxuICAgICAgNzMsXG4gICAgICA0MixcbiAgICAgIDU0LFxuICAgICAgMTUwLFxuICAgICAgMTg2LFxuICAgICAgNDQsXG4gICAgICAyMyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgODYsXG4gICAgICAxNDQsXG4gICAgICAyMjYsXG4gICAgICA5NSxcbiAgICAgIDE0MixcbiAgICAgIDc4LFxuICAgICAgMSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNCxcbiAgICAgIDkyLFxuICAgICAgMTkzLFxuICAgICAgMTksXG4gICAgICAxNCxcbiAgICAgIDQyLFxuICAgICAgMTU5LFxuICAgICAgMCxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWEc2OFRRUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDcwNDYxODU2MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzMzgyMDEyMDcyMDc1OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iNG1POEdFTXpuaTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUkNUNkhOa0IyMXVXVE9PZCtOYk9BSjBZSFdMMXBPcmpKTnBOSmFzeEhnST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsWnFIWVdhOXdXaDR5ME5ldXNaZFpxOUlJeml4REd0bkwxOXVWWk1WWHh1eXRvL1VBTC90V283RnhUdUhNVnJVRXo2Q1V2WUhLcndGcU5RaDF2UHlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJVDZnSW9iRUxiZDQxSnZmQml1aUxpUFVYNU54bEZXNHA4WG4ramdleVlOVWR6eExUQTdSRnhlR3dUL2piaUtXeDVITHltYk42UjFXWDkwTHBuUDdCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNzA0NjE4NTYzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NTUyODBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DAVIS BOT 👾👽",
  ownername:process.env.OWNER_NAME|| " Rabio Davis🤙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.EMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
