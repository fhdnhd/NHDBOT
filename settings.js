const chalk = require("chalk");
const fs = require("fs");

//
global.domain = "nhdtunnel.pages.dev";
global.apikey = "ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd";
global.capikey = "ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr";
//documents variants
global.doc1 =
  "application/vnd.openxmlformats-officedocument.presentationml.presentation";
global.doc2 =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
global.doc3 =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
global.doc4 = "application/zip";
global.doc5 = "application/pdf";
global.doc6 = "application/vnd.android.package-archive";

//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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";

//batas
global.APIKeys = {
  "https://api.shinoa.xyz/docs": "6F58BE8D",
};

//owmner v card
global.owner = ["6285156863505"]; //ur owner number
global.ownernomer = "6285156863505"; //ur owner number2
global.ownername = "NHDBOT"; //ur owner name
global.ytname = "@NHD"; //ur yt chanel name
global.socialm = "jangan spam owner!!"; //ur github or insta name
global.location = "Tangerang, Indonesia "; //ur location

//new
global.botname = "NHDBOT";
global.ownernumber = "6285156863505";
global.ownername = "fhdnhd";
global.ownerNumber = ["6285156863505@s.whatsapp.net"];
global.ownerweb = "https://www.youtube.com/";
global.websitex = "https://Bakso kontol";
global.wagc = "https://www.youtube.com/";
global.themeemoji = "";
global.wm = "NHDBOT";
global.botscript = "kamu nanyeak sc"; //script link
global.packname = "NHDBOT";
global.author = "NHDBOT";
global.creator = "6285156863505@s.whatsapp.net";
global.prefa = ["."];
global.hituet = 0;

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"); //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"); //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"); //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"); //ur thumb pic

//menu image maker
global.flaming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.fluming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flarun =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flasmurf =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";

//messages
global.mess = {
  success: "Here you go!",
  admin: "This feature could be used by admins only!",
  botAdmin: "Bot Must Be Admin First!",
  premime: "Premium Special Features If You Want to Register Type Rent",
  owner: "This feature could be used by owner only",
  group: "Features Used Only For Groups!",
  error: "Error",
  private: "Features Used Only For Private Chat!",
  bot: "This feature could be used by bot only",
  wait: "In process...",
  linkm: "Where is the link?",
  endLimit:
    "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
  nsfw: "The feature has not been activated, please contact the admin to activate",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
