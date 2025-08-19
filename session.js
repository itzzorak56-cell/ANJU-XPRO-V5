//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZWZEJ4bHNzaXUybkxMdTMxU3U0SjZ5alZnVkJrdHd4L2duSW53K1ZHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpDS0w3WUhzdGRXcFJ0Zi91RFBncGtUalFGcVJYZEpuNHlFNGVoUDZYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRXhLVXZ0NkNQS3hHZU1SSlp3dWlsdkdIT2tWZzlDSm12dllxdENFSFY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQWoxbFNOQ3M3b0VJNE4vUkVTUFRKSVVaMEYvZFhnOWZIQUhUK2xjV3d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLUGNYNFpoOW9BOG4wbVVoajRnM20yazV5YWJMMUJYYzFxb3E4TEFUVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUveWtCOTMvdTR6RnYzWlV4RWZlQTVORWlIaTFRbDdsaWRSMDc4emtrVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdWbzE2TElIM1doRERwK3hqMld3MnBGUUxXMlVLaCtjVlJMM0pHaCswMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGVrd09LQzJnZW5xWUZwbG5nVUg1cElEYUozc2hJMzZsdXRiTTBjQndHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYOXY1SUVEYlp3QU5mREJPejdtSDFlRmxrQ0N2QitqaS9GS3l2VXNLSGxmeWZyd25SVk5TMlc1WGRCVHpFdm1Eby9zVGRvSFI3cEZmb2FEblFVY2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiIyWUZ2UXFOVTFXK0ZhZlZnaTFiVUVZUG5ubVZ0Qk92Y3ZCMGU1N0dyeDJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQQkFZeThFVVF2MnE5MUQxYVZVZ2VBIiwicGhvbmVJZCI6IjEwNTg1YmUzLTZjYjEtNGU1ZS1iM2Y0LTBhNzA4OGNhYjhlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZE9BRkR1blNNeTh6aDI0L1lGbGJXbFd4SE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM094aGx1dmRjTTFkTG1zYmNIZ0JFcjcrWDBFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5BWVpIUE1NIiwibWUiOnsiaWQiOiIyMzQ4MTQ4MjUzODU1OjEwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MDMzMDk3NjIxNzU5OjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjJhOWZvQkVKZmdrc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXUyVW0rNUJKSE85ME1Ld0MrVlp0VVQwRW04bUpsRXV1L3V1Tmg1cnMzdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidEttVFVwdEtCVzRqbjhZUWh2RVJOYzkxQnRPRitqaVpyMXNnOUtjRXNmSHJMZHVDT09NRFplZjBTNi84dURXQ0xLVDhuZXVNVExiUkNsZ0lWMDMwREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ims3SUlWRXptRkxqK1l4MTVDcHBpQXduWFR1NWZFZ3hvWHlBL0QrR1BDczE5T1daRmxHOTlCYnVGSndnUXRvdE1MTXY2NW82VHhMcTFvSHNpNmRxd2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0ODI1Mzg1NToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcnRsSnZ1UVNSenZkRENzQXZsV2JWRTlCSnZKaVpSTHJ2N3JqWWVhN044In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2MjM0NjIsImxhc3RQcm9wSGFzaCI6Im5tM0JiIn0=
  SESSION_ID:
    process.env.SESSION_ID ||
    "session id",
  BOT_NUMBER:08148253855
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD:1a@#80ad 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
