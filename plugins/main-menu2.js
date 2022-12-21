const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://chat.whatsapp.com/Ib4JOndTWQmGBSsPGWmIup`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Rizky`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*MaxxyBotz*`
let isi =`Yt Maxxy Botz Adalah Bot WhatsApp Yang di Buat Oleh Kahfi XD\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Grub Bot)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/ac41d7c846aa54045e98e.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.youtube.com/@MaxxyBotz',
    mediaType: 2, 
    description: urlnya,
    title: "Subscribe YT Ownerku:)",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://www.youtube.com/@MaxxyBotz'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
