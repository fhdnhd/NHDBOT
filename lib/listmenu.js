const chalk = require("chalk");
const fs = require("fs");

global.allmenu = (prefix, hituet) => {
  return `🅞 = For Owner
🅖 = For Group

-----ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ-----
┌ .ytsearch 
│ .play
│ .ytmp3
│ .ytmp4
│ .google
└ .spotify 
-----Menu Gambar-----
┌ .jadianime
│ .remini
│ .sticker
│ .smeme
└ .removebg
-------ғᴜɴ ᴍᴇɴᴜ------- 
┌ .apakah 
│ .kapan 
└ .confess
------ᴘᴜsʜ ᴍᴇɴᴜ------ 
┌ .pushcontact  🅞
│ .pushcontactv2  🅞
│ .savecontact  🅞
│ .pushmember  🅞
│ .idgrup  🅞
└ .post  🅞
------ɢʀᴏᴜᴘᴍᴇɴᴜ------
┌ .grouplink  🅖
│ .delete  🅖
│ .setppgroup  🅖
│ .setname  🅖
│ .setdesc  🅖
│ .add  🅖
│ .kick  🅖
│ .promote  🅖
│ .demote  🅖
│ .tagall  🅖
│ .opentime  🅖
│ .closetime  🅖
│ .resetlink  🅖
└ .react  🅖
------ᴏᴡɴᴇʀ ᴍᴇɴᴜ------
┌ .self  🅞
│ .public  🅞
│ .join  🅞
│ .broadcast  🅞
│ .creategc  🅞
│ .setexif  🅞
│ .shutdown  🅞
│ .setppbot  🅞
│ .addprem  🅞
│ .delprem  🅞
│ .addbadword  🅞
│ .delbadword  🅞
│ .block  🅞
│ .unblock  🅞
└ .leavegc  🅞
-------ʙᴜɢ ᴍᴇɴᴜ-------
┌ .sendbug  🅞
└ .sendbugv2  🅞
-------ᴀɴᴛɪᴍᴇɴᴜ-------
┌ .antilinkgc  🅖
│ .antilinkall  🅖
│ .antilinktiktok  🅖
│ .antilinkfb  🅖
│ .antilinktwitter  🅖
│ .antilinkig  🅖
│ .antilinktg  🅖
│ .antilinkytvid  🅖
│ .antilinkytch  🅖
│ .antivirus  🅖
│ .antitoxic  🅖
│ .antilink  🅖
└ .antiwame  🅖
------ᴏᴛʜᴇʀ ᴍᴇɴᴜ------
┌ .ping 
│ .ai
│ .aic
│ .listprem 
│ .listbadword 
│ .donate
│ .owner
│ .tts
│ .toqr 
│ .earrape 
│ .tinyurl 
│ .tomp3 
│ .tomp4
│ .toimg 
│ .ssweb
│ .kbbi
│ .chord
└ .runtime 
`;
};

global.animemenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

-----Menu Gambar-----
┌ .jadianime
│ .remini
│ .sticker
│ .smeme
└ .removebg
`;
};
global.antimenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

-------ᴀɴᴛɪᴍᴇɴᴜ-------
┌ .antilinkgc  🅖
│ .antilinkall  🅖
│ .antilinktiktok  🅖
│ .antilinkfb  🅖
│ .antilinktwitter  🅖
│ .antilinkig  🅖
│ .antilinktg  🅖
│ .antilinkytvid  🅖
│ .antilinkytch  🅖
│ .antivirus  🅖
│ .antitoxic  🅖
│ .antilink  🅖
└ .antiwame  🅖
`;
};
global.ownermenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

------ᴏᴡɴᴇʀ ᴍᴇɴᴜ------
┌ .self  🅞
│ .public  🅞
│ .join  🅞
│ .broadcast  🅞
│ .creategc  🅞
│ .setexif  🅞
│ .shutdown  🅞
│ .setppbot  🅞
│ .addprem  🅞
│ .delprem  🅞
│ .addbadword  🅞
│ .delbadword  🅞
│ .block  🅞
│ .unblock  🅞
└ .leavegc  🅞
`;
};

global.bugmenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

-------ʙᴜɢ ᴍᴇɴᴜ-------
┌ .sendbug  🅞
└ .sendbugv2  🅞
`;
};

global.pushmenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

------ᴘᴜsʜ ᴍᴇɴᴜ------ 
┌ .pushcontact  🅞
│ .pushcontactv2  🅞
│ .savecontact  🅞
│ .pushmember  🅞
│ .idgc  🅞
└ .jpm  🅞
`;
};

global.othermenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

------ᴏᴛʜᴇʀ ᴍᴇɴᴜ------
┌ .ping 
│ .listprem 
│ .listbadword 
│ .donate
│ .owner
│ .tts
│ .toqr 
│ .earrape 
│ .tinyurl 
│ .tomp3 
│ .tomp4
│ .toimg 
│ .ssweb
└ .runtime 
`;
};

global.downloadmenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

-----ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ-----
┌ .ytsearch 
│ .play
│ .ytmp3
│ .ytmp4
│ .google
└ .spotify 
`;
};

global.groupmenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

------ɢʀᴏᴜᴘᴍᴇɴᴜ------
┌ .grouplink  🅖
│ .delete  🅖
│ .setppgroup  🅖
│ .setname  🅖
│ .setdesc  🅖
│ .add  🅖
│ .kick  🅖
│ .promote  🅖
│ .demote  🅖
│ .tagall  🅖
│ .opentime  🅖
│ .closetime  🅖
│ .resetlink  🅖
└ .react  🅖
`;
};

global.funmenu = (prefix) => {
  return `🅞 = For Owner
🅖 = For Group

-------ғᴜɴ ᴍᴇɴᴜ-------
┌ .define 
│ .apakah 
│ .kapan 
└ .confess
`;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
