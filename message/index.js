/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */

/**
 * This source code below is free, please DO NOT sell this in any form!
 * Source code ini gratis, jadi tolong JANGAN jual dalam bentuk apapun!
 *
 * If you copying one of our source code, please give us CREDITS. Because this is one of our hardwork.
 * Apabila kamu menjiplak salah satu source code ini, tolong berikan kami CREDIT. Karena ini adalah salah satu kerja keras kami.
 *
 * If you want to contributing to this source code, pull requests are always open.
 * Apabila kamu ingin berkontribusi ke source code ini, pull request selalu kami buka.
 *
 * Thanks for the contributions.
 * Terima kasih atas kontribusinya.
 */

/********** MODULES **********/
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const sagiri = require('sagiri')
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const fetch = require('node-fetch')
const isPorn = require('is-porn')
const exec = require('await-exec')
const webp = require('webp-converter')
const sharp = require('sharp')
const config = require('../config.json')
const saus = sagiri(config.nao, { results: 5 })
const axios = require('axios')
const tts = require('node-gtts')
const nekobocc = require('nekobocc')
const ffmpeg = require('fluent-ffmpeg')
const bent = require('bent')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const canvas = require('canvacord')
const mathjs = require('mathjs')
const emojiUnicode = require('emoji-unicode')
const moment = require('moment-timezone')
const translate = require('@vitalets/google-translate-api')
moment.tz.setDefault('America/Mexico_City').locale('id')
const genshin = require('genshin')
const google = require('google-it')
const cron = require('node-cron')
const ytsr = require ('ytsr')
const ytdl = require ('ytdl-core')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
/********** END OF MODULES **********/

/********** UTILS **********/
const { msgFilter, color, processTime, isUrl, createSerial } = require('../tools')
const { nsfw, weeaboo, downloader, fun, misc, toxic } = require('../lib')
const { uploadImages } = require('../tools/fetcher')
const { ind, eng } = require('./text/lang/')
const { daily, level, register, afk, reminder, premium, limit} = require('../function')
const Exif = require('../tools/exif')
const exif = new Exif()
const cd = 4.32e+7
const limitCount = 550
const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
const tanggal = moment.tz('America/Mexico_City').format('DD-MM-YYYY')
/********** END OF UTILS **********/

/********** DATABASES **********/
const _nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antinsfw = JSON.parse(fs.readFileSync('./database/group/antinsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const _autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'))
const _ban = JSON.parse(fs.readFileSync('./database/bot/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'))
const _mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _reminder = JSON.parse(fs.readFileSync('./database/user/reminder.json'))
const _daily = JSON.parse(fs.readFileSync('./database/user/daily.json'))
const _stick = JSON.parse(fs.readFileSync('./database/bot/sticker.json'))
const _setting = JSON.parse(fs.readFileSync('./database/bot/setting.json'))
let { memberLimit, groupLimit } = _setting
const slce = JSON.parse(fs.readFileSync('./database/group/silence.json'))
/********** END OF DATABASES **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = msgHandler = async (bocchi = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await bocchi.getHostNumber() + '@c.us'
        const blockNumber = await bocchi.getBlockedIds()
        const ownerNumber = config.ownerBot
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await bocchi.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')

        const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        const prefix = config.prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''
        const mute = slce.includes(chatId)
// OUTRAS
const double = Math.floor(Math.random() * 2) + 1
        const four = Math.floor(Math.random() * 4) + 1
        const triple = Math.floor(Math.random() * 3) + 1
        const cinco = Math.floor(Math.random() * 5) + 1
        const six = Math.floor(Math.random() * 6) + 1
        const seven = Math.floor(Math.random() * 7) + 1
        const octo = Math.floor(Math.random() * 8) + 1
		const lvpc = Math.floor(Math.random() * 100) + 1

        /********** VALIDATOR **********/
        const isCmd = body.startsWith(prefix)
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isBanned = _ban.includes(sender.id)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const isRegistered = register.checkRegisteredUser(sender.id, _registered)
        const isNsfw = isGroupMsg ? _nsfw.includes(groupId) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isMute = isGroupMsg ? _mute.includes(chat.id) : false
        const isAfkOn = afk.checkAfkUser(sender.id, _afk)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isVoice = type === 'ptt'
        /********** END OF VALIDATOR **********/

        // Automate
        premium.expiredCheck(_premium)
        cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Resetting user limit...')
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'America/Mexico_City'
        })

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Copper V'
        if (levelRole >= 5) {
            role = 'Copper IV'
        } else if (levelRole >= 10) {
            role = 'Copper III'
        } else if (levelRole >= 15) {
            role = 'Copper II'
        } else if (levelRole >= 20) {
            role = 'Copper I'
        } else if (levelRole >= 25) {
            role = 'Silver V'
        } else if (levelRole >= 30) {
            role = 'Silver IV'
        } else if (levelRole >= 35) {
            role = 'Silver III'
        } else if (levelRole >= 40) {
            role = 'Silver II'
        } else if (levelRole >= 45) {
            role = 'Silver I'
        } else if (levelRole >= 50) {
            role = 'Gold V'
        } else if (levelRole >= 55) {
            role = 'Gold IV'
        } else if (levelRole >= 60) {
            role = 'Gold III'
        } else if (levelRole >= 65) {
            role = 'Gold II'
        } else if (levelRole >= 70) {
            role = 'Gold I'
        } else if (levelRole >= 75) {
            role = 'Platinum V'
        } else if (levelRole >= 80) {
            role = 'Platinum IV'
        } else if (levelRole >= 85) {
            role = 'Platinum III'
        } else if (levelRole >= 90) {
            role = 'Platinum II'
        } else if (levelRole >= 95) {
            role = 'Platinum I'
        } else if (levelRole >= 100) {
            role = 'Exterminator'
        }
        
        if (isGroupMsg && isCmd && !isOwner && !isGroupAdmins && mute) return console.log(color('[SILENCE]', 'red'), color(`Ignorando comando de ${name} pois ele está mutado...`, 'yellow'))

        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await bocchi.reply(from, `*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        
           // Fix By Orumaito
        if (chats == '.dias grupo') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './buenosdias.mp3', id)
        }
         // Fix By Orumaito
        if (chats == '.alerta') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './alerta.mp3', id)
        }
         // Fix By Orumaito
        if (chats == '.hola bebe') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './bebe.mp3', id)
        }
                 // Fix By Orumaito
        if (chats == '.diablos señorita') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './diablos.mp3', id)
        }
          // Fix By Orumaito
        if (chats == 'me quieres ver la cara') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './estupida.mp3', id)
        }
             // Fix By Orumaito
        if (chats == '.nimerga') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './nimerga.mp3', id)
        }
           // Fix By Orumaito
        if (chats == '.noches') {
        if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                bocchi.sendPtt(from, './noches.mp3', id)
        }
        
   //     if (isGroupMsg && isBotGroupAdmins && !isGroupAdmins) {      
	   //     if (chats.length > 5000) {
       //     await bocchi.sendTextWithMentions(from, `🔰 @${sender.id} \n\n • Este grupo esta protegido contra excesos de texto`)
    //      await bocchi.removeParticipant(groupId, sender.id)
//        }
 //       }

        // Anti-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats. match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                const valid = await bocchi.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                    await bocchi.reply(from, eng.linkDetected(), id)
                    await bocchi.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'yellow'), color('Received a group link but is not a valid link!', 'yellow'))
                }
            }
        }

        // Simple anti virtext, sorted by chat length, by: VideFrelan
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
            if (chats.length > 5000) {
                await bocchi.sendTextWithMentions(from, `Se ha detectado que @${sender.id} esta spameando el grupo\nProcedere a Eliminarlo!`)
                await bocchi.removeParticipant(groupId, sender.id)
             }
         }
	    
	 // Sticker keywords detector by: @hardianto02_
        if (isGroupMsg && isRegistered) {
            if (_stick.includes(chats)) {
                await bocchi.sendImageAsSticker(from, `./temp/sticker/${chats}.webp`, { author: '@SlavyanDesu', pack: 'BocchiBot' })
            }
        }   
	    
        // Anti-fake-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.(?!whatsapp.com))/gi))) {
                console.log(color('[KICK]', 'red'), color('Received a fake group link.', 'yellow'))
                await bocchi.reply(from, 'Ow, este enlace parece un poco sospechoso, por la seguridad de los miembros de este grupo, te patearé.\nBye~.', id)
                await bocchi.removeParticipant(groupId, sender.id)
            }
        }

        // Anti NSFW link
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await bocchi.reply(from, eng.linkNsfw(), id)
                        await bocchi.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }

        // Auto-sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendImageAsSticker(from, imageBase64, { author: '@SlavyanDesu', pack: 'BocchiBot', keepScale: false })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // Auto-sticker-video
        if (isGroupMsg && isAutoStickerOn && isMedia && isVideo && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, pack: 'BocchiBot', author: '@SlavyanDesu', fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (afk.checkAfkUser(ment, _afk)) {
                    const getId = afk.getAfkId(ment, _afk)
                    const getReason = afk.getAfkReason(getId, _afk)
                    const getTime = afk.getAfkTime(getId, _afk)
                    await bocchi.reply(from, eng.afkMentioned(getReason, getTime), id)
                }
            }
            if (afk.checkAfkUser(sender.id, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                await bocchi.sendText(from, eng.afkDone(pushname))
            }
        }
        
        const autores = chats.toLowerCase()

 if (autores. match ('tb.php')){
 	if (isGroupAdmins) { return console.log('Excluyendo admin !')
      } else if (isGroupMsg) { 
await bocchi.reply(from, '🔰Anti link / Posible Virus 🚫', id)
bocchi.removeParticipant(groupId, sender.id)
}
}

if (autores. match ('robotina')){
	await bocchi.reply(from, 'Uhmm todo bien? 🤔', id)

}
        // AUTO REPLY by Piyo >_<
        /*
        if (chats == 'p') {
            if (!isGroupMsg) await bocchi.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'P') {
            if (!isGroupMsg) await bocchi.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'bot') {
            if (!isGroupMsg) await bocchi.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'Bot') {
            if (!isGroupMsg) await bocchi.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'assalamualaikum') {
            if (!isGroupMsg) await bocchi.reply(from, `Waalaikumsalam , Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'Assalamualaikum') {
            if (!isGroupMsg) await bocchi.reply(from, `Waalaikumsalam , Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        */

        // Mute
        if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return
        
        // Ignore banned and blocked users
        if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await bocchi.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
            await bocchi.sendSeen(from)
        }

        if (isCmd && !isPremium && !isOwner) msgFilter.addFilter(from)

        switch (command) {
            case 'antiporn': // Premium, chat VideFikri
                await bocchi.reply(from, 'Premium Feature!\n\nContact: wa.me/6285692655520?text=Buy%20Anti%20Porn', id)
            break
			
			
			

            // Register by Slavyan
            case 'register':
                if (isRegistered) return await bocchi.reply(from, eng.registeredAlready(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const namaUser = q.substring(0, q.indexOf('|') - 1)
                const umurUser = q.substring(q.lastIndexOf('|') + 2)
                const serialUser = createSerial(20)
                if (isGroupMsg) {
                    register.addRegisteredUser(sender.id, namaUser, umurUser, time, serialUser, _registered)
                    await bocchi.reply(from, eng.pc(pushname), id)
                    
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(name || formattedTitle))
                } else {
                    register.addRegisteredUser(sender.id, namaUser, umurUser, time, serialUser, _registered)
                    await bocchi.reply(from, eng.registered(namaUser, umurUser, sender.id, time, serialUser), id)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
            break
            // Level [BETA] by Slavyan
            case 'level':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await bocchi.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const ppLink = await bocchi.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = errorImg
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#ffa200', 'COLOR')
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_card.png`)
                        await bocchi.sendFile(from, `${sender.id}_card.png`, `${sender.id}_card.png`, '', id)
                        fs.unlinkSync(`${sender.id}_card.png`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'leaderboard':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await bocchi.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await bocchi.reply(from. eng.groupOnly(), id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                try {
                    for (let i = 0; i < 10; i++) {
                        var roles = 'Copper V'
                        if (resp[i].level >= 5) {
                            roles = 'Copper IV'
                        } else if (resp[i].level >= 10) {
                            roles = 'Copper III'
                        } else if (resp[i].level >= 15) {
                            roles = 'Copper II'
                        } else if (resp[i].level >= 20) {
                            roles = 'Copper I'
                        } else if (resp[i].level >= 25) {
                            roles = 'Silver V'
                        } else if (resp[i].level >= 30) {
                            roles = 'Silver IV'
                        } else if (resp[i].level >= 35) {
                            roles = 'Silver III'
                        } else if (resp[i].level >= 40) {
                            roles = 'Silver II'
                        } else if (resp[i].level >= 45) {
                            roles = 'Silver I'
                        } else if (resp[i].level >= 50) {
                            roles = 'Gold V'
                        } else if (resp[i].level >= 55) {
                            roles = 'Gold IV'
                        } else if (resp[i].level >= 60) {
                            roles = 'Gold III'
                        } else if (resp[i].level >= 65) {
                            roles = 'Gold II'
                        } else if (resp[i].level >= 70) {
                            roles = 'Gold I'
                        } else if (resp[i].level >= 75) {
                            roles = 'Platinum V'
                        } else if (resp[i].level >= 80) {
                            roles = 'Platinum IV'
                        } else if (resp[i].level >= 85) {
                            roles = 'Platinum III'
                        } else if (resp[i].level >= 90) {
                            roles = 'Platinum II'
                        } else if (resp[i].level >= 95) {
                            roles = 'Platinum I'
                        } else if (resp[i].level >= 100) {
                            roles = 'Exterminator'
                        }
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`
                    }
                    await bocchi.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, eng.minimalDb(), id)
                }
            break

            // Downloader
            case 'joox': // By Hafizh
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                const dataJoox = await axios.get(`https://api.vhtear.com/music?query=${q}&apikey=${config.vhtear}`)
                const cardJoox = new canvas.Spotify()
                    .setAuthor(dataJoox.data.result[0].penyanyi)
                    .setAlbum(dataJoox.data.result[0].album)
                    .setStartTimestamp(dataJoox.data.result[0].duration)
                    .setEndTimestamp(10)
                    .setImage(dataJoox.data.result[0].linkImg)
                    .setTitle(dataJoox.data.result[0].judul)
                cardJoox.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_joox.png`)
                        await bocchi.sendFile(from, `${sender.id}_joox.png`, 'joox.png', eng.joox(dataJoox.data), id)
                        fs.unlinkSync(`${sender.id}_joox.png`)
                        await bocchi.sendFileFromUrl(from, dataJoox.data.result[0].linkMp3, 'joox.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'igdl': // by: VideFrelan
            case 'instadl':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('instagram.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.insta(url)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.post.length; i++) {
                            if (result.post[i].type === 'image') {
                                await bocchi.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.jpg', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            } else if (result.post[i].type === 'video') {
                                await bocchi.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.mp4', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            }
                        }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break 
            case 'facebook':
            case 'fb':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(pushname), id)
                if (!isUrl(url) && !url.includes('facebook.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.fb(url)
                    .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.VideoUrl, 'videofb.mp4', '', id)
                            console.log(from, 'Success sending Facebook video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'ytmp3':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.ytdl(url)
                    .then(async (res) => {
                        if (res.status === 'error') {
                            await bocchi.reply(from, res.pesan, id)
                        } else if (Number(res.size.split(' MB')[0]) >= 30) {
                            await bocchi.reply(from, eng.videoLimit(), id)
                        } else {
                            await bocchi.sendFileFromUrl(from, res.thumbnail, `${res.title}.jpg`, eng.ytFound(res), id)
                            await bocchi.sendFileFromUrl(from, res.url_audio, `${res.title}.mp3`, '', id)
                            console.log('Success sending YouTube video!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'ytmp4':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.ytdl(url)
                    .then(async (res) => {
                        if (res.status === 'error') {
                            await bocchi.reply(from, res.pesan, id)
                        } else if (Number(res.size.split(' MB')[0]) >= 30) {
                            await bocchi.reply(from, eng.videoLimit(), id)
                        } else {
                            await bocchi.sendFileFromUrl(from, res.thumbnail, `${res.title}.jpg`, eng.ytFound(res), id)
                            await bocchi.sendFileFromUrl(from, res.url_video, `${res.title}.mp4`, '', id)
                            console.log('Success sending YouTube video!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'tiktokpic':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    console.log(`Get profile pic for ${q}`)
                    const tkt = await axios.get(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${q}`)
                    if (tkt.data.error) return bocchi.reply(from, tkt.data.error, id)
                    await bocchi.sendFileFromUrl(from, tkt.data.result, 'tiktokpic.jpg', 'Ini :D', id)
                    console.log('Success sending TikTok profile pic!')
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'tiktoknowm': // by: VideFrelan
            case 'tktnowm':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.tikNoWm(url)
                    .then(async ({ result }) => {
                        await bocchi.sendFileFromUrl(from, result.thumb, 'TiktokNoWM.jpg', `➸ *Username*: ${result.username}\n➸ *Caption*: ${result.caption}\n➸ *Uploaded on*: ${result.uploaded_on}\n\nSedang dikirim, sabar ya...`, id)
                        const responses = await fetch(result.link);
                        const buffer = await responses.buffer();
                        fs.writeFileSync(`./temp/${sender.id}_TikTokNoWm.mp4`, buffer)
                        await bocchi.sendFile(from, `./temp/${sender.id}_TikTokNoWm.mp4`, `${sender.id}_TikTokNoWm.mp4`, '', id)
                        console.log('Success sending TikTok video with no WM!')
                        fs.unlinkSync(`./temp/${sender.id}_TikTokNoWm.mp4`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'tiktok':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.tik(url)
                    .then(async ({ result })=> {
                        await bocchi.sendFileFromUrl(from, result.video, 'TikTok.mp4', '', id)
                        console.log('Success sending TikTok video!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'twitter':
            case 'twt':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('twitter.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.tweet(url)
                    .then(async (data) => {
                        if (data.type === 'video') {
                            const content = data.variants.filter((x) => x.content_type !== 'application/x-mpegURL').sort((a, b) => b.bitrate - a.bitrate)
                            const result = await misc.shortener(content[0].url)
                            console.log('Shortlink:', result)
                            await bocchi.sendFileFromUrl(from, content[0].url, 'video.mp4', `Link HD: ${result}`, id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await bocchi.reply(from, 'Error!', id)
                                })
                        } else if (data.type === 'photo') {
                            for (let i = 0; i < data.variants.length; i++) {
                                await bocchi.sendFileFromUrl(from, data.variants[i], data.variants[i].split('/media/')[1], '', id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await bocchi.reply(from, 'Error!', id)
                                })
                            }
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'moddroid': // Chikaa Chantekkzz
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.modroid(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await bocchi.reply(from, 'Not found.', id)
                        } else {
                            await bocchi.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Publisher*: ${result[0].publisher}\n➸ *Version*: ${result[0].latest_version}\n➸ *Genre*: ${result[0].genre}\n\n*Download link*\n${result[0].download}`, id)
                            console.log('Success sending APK mod!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'happymod': // chikaa chantexxzz
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.happymod(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await bocchi.reply(from, 'Not found.', id)
                        } else {
                            await bocchi.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Root*: ${result[0].root}\n➸ *Version*: ${result[0].version}\n➸ *Price*: ${result[0].price}\n\n*Download link*\n${result[0].download}`, id)
                            console.log('Success sending APK mod!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'linedl': // chikaa chantexxzz
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (!isUrl(url) && !url.includes('store.line.me')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.line(url)
                    .then(async (res) => {
                        await bocchi.sendFileFromUrl(from, res.thumb, 'line.png', `*「 LINE STICKER DOWNLOADER 」*\n\n➸ *Title*: ${res.title}\n➸ *Sticker type*: ${res.type}\n\n_Media sedang dikirim, mohon tunggu sebentar..._`, id)
                        for (let i = 0; i < res.sticker.length; i++) {
                            await bocchi.sendStickerfromUrl(from, `${res.sticker[i]}`)
                            console.log('Success sending Line sticker!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break

            // Misc
            case 'google': // chika-chantekkzz
            case 'googlesearch':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                google({ 'query': q, 'no-display': true })
                    .then(async (results) => {
                        let txt = `-----[ *GOOGLE SEARCH* ]-----\n\n*by: rashidsiregar28*\n\n_*Search results for: ${q}*_`
                        for (let i = 0; i < results.length; i++) {
                            txt += `\n\n➸ *Title*: ${results[i].title}\n➸ *Desc*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, txt, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'say':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.sendText(from, q)
            break
            case 'afk': // by Slavyan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (isAfkOn) return await bocchi.reply(from, eng.afkOnAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender.id, time, reason, _afk)
                await bocchi.reply(from, eng.afkOn(pushname, reason), id)
            break
            case 'lyric':
            case 'lirik':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.lirik(q)
                    .then(async ({ result }) => {
                        if (result.code !== 200) return await bocchi.reply(from, 'Not found.', id)
                        await bocchi.reply(from, result.result, id)
                        console.log('Success sending lyric!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'shortlink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url)) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const urlShort = await misc.shortener(url)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.reply(from, urlShort, id)
                console.log('Success!')
            break
            case 'wikipedia':
            case 'wiki':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.wiki(q)
                    .then(async ({ result, status }) => {
                        if (status !== 200) {
                            return await bocchi.reply(from, 'Not found.', id)
                        } else {
                            await bocchi.reply(from, result, id)
                            console.log('Success sending Wiki!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'wikien': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.wikien(q)
                    .then(async ( { result }) => {
                        if (result.status !== '200') {
                            await bocchi.reply(from, 'Not Found!', id)
                        } else {
                            await bocchi.reply(from, `➸ *PageId*: ${result.pageid}\n➸ *Title*: ${result.title}\n➸ *Result*: ${result.desc}`, id)
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'corona': // by CHIKAA CHANTEKKXXZZ
            case 'coronavirus':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.corona(q)
                    .then(async (res) => {
                        await bocchi.sendText(from, '🌎️ Covid Info - ' + q.charAt(0).toUpperCase() + q.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                        console.log('Success sending Result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break

            case 'frasestick': // CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.ttp(q)
                    .then(async (res) => {
                        await bocchi.sendImageAsSticker(from, res.base64)
                        console.log('Success creating TTP!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'genshininfo': // chika chantexxzz
            case 'genshin':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    console.log('Searching for character...')
                    const character = await genshin.characters(q)
                    await bocchi.sendFileFromUrl(from, character.image, `${character.name}.jpg`, `*「 GENSHIN IMPACT 」*\n\n*${character.name}*\n${character.description}\n\n"_${character.quote}_" - ${character.name}\n\n➸ *Name*: ${character.name}\n➸ *Seiyuu*: ${character.cv}\n➸ *Region*: ${character.city}\n➸ *Rating*: ${character.rating}\n➸ *Vision*: ${character.element}\n➸ *Weapon*: ${character.weapon}\n\n${character.url}`)
                    console.log('Success sending Genshin Impact character!')
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error or character not found!', id)
                }
            break
            case 'jadwaltv': // Chika chantexxzz
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    const jtv = await axios.get(`http://api.hurtzcrafter.xyz/jadwaltv?channel=${ar[0]}`)
                    if (jtv.data.status === 'true') {
                        let jtvx = '-----[ *JADWAL TV* ]-----\n'
                        for (let i = 0; i < jtv.data.result.length; i++) {
                            jtvx += `\n${jtv.data.result[i].jam} : ${jtv.data.result[i].tayang}`
                        }
                        await bocchi.sendText(from, jtvx)
                    } else {
                        await bocchi.sendText(from, `
        _*STASIUN TV TIDAK TERDAFTAR*_
        
*Daftar Channel TV:*\n
1. Channel Indosiar
	_keybot_ : ${prefix}jadwaltv indosiar\n
2. Channel TransTV
	_keybot_ : ${prefix}jadwaltv transtv\n
3. Channel Trans7
	_keybot_ : ${prefix}jadwaltv trans7\n
4. Channel Rajawali TV
	_keybot_ : ${prefix}jadwaltv rtv\n
5. Channel SCTV
	_keybot_ : ${prefix}jadwaltv sctv\n
6. Channel RCTI
	_keybot_ : ${prefix}jadwaltv rcti\n
7. Channel NetTV
	_keybot_ : ${prefix}jadwaltv nettv\n
8. Channel KompasTV
	_keybot_ : ${prefix}jadwaltv kompastv\n
9. Channel ANTV
    _keybot_ : ${prefix}jadwaltv antv\n
10. Channel GlobalTV
    _keybot_ : ${prefix}jadwaltv gtv\n
11. Channel Inews TV
    _keybot_ : ${prefix}jadwaltv inews\n
12. Channel MNCTV
    _keybot_ : ${prefix}jadwaltv mnctv\n
13. Channel MetroTV
    _keybot_ : ${prefix}jadwaltv metrotv\n
14. Channel TVOne
    _keybot_ : ${prefix}jadwaltv tvone\n
15. Channel TVRI
    _keybot_ : ${prefix}jadwaltv tvri

        _*List TV Index*_`)
                    }
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'instastory': // By: VideFrelan
            case 'igstory':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.its(q)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.story.itemlist.length; i++) {
                            const { urlDownload } = result.story.itemlist[i]
                            await bocchi.sendFileFromUrl(from, urlDownload, '', 'By: VideFrelan', id)
                            console.log('Success sending IG Story!')
                        }
                    })
            break
            case 'kbbi':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.kbbi(q)
                    .then(async ({ result }) => {
                        await bocchi.reply(from, result.hasil, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'linesticker':
            case 'linestiker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                if (!isOwner) limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.linesticker()
                    .then(async ({ result }) => {
                        let lines = '-----[ *NEW STICKER* ]-----'
                        for (let i = 0; i < result.hasil.length; i++) {
                            lines +=  `\n\n➸ *Title*: ${result.hasil[i].title}\n➸ *URL*: ${result.hasil[i].uri}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, lines, id)
                        console.log('Success sending sticker Line!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'jadwalsholat':
            case 'jadwalsolat':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.jadwalSholat(q)
                    .then((data) => {
                        data.map(async ({isya, subuh, dzuhur, ashar, maghrib, terbit}) => {
                            const x = subuh.split(':')
                            const y = terbit.split(':')
                            const xy = x[0] - y[0]
                            const yx = x[1] - y[1]
                            const perbandingan = `${xy < 0 ? Math.abs(xy) : xy} jam ${yx < 0 ? Math.abs(yx) : yx} menit`
                            const msg = `Jadwal sholat untuk ${q} dan sekitarnya ( *${tanggal}* )\n\nDzuhur: ${dzuhur}\nAshar: ${ashar}\nMaghrib: ${maghrib}\nIsya: ${isya}\nSubuh: ${subuh}\n\nDiperkirakan matahari akan terbit pada pukul ${terbit} dengan jeda dari subuh sekitar ${perbandingan}`
                            await bocchi.reply(from, msg, id)
                            console.log('Success sending jadwal sholat!')
                        })
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'gempa':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.bmkg()
                    .then(async ({ kedalaman, koordinat, lokasi, magnitude, map, potensi, waktu }) => {
                        const teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude} SR\nPotensi: ${potensi}\n\n${waktu}`
                        await bocchi.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'igstalk':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.igStalk(q)
                    .then(async ({ graphql }) => {
                        if (graphql === undefined) {
                            await bocchi.reply(from, 'Not found.', id)
                        } else {
                            const { biography, edge_followed_by, edge_follow, full_name, is_private, is_verified, profile_pic_url_hd, username, edge_owner_to_timeline_media } = graphql.user
                            const text = `*「 IG STALK 」*\n\n➸ *Username*: ${username}\n➸ *Bio*: ${biography}\n➸ *Full name*: ${full_name}\n➸ *Followers*: ${edge_followed_by.count}\n➸ *Followings*: ${edge_follow.count}\n➸ *Private*: ${is_private ? 'Yes' : 'No'}\n➸ *Verified*: ${is_verified ? 'Yes' : 'No'}\n➸ *Total posts*: ${edge_owner_to_timeline_media.count}`
                            await bocchi.sendFileFromUrl(from, profile_pic_url_hd, 'insta.jpg', text, id)
                            console.log('Success sending IG stalk!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'gsmarena':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.gsmarena(q)
                        .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.gsm(result), id)
                            console.log('Success sending phone info!')
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'receipt':
            case 'resep':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.resep(q)
                        .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.receipt(result), id)
                            console.log('Success sending food receipt!')
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'findsticker':
            case 'findstiker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.sticker(q)
                        .then(async ({ result }) => {
                            if (result.response !== 200) return await bocchi.reply(from, 'Not found!', id)
                            for (let i = 0; i < result.data.length; i++) {
                                await bocchi.sendStickerfromUrl(from, result.data[i])
                            }
                            console.log('Success sending sticker!')
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case 'movie':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.movie(q)
                    .then(async ({ result }) => {
                        let movies = `Result for: *${result.judul}*`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n➸ *Quality:* : ${result.data[i].resolusi}\n➸ *URL*: ${result.data[i].urlDownload}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        movies += '\n\nBy: VideFrelan'
                        await bocchi.reply(from, movies, id)
                        console.log('Success sending movie result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'cekongkir': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                const kurir = q.substring(0, q.indexOf('|') - 1)
                const askot = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const tukot = q.substring(q.lastIndexOf('|') + 2)
                misc.ongkir(kurir, askot, tukot)
                    .then(async ({ result }) => {
                        let onkir = `-----[ *${result.title}* ]-----`
                        for (let i = 0; i < result.data.length; i++) {
                            onkir +=  `\n\n➸ *Layanan*: ${result.data[i].layanan}\n➸ *Estimasi*: ${result.data[i].etd}\n➸ *Tarif*: ${result.data[i].tarif}\n➸ *Info*: ${result.informasi}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        onkir += '\n\nBy: VideFrelan'
                        await bocchi.reply(from, onkir, id)
                        console.log('Success sending ongkir info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'distance':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kotaAsal = q.substring(0, q.indexOf('|') - 1)
                const kotaTujuan = q.substring(q.lastIndexOf('|') + 2)
                misc.distance(kotaAsal, kotaTujuan)
                    .then(async ({ result }) => {
                        if (result.response !== 200) {
                            await bocchi.reply(from, 'Error!', id)
                        } else {
                            await bocchi.reply(from, result.data, id)
                            console.log('Success sending distance info!')
                        }
                    })
            break
            case 'ytsearch':
            case 'yts':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.ytSearch(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { urlyt, image, title, channel, duration, views } = await result[i]
                                await bocchi.sendFileFromUrl(from, image, `${title}.jpg`, eng.ytResult(urlyt, title, channel, duration, views), id)
                                console.log('Success sending YouTube results!')
                            }
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'tts':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const speech = q.substring(q.indexOf('|') + 2)
                const ptt = tts(ar[0])
                try {
                    ptt.save(`${speech}.mp3`, speech, async () => {
                        await bocchi.sendPtt(from, `${speech}.mp3`, id)
                        fs.unlinkSync(`${speech}.mp3`)
                    })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
              case 'tomp3': // by: Piyobot
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isVideo || isQuotedVideo) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            break
		case 'toptt':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const name = new Date() * 1
                    fs.writeFileSync(`./temp/audio/${name}.mp3`, mediaData)
                    await bocchi.sendPtt(from, `./temp/audio/${name}.mp3`, id)
                    fs.unlinkSync(`./temp/audio/${name}.mp3`)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
			
            case 'playstore':
            case 'ps':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.playstore(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { app_id, icon, title, developer, description, price, free } = result[i]
                                await bocchi.sendFileFromUrl(from, icon, `${title}.jpg`, eng.playstore(app_id, title, developer, description, price, free))
                            }
                            console.log('Success sending PlayStore result!')
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case 'math':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (typeof mathjs.evaluate(q) !== 'number') {
                    await bocchi.reply(from, eng.notNum(q), id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, `*「 MATH 」*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                }
            break
            case 'shopee':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                const namaBarang = q.substring(0, q.indexOf('|') - 1)
                const jumlahBarang = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.shopee(namaBarang, jumlahBarang)
                        .then(async ({ result }) => {
                            for (let i = 0; i < result.items.length; i++) {
                                const { nama, harga, terjual, shop_location, description, link_product, image_cover } = result.items[i]
                                await bocchi.sendFileFromUrl(from, image_cover, `${nama}.jpg`, eng.shopee(nama, harga, terjual, shop_location, description, link_product))
                            }
                            console.log('Success sending Shopee data!')
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case 'mutual':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await bocchi.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, 'Looking for a partner...', id)
                await bocchi.sendContact(from, register.getRegisteredRandomId(_registered))
                await bocchi.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await bocchi.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, 'Looking for a partner...', id)
                await bocchi.sendContact(from, register.getRegisteredRandomId(_registered))
                await bocchi.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'tafsir':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length === 0) return bocchi.reply(from, `Untuk menampilkan ayat Al-Qur'an tertentu beserta tafsir dan terjemahannya\ngunakan ${prefix}tafsir surah ayat\n\nContoh: ${prefix}tafsir Al-Mulk 10`, id)
                await bocchi.reply(from, eng.wait(), id)
                const responSurah = await axios.get('https://raw.githubusercontent.com/VideFrelan/words/main/tafsir.txt')
                const { data } = responSurah.data
                const idx = data.findIndex((post) => {
                    if ((post.name.transliteration.id.toLowerCase() === args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() === args[0].toLowerCase())) return true
                })
                const nomerSurah = data[idx].number
                if (!isNaN(nomerSurah)) {
                    const responseh = await axios.get('https://api.quran.sutanlab.id/surah/'+ nomerSurah + '/'+ args[1])
                    const { data } = responseh.data
                    let pesan = ''
                    pesan += 'Tafsir Q.S. ' + data.surah.name.transliteration.id + ':' + args[1] + '\n\n'
                    pesan += data.text.arab + '\n\n'
                    pesan += '_' + data.translation.id + '_\n\n' + data.tafsir.id.long
                    await bocchi.reply(from, pesan, id)
                }
            break
            case 'listsurah':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.listSurah()
                    .then(async ({ result }) => {
                        let list = '-----[ AL-QUR\'AN LIST ]-----\n\n'
                        for (let i = 0; i < result.list.length; i++) {
                            list += `${result.list[i]}\n\n`
                        }
                        await bocchi.reply(from, list, id)
                        console.log('Success sending Al-Qur\'an list!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'surah':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.getSurah(args[0])
                    .then(async ({ result }) => {
                        await bocchi.reply(from, `${result.surah}\n\n${result.quran}`, id)
                        console.log('Success sending surah!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'hadis': // irham01
            case 'hadees':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await bocchi.reply(from, eng.hadis(), id)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    if (ar[0] === 'darimi') {
                        const hdar = await axios.get(`https://api.hadith.sutanlab.id/books/darimi/${args[1]}`)
                        await bocchi.sendText(from, `${hdar.data.data.contents.arab}\n${hdar.data.data.contents.id}\n\n*H.R. Darimi*`, id)
                    } else if (ar[0] === 'ahmad') {
                        const hmad = await axios.get(`https://api.hadith.sutanlab.id/books/ahmad/${args[1]}`)
                        await bocchi.sendText(from, `${hmad.data.data.contents.arab}\n${hmad.data.data.contents.id}\n\n*H.R. Ahmad*`, id)
                    } else if (ar[0] === 'bukhari') {
                        const hbukh = await axios.get(`https://api.hadith.sutanlab.id/books/bukhari/${args[1]}`)
                        await bocchi.sendText(from, `${hbukh.data.data.contents.arab}\n${hbukh.data.data.contents.id}\n\n*H.R. Bukhori*`, id)
                    } else if (ar[0] === 'muslim') {
                        const hmus = await axios.get(`https://api.hadith.sutanlab.id/books/muslim/${args[1]}`)
                        await bocchi.sendText(from, `${hmus.data.data.contents.arab}\n${hmus.data.data.contents.id}\n\n*H.R. Muslim*`, id)
                    } else if (ar[0] === 'malik') {
                        const hmal = await axios.get(`https://api.hadith.sutanlab.id/books/malik/${args[1]}`)
                        await bocchi.sendText(from, `${hmal.data.data.contents.arab}\n${hmal.data.data.contents.id}\n\n*H.R. Malik*`, id)
                    } else if (ar[0] === 'nasai') {
                        const hnas = await axios.get(`https://api.hadith.sutanlab.id/books/nasai/${args[1]}`)
                        await bocchi.sendText(from, `${hnas.data.data.contents.arab}\n${hnas.data.data.contents.id}\n\n*H.R. Nasa'i*`, id)
                    } else if (ar[0] === 'tirmidzi') {
                        const htir = await axios.get(`https://api.hadith.sutanlab.id/books/tirmidzi/${args[1]}`)
                        await bocchi.sendText(from, `${htir.data.data.contents.arab}\n${htir.data.data.contents.id}\n\n*H.R. Tirmidzi*`, id)
                    } else if (ar[0] === 'ibnumajah') {
                        const hibn = await axios.get(`https://api.hadith.sutanlab.id/books/ibnu-majah/${args[1]}`)
                        await bocchi.sendText(from, `${hibn.data.data.contents.arab}\n${hibn.data.data.contents.id}\n\n*H.R. Ibnu Majah*`, id)
                    } else if (ar[0] === 'abudaud') {
                        const habud = await axios.get(`https://api.hadith.sutanlab.id/books/abu-daud/${args[1]}`)
                        await bocchi.sendText(from, `${habud.data.data.contents.arab}\n${habud.data.data.contents.id}\n\n*H.R. Abu Daud*`, id)
                    } else {
                        await bocchi.sendText(from, eng.hadis(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'asmaulhusna': // irham01
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                const asmaulHusna = await axios.get (`https://api-melodicxt-2.herokuapp.com/api/asmaallHusna?number=${args[0]}&apiKey=${config.melodic}`)
                const assna = asmaulHusna.data.result
                bocchi.sendFileFromUrl(from, 'https://i2.wp.com/seruni.id/wp-content/uploads/2016/09/Allah.png?resize=696%2C696&ssl=1', 'gambar.jpg', eng.asmaulHusna(assna), id)
            break
            case 'randomquran': // irham01
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                const ranquran = await axios.get('https://api.zeks.xyz/api/randomquran')
                const auquran = ranquran.data.result.audio
                await bocchi.reply(from, eng.randomQuran(ranquran), id)
                await bocchi.sendFileFromUrl(from, auquran, 'rquran.mp3', '', id)
            break
            case 'motivasi':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                misc.motivasi()
                    .then(async (body) => {
                        const motivasiSplit = body.split('\n')
                        const randomMotivasi = motivasiSplit[Math.floor(Math.random() * motivasiSplit.length)]
                        await bocchi.sendText(from, randomMotivasi)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'play':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.ytPlay(q)
                    .then(async ({ result }) => {
                        if (Number(result.size.split(' MB')[0]) >= 10.0) return bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, `Judul: ${result.title}\nSize: *${result.size}*\n\nGagal, Maksimal video size adalah *10MB*!`, id)
                        await bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.ytPlay(result), id)
                        const responses = await fetch(result.mp3);
                        const buffer = await responses.buffer(); 
                        await fs.writeFile(`./temp/ytplay_${sender.id}.mp3`, buffer)
                        await bocchi.sendFile(from, `./temp/ytplay_${sender.id}.mp3`, `ytplay_${sender.id}`, id)
                        console.log('Success sending Play MP3!')
                        fs.unlinkSync(`./temp/ytplay_${sender.id}.mp3`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'playv': // Alvio Adji Januar 
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait() ,id)
                const getvid = await axios.get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=apivinz&q=${q}`)
                if (getvid.data.status === false) {
                    await bocchi.reply(from, getvid.data.message, id)
                } else if (Number(getvid.data.result.size.split('MB')[0]) >= 10.00) {
                    await bocchi.reply(from, 'Maaf durasi musik sudah melebihi batas maksimal 10 MB!', id)
                } else {
                    await bocchi.sendFileFromUrl(from, getvid.data.result.thumb, 'thumb.jpg', `Title: ${getvid.data.result.title}\n\n───────────⚪───────────\n(っ◔◡◔)っ\n───────────⚪───────────\n➥Size: ${getvid.data.result.size}\n➥Type: Mp4\n➥Link Download: ${getvid.data.result.link}\n\n*Mohon Tunggu Bot Akan Mengirim Video!*`, id)
                    await bocchi.sendFileFromUrl(from, getvid.data.result.link, 'play.mp4' , '', id)
                }
            break
            case 'whois':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.whois(args[0])
                    .then(async ({ result }) => {
                        await bocchi.reply(from, `*「 WHOIS 」*\n\n➸ *IP address*: ${result.ip_address}\n➸ *City*: ${result.city}\n➸ *Region*: ${result.region}\n➸ *Country*: ${result.country}\n➸ *ZIP code*: ${result.postal_code}\n➸ *Latitude and longitude*: ${result.latitude_longitude}\n➸ *Time zone*: ${result.time_zone}\n➸ *Call code*: ${result.calling_code}\n➸ *Currency*: ${result.currency}\n➸ *Language code*: ${result.languages}\n➸ *ASN*: ${result.asn}\n➸ *Organization*: ${result.org}`, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'email': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const emailTarget = q.substring(0, q.indexOf('|') - 1)
                const subjectEmail = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const messageEmail = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.email(emailTarget, subjectEmail, messageEmail)
                    .then(async ({ result }) => {
                        if (result.status === '204') {
                            await bocchi.reply(from, 'Server busy!', id)
                        } else {
                            await bocchi.reply(from, `*Success sending email*!\n➸ *Target*: ${emailTarget}\n➸ *Subject*: ${result.subjek}\n➸ *Message*: ${result.pesan}`, id)
                            console.log('Success sending email!')
                        }
                    })
            break
            case 'sms':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const pesanPengirim = q.substring(0, q.indexOf('|') - 1)
                const nomorPenerima = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.sms(nomorPenerima, pesanPengirim)
                    .then(async ({ status, pesan }) => {
                        if (status !== 'success') return await bocchi.reply(from, pesan, id)
                        await bocchi.reply(from, `Success sending SMS to: ${nomorPenerima}\nMessage: ${pesanPengirim}`, id)
                        console.log(`Success sending SMS to ${nomorPenerima}!`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
			
		case 'addsticker': // by @hardianto02_
            case 'addstiker':
                if (!isRegistered) return await bocchi.reply(from, ind.notRegistered(), id)
                if (!q) return await bocchi.reply(from, ind.wrongFormat(), id)
                if (!isGroupMsg) return await bocchi.reply(from, ind.groupOnly(), id) 
                if (isQuotedSticker) {
                    if (_stick.includes(q)) {
                        await bocchi.reply(from, ind.stickerAddAlready(q), id)
                    } else { 
                        _stick.push(q)
                        fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        fs.writeFileSync(`./temp/sticker/${q}.webp`, mediaData)
                        await bocchi.reply(from, ind.stickerAdd(), id)
                    }
                } else {
                    await bocchi.reply(from, ind.wrongFormat(), id)
                }
            break
            case 'delsticker':
                if (!isRegistered) return await bocchi.reply(from, ind.notRegistered(), id)
                if (!q) return await bocchi.reply(from, ind.wrongFormat(), id)
                if (!isGroupMsg) return await bocchi.reply(from, ind.groupOnly(), id)
                if (_stick.includes(q)) {
                    _stick.splice(q, 1)
                    fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                    fs.unlinkSync(`./temp/sticker/${q}.webp`)
                    await bocchi.reply(from, ind.stickerDel(), id)
                } else {
                    await bocchi.reply(from, ind.stickerNotFound())
                }
            break
            case 'stickerlist':
            case 'liststicker':
            case 'stikerlist':
            case 'liststiker':
                if (!isRegistered) return await bocchi.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, ind.groupOnly(), id)
                let stickerList = `*── 「 STICKER DATABASE 」 ──*\nTotal: ${_stick.length}\n\n`
                for (let i of _stick) {
                    stickerList += `➸ ${i.replace(_stick)}\n`
                }
                await bocchi.sendText(from, stickerList)
            break
			
            case 'toxic':
                if (!isRegistered) return await bocchi.reply(from , eng.notRegistered(), id)
                await bocchi.reply(from, toxic(), id)
            break
            case 'alkitab':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.alkitab(q)
                    .then(async ({ result }) => {
                        let alkitab = '-----[ *AL-KITAB* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            alkitab +=  `\n\n➸ *Ayat*: ${result[i].ayat}\n➸ *Isi*: ${result[i].isi}\n➸ *Link*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, alkitab, id)
                        console.log('Success sending Al-Kitab!')
                    })
            break
			
            case 'reminder': // by Slavyan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const timeRemind = q.substring(0, q.indexOf('|') - 1)
                const messRemind = q.substring(q.lastIndexOf('|') + 2)
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender.id, messRemind, timeRemind, _reminder)
                await bocchi.sendTextWithMentions(from, eng.reminderOn(messRemind, parsedTime, sender))
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender.id, _reminder)) {
                        await bocchi.sendTextWithMentions(from, eng.reminderAlert(reminder.getReminderMsg(sender.id, _reminder), sender))
                        _reminder.splice(reminder.getReminderPosition(sender.id, _reminder), 1)
                        fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
            break
			
			
            case 'imagetourl':
            case 'imgtourl':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await bocchi.reply(from, linkImg, id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'infohoax':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.infoHoax()
                    .then(async ({ result }) => {
                        let txt = '*「 HOAXES 」*'
                        for (let i = 0; i < result.length; i++) {
                            const { tag, title, link } = result[i]
                            txt += `\n\n➸ *Status*: ${tag}\n➸ *Deskripsi*: ${title}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.sendFileFromUrl(from, result[0].image, 'hoax.jpg', txt, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'trending':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.trendingTwt()
                    .then(async ({ result }) => {
                        let txt = '*「 TRENDING TWITTER 」*'
                        for (let i = 0; i < result.length; i++) {
                            const { hastag, rank, tweet, link } = result[i]
                            txt += `\n\n${rank}. *${hastag}*\n➸ *Tweets*: ${tweet}\n➸ *Link*: ${link}`
                        }
                        await bocchi.reply(from, txt, id)
                        console.log('Success sending trending!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'jobseek':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.jobSeek()
                    .then(async ({ result }) => {
                        let txt = '*「 JOB SEEKER 」*'
                        for (let i = 0; i < result.length; i++) {
                            const { perusahaan, link, profesi, gaji, lokasi, pengalaman, edukasi, desc, syarat } = result[i]
                            txt += `\n\n➸ *Perusahaan*: ${perusahaan}\n➸ *Lokasi*: ${lokasi}\n➸ *Profesi*: ${profesi}\n➸ *Gaji*: ${gaji}\n➸ *Pengalaman*: ${pengalaman}\n➸ *Deskripsi*: ${desc}\n➸ *Syarat*: ${syarat}\n➸ *Edukasi*: ${edukasi}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, txt, id)
                        console.log('Success sending jobseek!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'call':
            case 'spamcall':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.call(q)
                    .then(async ({ result }) => {
                        await bocchi.reply(from, result.logs, id)
                        console.log(`Success calling number: ${q}`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'spamsms':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 2) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isNaN(Number(args[0])) && isNaN(Number(args[1]))) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (Number(args[1]) > 10) return await bocchi.reply(from, 'Maximum 10 SMS.', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.spamsms(args[0], args[1])
                    .then(async ({ status, logs, msg }) => {
                        if (status !== 200) {
                            await bocchi.reply(from, msg, id)
                        } else {
                            await bocchi.reply(from, logs, id)
                            console.log('Success sending spam!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'translate':
            case 'trans':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const texto = q.substring(0, q.indexOf('|') - 1)
                const languaget = q.substring(q.lastIndexOf('|') + 2)
                translate(texto, {to: languaget}).then(res => {bocchi.reply(from, res.text, id)})
            break
            case 'bass':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break

		case 'nightcore':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter('asetrate=44100*1.25')
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break	
			
			
			
			
            // Bot
            case 'menu':
            case 'help':
                const jumlahUser = _registered.length
                const levelMenu = level.getLevelingLevel(sender.id, _level)
                const xpMenu = level.getLevelingXp(sender.id, _level)
                const reqXpMenu = 5 * Math.pow(levelMenu, 2) + 50 * 1 + 100
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args[0] === '1') {
                    await bocchi.sendText(from, eng.menuDownloader())
                } else if (args[0] === '2') {
                    await bocchi.sendText(from, eng.menuBot())
                } else if (args[0] === '3') {
                    await bocchi.sendText(from, eng.menuMisc())
                } else if (args[0] === '4') {
                    await bocchi.sendText(from, eng.menuSticker())
                } else if (args[0] === '5') {
                    await bocchi.sendText(from, eng.menuWeeaboo())
                } else if (args[0] === '6') {
                    await bocchi.sendText(from, eng.menuFun())
                } else if (args[0] === '7') {
                    await bocchi.sendText(from, eng.menuModeration())
                } else if (args[0] === '8') {
                    if (isGroupMsg && !isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    await bocchi.sendText(from, eng.menuNsfw())
                } else if (args[0] === '9') {
                    if (!isOwner) return await bocchi.reply(from, eng.ownerOnly())
                    await bocchi.sendText(from, eng.menuOwner())
                } else if (args[0] === '10') {
                    if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                    await bocchi.sendText(from, eng.menuLeveling())
                } else {
                    await bocchi.sendText(from, eng.menu(jumlahUser, levelMenu, xpMenu, role, pushname, reqXpMenu, isPremium ? 'YES' : 'NO'))
                }
            break
            case 'rules':
            case 'rule':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, eng.rules())
            break
            case 'nsfw':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isNsfw) return await bocchi.reply(from, eng.nsfwAlready(), id)
                    _nsfw.push(groupId)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await bocchi.reply(from, eng.nsfwOn(), id)
                } else if (ar[0] === 'disable') {
                    _nsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await bocchi.reply(from, eng.nsfwOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'status':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
            break
            case 'listblock':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                let block = eng.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace('@c.us', '')}\n`
                }
                await bocchi.sendTextWithMentions(from, block)
            break
            case 'ownerbot':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendContact(from, ownerNumber)
            break
            case 'runtime': // BY HAFIZH
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                const formater = (seconds) => {
                    const pad = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
                }
                const uptime = process.uptime()
                await bocchi.reply(from, `── *「 BOT UPTIME 」* ──\n\n ❏${formater(uptime)}`, id)
            break
            case 'ping':
            case 'p':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} secs`)
            break
            case 'delete':
            case 'del':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!quotedMsg) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case 'report':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await bocchi.reply(from, eng.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await bocchi.sendText(ownerNumber, `-----[ REPORT ]-----\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await bocchi.reply(from, eng.received(pushname), id)
                    } else {
                        await bocchi.sendText(ownerNumber, `-----[ REPORT ]-----\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await bocchi.reply(from, eng.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
            break
            case 'tos':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendLinkWithAutoPreview(from, 'https://wa.me/+5218333659697', eng.tos(ownerNumber))
            break
            case 'join':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('chat.whatsapp.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const checkInvite = await bocchi.inviteInfo(url)
                if (isOwner) {
                    await bocchi.joinGroupViaLink(url)
                    await bocchi.reply(from, eng.ok(), id)
                    await bocchi.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                } else {
                    const getGroupData = await bocchi.getAllGroups()
                    if (getGroupData.length >= groupLimit) {
                        await bocchi.reply(from, `Invite refused. Max group is: ${groupLimit}`, id)
                    } else if (getGroupData.size <= memberLimit) {
                        await bocchi.reply(from, `Invite refused. Minimum member is: ${memberLimit}`, id)
                    } else {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await bocchi.joinGroupViaLink(url)
                        await bocchi.reply(from, eng.ok(), id)
                        await bocchi.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                    }
                }
            break
            case 'premiumcheck':
            case 'cekpremium':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await bocchi.reply(from, `*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender.id}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
            break
            case 'premiumlist':
            case 'listpremium':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push(await bocchi.getContact(premium.getAllPremiumUser(_premium)[i]))
                    listPremi += `${i + 1}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@c.us', '')}\n➸ *Name*: ${arrayPremi[i].pushname}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                await bocchi.reply(from, listPremi, id)
            break
            case 'getpic':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (mentionedJidList.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(mentionedJidList[0])
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var pek = errorImg
                    } else {
                        pek = userPic
                    }
                    await bocchi.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(args[0] + '@c.us')
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var peks = errorImg
                    } else {
                        peks = userPic
                    }
                    await bocchi.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'serial':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                const serials = args[0]
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const name = register.getRegisteredNameFromSerial(serials, _registered)
                    const age = register.getRegisteredAgeFromSerial(serials, _registered)
                    const time = register.getRegisteredTimeFromSerial(serials, _registered)
                    const id = register.getRegisteredIdFromSerial(serials, _registered)
                    await bocchi.sendText(from, eng.registeredFound(name, age, time, serials, id))
                } else {
                    await bocchi.sendText(from, eng.registeredNotFound(serials))
                }
            break
            case 'limit':
                if (isPremium || isOwner) return await bocchi.reply(from, '⤞ Limit left: ∞ (UNLIMITED)', id)
                await bocchi.reply(from, `⤞ Limit left: ${limit.getLimit(sender.id, _limit, limitCount)} / 25\n\n*_Limit direset pada pukul 00:00 WIB_*`, id)
            break

            //EDUCATION
            case 'kelpersegi':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const persegi = bdr.datar.keliling.persegi(q, false)
                const caraPersegi = bdr.datar.keliling.persegi(q, true)
                await bocchi.reply(from, `*Hasil*: ${persegi}\n*Rumus*: ${caraPersegi}`, id)
            break
            case 'luaspersegi':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const luaspersegi = bdr.datar.luas.persegi(q, false)
                const luaspersegis = bdr.datar.luas.persegi(q, true)
                await bocchi.reply(from, `*Hasil*: ${luaspersegi}\n*Rumus*: ${luaspersegis}`, id)
            break
            case 'kuadrat':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kuadrat = bdr.rdb.kuadrat(q)
                await bocchi.reply(from, `*Hasil*: ${kuadrat}`, id)
            break
            case 'kubik':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kubik = bdr.rdb.kubik(q)
                await bocchi.reply(from, `*Hasil*: ${kubik}`, id)
            break

            // Weeb zone
            case 'neko':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Getting neko image...')
                await bocchi.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'character':  //byAnto
            case 'chartsearch':
              if (!q) return await bocchi.reply(from, '*masukan nama karakter yang ingin di cari dengan benar*', id) 
              if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
              if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
              limit.addLimit(sender.id, _limit, isPremium, isOwner) 
              try{
                await bocchi.reply(from, eng.wait(), id)
                const chara_key = await axios.get(`http://lolhuman.herokuapp.com/api/character/${q}?apikey=${config.lol}`)
                const { name, description, favourites, media, image } = chara_key.data.result
                let text_1 = `-----[ *${q}* ]-----\n*[NAME✨] : ${name.full}*\n*[KANJI] : ${name.native}*\n*[ID] : ${chara_key.data.result.id}*\n*[FAVORITE]: ${favourites}*\n\n`
                        for (let i = 0; i < media.nodes.length; i++) {
                const { id, idMal, title, type } = media.nodes[i]
                    text_1 += `_________________\n\n_📚Judul:${title.romaji}_\n\n_Type:${type}_\n\n_📚Kanji:${title.native}_\n\n_CharId:${idMal}_\n\n_Id:${id}_\n_______________________\n\n`
                        }
                    text_1 += `*[DESC] :* ${description}\n____________[Character]__________`
 
                    await bocchi.sendFileFromUrl(from, image.large, `${q}.jpg`, `${text_1}`, id)
                    } catch {
                        bocchi.reply(from, 'Character Not Found', id)
                    }
                   break
            case 'doujin':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                const doujin_ = await axios.get(`http://lolhuman.herokuapp.com/api/nhentai/${q}?apikey=${config.lol}`)
                try {
                    const { title_romaji, title_native, read, file_pdf, info } = doujin_.data.result
                    const kntl_ = doujin_.data.result.image
                    const randem = kntl_[Math.floor(Math.random() * kntl_.length)]
                    const cepete = `_____DOUJIN_____
*[Title] : ${title_romaji}*
*[info] : ${info}*
*[Read] ${read}*
`
                    await bocchi.sendFileFromUrl(from, randem, 'duji.jpg', `${cepete}`, id)
                    await bocchi.sendFileFromUrl(from, file_pdf, `${q}.pdf`, `${title_native}`, id)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'wallpaper':
            case 'wp':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Getting wallpaper image...')
                await bocchi.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id )
                    })
            break
            case 'kemono':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Getting kemonomimi image...')
                await bocchi.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'kusonime':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.anime(q)
                    .then(async ({ info, link_dl, sinopsis, thumb, title, error, status }) => {
                        if (status === false) {
                            return await bocchi.reply(from, error, id)
                        } else {
                            let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download:\n${link_dl}`
                            await bocchi.sendFileFromUrl(from, thumb, 'animek.jpg', animek, null, null, true)
                                .then(() => console.log('Success sending anime info!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'komiku':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.manga(q)
                    .then(async ({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}${genre}\nSinopsis: ${sinopsis}\nLink download:\n${link_dl}`
                        await bocchi.sendFileFromUrl(from, thumb, 'mangak.jpg', mangak, null, null, true)
                            .then(() => console.log('Success sending manga info!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'wait':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    weeaboo.wait(imageBase64)
                        .then(async (result) => {
                            if (result.docs && result.docs.length <= 0) {
                                return await bocchi.reply(from, 'Anime not found! :(', id)
                            } else {
                                const { title, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
                                let teks = ''
                                if (similarity < 0.92) {
                                    teks = 'Low similarity. 🤔\n\n'
                                } else {
                                    teks += `*Title*: ${title}\n*Romaji*: ${title_romaji}\n*English*: ${title_english}\n*Episode*: ${episode}\n*Similarity*: ${(similarity * 100).toFixed(1)}%`
                                    const video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
                                    await bocchi.sendFileFromUrl(from, video, `${title_romaji}.mp4`, teks, id)
                                        .then(() => console.log('Success sending anime source!'))
                                }
                            }
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'source':
            case 'sauce':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    try {
                        const imageLink = await uploadImages(mediaData, `sauce.${sender.id}`)
                        console.log('Searching for source...')
                        const results = await saus(imageLink)
                        for (let i = 0; i < results.length; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = 'Low similarity. 🤔\n\n'
                            } else {
                                teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                                await bocchi.sendLinkWithAutoPreview(from, results[i].url, teks)
                                    .then(() => console.log('Source found!'))
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
		case 'lolivid':  //Piyobot
                if (!isRegistered) return await bocchi.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                weeaboo.loli()
                    .then(async (body) => {
                        let lolipiyo = body.split('\n')
                        let papololi = lolipiyo[Math.floor(Math.random() * lolipiyo.length)]
                        await bocchi.sendFileFromUrl(from, papololi, 'loli.mp4', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break	
            case 'waifu':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.waifu(false)
                    .then(async ({ url }) => {
                        await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            .then(() => console.log('Success sending waifu!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'anitoki':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.anitoki()
                    .then(async ({ result }) => {
                        let anitoki = '-----[ *ANITOKI LATEST* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            anitoki += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, anitoki, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'neonime':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.neonime()
                    .then(async ({ status, result }) => {
                        if (status !== 200) return await bocchi.reply(from, 'Not found.', id)
                        let neoInfo = '-----[ *NEONIME LATEST* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            const { date, title, link, desc } = result[i]
                            neoInfo += `\n\n➸ *Title*: ${title}\n➸ *Date*: ${date}\n➸ *Synopsis*: ${desc}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, neoInfo, id)
                        console.log('Success sending Neonime latest update!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'anoboy':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.anoboy()
                    .then(async ({ result }) => {
                        let anoboyInfo = '-----[ *ANOBOY ON-GOING* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            anoboyInfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, anoboyInfo, id)
                        console.log('Success sending on-going anime!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'nimesticker': // by CHIKAA CHANTEKKXXZZ
            case 'animesticker': 
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                weeaboo.snime()
                    .then(async (body) => {
                        const wifegerak = body.split('\n')
                        const wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        await bocchi.sendStickerfromUrl(from, wifegerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'quotenime':
            case 'quotesnime':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                console.log('Sending random quote...')
                const quoteznime = await axios.get('https://mhankbarbar.tech/api/quotesnime/random')
                await bocchi.sendText(from, `➸ *Quotes* : ${quoteznime.data.data.quote}\n➸ *Character* : ${quoteznime.data.data.chara} from Anime ${quoteznime.data.data.anime}`, id)
                    .then(() => console.log('Success sending quotes..'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break

            // Fun
            case 'bapak': // By Kris
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                axios.get(`https://api.terhambar.com/bpk?kata=${q}`)
                    .then(async (res) => await bocchi.reply(from, res.data.text, id))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'puisi': // By Kris
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/puisi2')
                    .then(async (res) => await bocchi.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'cerpen': // By Kris
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(async (res) => await bocchi.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'creepyfact': // By Kris
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await bocchi.reply(from, creepyz, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'quotes':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                misc.quotes()
                .then(async ({ result }) => {
                    await bocchi.reply(from, `➸ *Quotes*: ${result.quotes}\n➸ *Author*: ${result.author}`, id)
                })
            break
            case 'asupan': // shansekai
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                fun.asupan()
                    .then(async (body) => {
                        const asupan = body.split('\n')
                        const asupanx = asupan[Math.floor(Math.random() * asupan.length)]
                        await bocchi.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'asupan.mp4', 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', id)
                        console.log('Success sending video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'citacita': // Piyobot
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.cita()
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        await bocchi.sendFileFromUrl(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'dadu': // by CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dadu()
                    .then(async (body) => {
                        const dadugerak = body.split('\n')
                        const dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
                        await bocchi.sendStickerfromUrl(from, dadugerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'dogesticker': // by CHIKAA CHANTEKKXXZZ
            case 'doge':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.doge()
                    .then(async (body) => {
                        const dogeg = body.split('\n')
                        const dogegx = dogeg[Math.floor(Math.random() * dogeg.length)]
                        await bocchi.sendStickerfromUrl(from, dogegx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'profile':
            case 'me':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                    const getQuoted = quotedMsgObj.sender.id
                    const profilePic = await bocchi.getProfilePicFromServer(getQuoted)
                    const username = quotedMsgObj.sender.name
                    const statuses = await bocchi.getStatus(getQuoted)
                    const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(getQuoted, _level)
                    const xpMe = level.getLevelingXp(getQuoted, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfp = errorImg
                    } else {
                        pfp = profilePic
                    }
                    await bocchi.sendFileFromUrl(from, pfp, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else {
                    const profilePic = await bocchi.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await bocchi.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = isPremium ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = errorImg
                    } else {
                        pfps = profilePic
                    }
                    await bocchi.sendFileFromUrl(from, pfps, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                }
            break
            case 'hartatahta':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating harta tahta text...')
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'partner':
            case 'pasangan':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const nama = q.substring(0, q.indexOf('|') - 1)
                const pasangan = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                fun.pasangan(nama, pasangan)
                    .then(async ({ result }) => {
                        await bocchi.reply(from, result.hasil, id)
                            .then(() => console.log('Success sending fortune!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'zodiac':
            case 'zodiak':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                fun.zodiak(args[0])
                    .then(async ({ result }) => {
                        if (result.status === 204) {
                            return await bocchi.reply(from, result.ramalan, id)
                        } else {
                            let ramalan = `Zodiak: ${result.zodiak}\n\nRamalan: ${result.ramalan}\n\nAngka laksek: ${result.nomorKeberuntungan}\n\n${result.motivasi}\n\n${result.inspirasi}`
                            await bocchi.reply(from, ramalan, id)
                                .then(() => console.log('Success sending zodiac fortune!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'write':
            case 'nulis':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating writing...')
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${q}&apikey=${config.vhtear}`, 'nulis.jpg', '', id)
                    .then(() => console.log('Success sending write image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'ffbanner': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating FF banner...')
                const teks1ffanjg = q.substring(0, q.indexOf('|') - 1)
                const teks2ffanjg = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${teks1ffanjg}&text=${teks2ffanjg}&apikey=${config.vhtear}`, id)
                console.log('Success!')
            break
            case 'caklontong': //By: VideFrelan
                if (!isGroupMsg) return bocchi.reply(from, eng.groupOnly(), id)
                if (!isRegistered) return  bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                const sleep = (ms) => {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                fun.caklontong()
                    .then(async ( { result }) => {
                        await bocchi.reply(from, `➸ *Soal*: ${result.soal}`, id)
                        await bocchi.sendText(from, '30 Detik Tersisa...')
                        await sleep(10000)
                        await bocchi.sendText(from, '20 Detik Tersisa...')
                        await sleep(10000)
                        await bocchi.sendText(from, '10 Detik Tersisa...')
                        await sleep(10000)
                        await bocchi.reply(from, `➸ *Jawaban*: ${result.jawaban}\n${result.desk}`, id)
                        console.log('Success sending the answers!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!')
                    })
            break
            case 'tebakgambar':
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                const tsleep = (ms) => {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                fun.tbkgmbr()
                    .then(async ({ result }) => {
                        await bocchi.sendFileFromUrl(from, result.soal_gbr, 'TebakGambar.jpg', '', id)
                        await bocchi.sendText(from, '50 Detik Tersisa...')
                        await tsleep(10000)
                        await bocchi.sendText(from, '40 Detik Tersisa...')
                        await tsleep(10000)
                        await bocchi.sendText(from, '30 Detik Tersisa...')
                        await tsleep(10000)
                        await bocchi.sendText(from, '20 Detik Tersisa...')
                        await tsleep(10000)
                        await bocchi.sendText(from, '10 Detik Tersisa...')
                        await tsleep(10000)
                        await bocchi.reply(from, `➸ *Jawaban*: ${result.jawaban}`, id)
                        console.log('Success sending tebakgambar result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!')
                    })
            break    
            case 'fflogo': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating FF logo...')
                const karakter = q.substring(0, q.indexOf('|') - 1)
                const teksff = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/logoff?hero=${karakter}&text=${teksff}&apikey=${config.vhtear}`, id)
                console.log('Success!')
            break
            case 'text3d':
            case '3dtext':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating 3D text...')
                await bocchi.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/text3d?text=${q}`,`${q}.jpg`, '', id)
                console.log('Success creating 3D text!')
            break
            case 'simi': // by: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.simi(q)
                    .then(async ({ jawaban }) => {
                        await bocchi.reply(from, jawaban, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, `Error!\n\n${err}`, id)
                    })
            break
            case 'glitchtext':
            case 'glitext':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const teks1 = q.substring(0, q.indexOf('|') - 1)
                const teks2 = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating glitch text...')
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${teks1}&text2=${teks2}&apikey=${config.vhtear}`, 'glitch.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'phmaker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kiri = q.substring(0, q.indexOf('|') - 1)
                const kanan = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating Pornhub text...')
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${kiri}&text2=${kanan}&apikey=${config.vhtear}`, 'ph.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'blackpink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating Blackpink text...')
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creting image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            
            case 'tod':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.reply(from, 'Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.' , id)
                await bocchi.sendText(from, `Silakan ketik *${prefix}truth* atau *${prefix}dare*`)
            break
            case 'weton':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const tgl = q.substring(0, q.indexOf('|') - 1)
                const bln = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const thn = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                fun.weton(tgl, bln, thn)
                    .then(async ({ result }) => {
                        await bocchi.reply(from, result.hasil, id)
                        console.log('Success sending weton info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'truth':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.truth()
                    .then(async (body) => {
                        const tod = body.split('\n')
                        const randomTod = tod[Math.floor(Math.random() * tod.length)]
                        await bocchi.reply(from, randomTod, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'hilih':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                fun.hilihteks(q)
                    .then(async ( { result }) => {
                        await bocchi.reply(from, result.kata, id)
                        console.log('Success sending hilih text!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'dare':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dare()
                    .then(async (body) => {
                        const dare = body.split('\n')
                        const randomDare = dare[Math.floor(Math.random() * dare.length)]
                        await bocchi.reply(from, randomDare, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'triggered':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await bocchi.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'trash':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await bocchi.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await bocchi.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = errorImg
                        } else {
                            ypfps = ypics
                        }
                    }
                    canvas.Canvas.trash(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await bocchi.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'hitler':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await bocchi.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await bocchi.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypf = errorImg
                        } else {
                            ypf = ypics
                        }
                    }
                    canvas.Canvas.hitler(ypf)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await bocchi.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'wasted':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'kiss':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await bocchi.reply(from, eng.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const ppRaw = await bocchi.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(encryptMedia, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await bocchi.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await bocchi.reply(from, eng.wrongFormat(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'phcomment':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const usernamePh = q.substring(0, q.indexOf('|') - 1)
                const commentPh = q.substring(q.lastIndexOf('|') + 2)
                const ppPhRaw = await bocchi.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorImg
                } else {
                    ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await bocchi.reply(from, eng.wait(), id)
                const preprocessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await bocchi.sendFileFromUrl(from, preprocessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
            case 'neontext':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const atasnya = q.substring(0, q.indexOf('|') - 1)
                const tengahnya = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const bawahnya = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/neon?text1=${atasnya}&text2=${tengahnya}&text3=${bawahnya}`, 'neon.jpg', '', id)
                console.log('Success creating image!')
            break
            case 'firemaker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/fire_maker?text=${q}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case 'mlmaker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaHero = q.substring(0, q.indexOf('|') - 1)
                const teksMl = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${namaHero}&text=${teksMl}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case 'balloonmaker':
            case 'blmaker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaKiri = q.substring(0, q.indexOf('|') - 1)
                const namaKanan = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/balloonmaker?text1=${namaKiri}&text2=${namaKanan}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case 'sliding':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendVideoAsGif(from, `https://api.vhtear.com/slidingtext?text=${q}&apikey=${config.vhtear}`, 'sliding.gif', '', id)
                console.log('Success creating GIF!')
            break
            case 'text': // by: irham01
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                try {
                    if (ar[0] === 'burnpaper') {
                        const vfburn = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfburn.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'candlemug') {
                        const vfcandlemug = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfcandlemug.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'lovemsg') {
                        const vflovemsg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vflovemsg.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'mugflower') {
                        const vfmugflower = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfmugflower.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'narutobanner') {
                        const vfnarutobanner = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfnarutobanner.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'paperonglass') {
                        const vfpaperonglass = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfpaperonglass.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'romancetext') {
                        const vfromancetext = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfromancetext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'shadowtext') {
                        const vfshadowtext = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vfshadowtext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'tiktokeffect') {
                        const vftiktokeffect = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text=${args[1]}`)
                        await bocchi.sendFileFromUrl(from, vftiktokeffect.data.result.img, `${q}.jpg`, '', id)
                    } else {
                        await bocchi.reply(from, eng.menuText(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break // Makasih Free Api nya Bang VideFikri

            // Sticker
            case 'stikernobg':
            case 'stickernobg': //by: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const q = await uploadImages(mediaData, `stickernobg.${sender.id}`)
                    misc.stickernobg(q)
                    .then(async ({ result }) => {
                        await bocchi.sendStickerfromUrl(from, result.image)
                        console.log('Success sending Sticker no background!')
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'stickerwm': // By Slavyan
            case 'stcwm':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `stc_${sender.id}`)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`stc_${sender.id}`)
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                    } else {
                        await bocchi.reply(from, eng.wrongFormat(), id)
                    }
            break
            case 'stickermeme':
            case 'stcmeme':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const top = q.substring(0, q.indexOf('|') - 1)
                    const bottom = q.substring(q.lastIndexOf('|') + 2)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${getUrl}`
                    const meme = await bent('buffer')(create)
                    webp.buffer2webpbuffer(meme, 'png', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'takestick': // By: VideFrelan
            case 'take':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `takestick_${sender.id}`)
                    webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                    }
                                })
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'sticker':
            case 'stiker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    
                    await bocchi.sendImageAsSticker(from, imageBase64, { author: 'CodeStick', pack: 'Creado por Code-Bot', keepScale:'true'})
                        .then(async () => {
                            await bocchi.sendText(from, eng.ok())
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'stickerp':
            case 'stikerp':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize({
                                    width: 512,
                                    height: 512,
                                    fit: 'contain',
                                    background: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            
            case 'stickergif':
        case 'gifsticker':
        case 'gif':
		
            if (isMedia && type === 'video' || mimetype === 'image/gif' || isQuotedVideo || isQuotedGif || isQuotedMsg) {
                await bocchi.reply(from, 'Por favor espera un momento~', id)
                try {
                	var tipo =mimetype
                    const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message
                    if (encryptMedia.clientUrl === undefined){
                    	encryptMedia.clientUrl = quotedMsg.deprecatedMms3Url
                        tipo = quotedMsg.mimetype
                        }

                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const gifSticker = `data:${tipo};base64,${mediaData.toString('base64')}`
                    await bocchi.sendMp4AsSticker(from, gifSticker, { fps: 10, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
		    await bocchi.reply(from, 'Ok Listo~', id)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Lo siento, tengo algunos errores al hacer tu stiker.', id)
                }
            } else {
                await bocchi.reply(from, 'Esto solo se puede usar con videos y gifs.', id)
            }
            break
            
            
            case 'ttg':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${config.vhtear}`)
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
            break
            case 'stickertoimg':
            case 'stikertoimg':
            case 'toimg':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isQuotedSticker) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await bocchi.sendFile(from, imageBase64, 'sticker.jpg', '', id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'emojisticker':
            case 'emojistiker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const emoji = emojiUnicode(args[0])
                await bocchi.reply(from, eng.wait(), id)
                console.log('Creating emoji code for =>', emoji)
                await bocchi.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${config.vhtear}`)
                    .then(async () => {
                        await bocchi.reply(from, eng.ok(), id)
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Emoji not supported!', id)
                    })
            break

            // NSFW
            case 'multilewds':
            case 'multilewd':
            case 'mlewds':
            case 'mlewd':
                // Premium feature, contact the owner.
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                }
            break
            case 'multifetish':
            case 'mfetish':
                // Premium feature, contact the owner.
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                }
            break
            case 'lewds':
            case 'lewd':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await bocchi.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await bocchi.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
            break
            case 'fetish':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await bocchi.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, err, id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await bocchi.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await bocchi.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                }
            break
            case 'nhentai':
            case 'nh':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isNaN(Number(args[0]))) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await bocchi.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                    } else {
                        await bocchi.reply(from, eng.nhFalse(), id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await bocchi.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                    } else {
                        await bocchi.reply(from, eng.nhFalse(), id)
                    }
                }
            break
            case 'nhdl':
                // Premium feature, contact the owner.
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                    await bocchi.reply(from, eng.botNotPremium(), id)
                }
            break
            case 'nhsearch':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `-----[ *NHENTAI* ]-----\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await bocchi.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `-----[ *NHENTAI* ]-----\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await bocchi.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
            break
            case 'nekopoi':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.latest()
                        let text = '-----[ *NEKOPOI LATEST* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.latest()
                        let text = '-----[ *NEKOPOI LATEST* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                }
            break
            case 'nekosearch':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '-----[ *NEKOPOI RESULT* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '-----[ *NEKOPOI RESULT* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                }
            break
            case 'waifu18':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
            break
            case 'phdl':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('pornhub.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                }
            break
            case 'yuri':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                }
            break
            case 'lewdavatar':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                }
            break
            case 'femdom':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                }
            break
            case 'cersex':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.image, 'cersex.jpg', `── *「 ${result.judul} 」* ──\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.image, 'cersex.jpg', `── *「 ${result.judul} 」* ──\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
            break

            // Moderation command
            case 'revoke':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.revokeGroupInviteLink(groupId);
                bocchi.sendTextWithMentions(from, `Group link revoked by @${sender.id.replace('@c.us', '')}`)
            break
            case 'linkgroup':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const gcLink = await bocchi.getGroupInviteLink(groupId)
                const linkGc = `Group: *${formattedTitle}*\n\nLink: ${gcLink}`
                bocchi.reply(from, linkGc, id)
            break
            case 'ownergroup':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const ownerGc = chat.groupMetadata.owner
                await bocchi.sendTextWithMentions(from, `Owner Group : @${ownerGc}`)
            break
            case 'mutegc':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.setGroupToAdminsOnly(groupId, true)
                    await bocchi.sendText(from, eng.gcMute())
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.setGroupToAdminsOnly(groupId, false)
                    await bocchi.sendText(from, eng.gcUnmute())
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'add':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                try {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.addParticipant(from, `${args[0]}@c.us`)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'kick':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i of mentionedJidList) {
                    if (groupAdmins.includes(i)) return await bocchi.sendText(from, eng.wrongFormat())
                    await bocchi.removeParticipant(groupId, i)
                }
            break
            case 'promote':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await bocchi.reply(from, eng.adminAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.promoteParticipant(groupId, mentionedJidList[0])
                await bocchi.reply(from, eng.ok(), id)
            break
            case 'demote':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await bocchi.reply(from, eng.notAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.demoteParticipant(groupId, mentionedJidList[0])
                await bocchi.reply(from, eng.ok(), id)
            break
            case 'leave':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                await bocchi.sendText(from, 'Sayounara~ 👋')
                await bocchi.leaveGroup(groupId)
            break
            case 'admins':
            case 'admin':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupAdm = await bocchi.getGroupAdmins(groupId)
                const lastAdmin = daily.getLimit(sender.id, _daily)
                if (lastAdmin !== undefined && cd - (Date.now() - lastAdmin) > 0) {
                    const time = ms(cd - (Date.now() - lastAdmin))
                    await bocchi.reply(from, eng.daily(time), id)
                } else if (isOwner) {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *B O C C H I  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *B O C C H I  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case 'everyone':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupMem = await bocchi.getGroupMembers(groupId)
                const lastEveryone = daily.getLimit(sender.id, _daily)
                if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
                    const time = ms(cd - (Date.now() - lastEveryone))
                    await bocchi.reply(from, eng.daily(time), id)
                } else if (isOwner) {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *C O D E  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 Mention All 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *C O D E  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case 'groupicon':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.setGroupIcon(groupId, imageBase64)
                    await bocchi.sendText(from, eng.ok())
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'antilink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await bocchi.reply(from, eng.detectorOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.push(groupId)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await bocchi.reply(from, eng.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await bocchi.reply(from, eng.detectorOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'leveling':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isLevelingOn) return await bocchi.reply(from, eng.levelingOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await bocchi.reply(from, eng.levelingOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await bocchi.reply(from, eng.levelingOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'welcome':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isWelcomeOn) return await bocchi.reply(from, eng.welcomeOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.push(groupId)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await bocchi.reply(from, eng.welcomeOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.splice(groupId, 1)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await bocchi.reply(from, eng.welcomeOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'autosticker':
            case 'autostiker':
            case 'autostik':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStickerOn) return await bocchi.reply(from, eng.autoStikOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.push(groupId)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await bocchi.reply(from, eng.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.splice(groupId, 1)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await bocchi.reply(from, eng.autoStikOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'antinsfw':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await bocchi.reply(from, eng.antiNsfwOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await bocchi.reply(from, eng.antiNsfwOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await bocchi.reply(from, eng.antiNsfwOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break

            // Owner command
	    case 'block':
            case 'blok':
                if (!isOwner) return await bocchi.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await bocchi.reply(from, ind.wrongFormat(), id)
                        await bocchi.contactBlock(blok)
                    }
                    await bocchi.reply(from, ind.doneOwner(), id)
                } else if (args.length === 1) {
                    await bocchi.contactBlock(args[0] + '@c.us')
                    await bocchi.reply(from, ind.doneOwner(), id)
                } else {
                    await bocchi.reply(from, ind.wrongFormat(), id)
                }
            break
            case 'unblock':
            case 'unblok':
                if (!isOwner) return await bocchi.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await bocchi.reply(from, ind.wrongFormat(), id)
                        await bocchi.contactUnblock(blok)
                    }
                    await bocchi.reply(from, ind.doneOwner(), id)
                } else if (args.length === 1) {
                    await bocchi.contactUnblock(args[0] + '@c.us')
                    await bocchi.reply(from, ind.doneOwner(), id)
                } else {
                    await bocchi.reply(from, ind.wrongFormat(), id)
                }
            break	
			
            case 'bc':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                const chats = await bocchi.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await bocchi.getChatById(bcs)
                    if (!cvk.isReadOnly) await bocchi.sendText(bcs, `${q}\n\n- Slavyan (Kal)\n_Broadcasted message_`)
                }
                await bocchi.reply(from, eng.doneOwner(), id)
            break
            case 'clearall':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const allChats = await bocchi.getAllChats()
                for (let delChats of allChats) {
                    await bocchi.deleteChat(delChats.id)
                }
                await bocchi.reply(from, eng.doneOwner(), id)
            break
            case 'leaveall':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                const allGroup = await bocchi.getAllGroups()
                for (let gclist of allGroup) {
                    await bocchi.sendText(gclist.contact.id, q)
                    await bocchi.leaveGroup(gclist.contact.id)
                }
                await bocchi.reply(from, eng.doneOwner())
            break
            case 'getses':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const ses = await bocchi.getSnapshot()
                await bocchi.sendFile(from, ses, 'session.png', eng.doneOwner())
            break
            case 'ban':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                            _ban.push(benet)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        }
                        await bocchi.reply(from, eng.doneOwner(), id)
                    } else {
                        _ban.push(args[1] + '@c.us')
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.doneOwner(), id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        _ban.splice(mentionedJidList[0], 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.doneOwner(), id)
                    } else{
                        _ban.splice(args[1] + '@c.us', 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.doneOwner(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'eval':
            case 'ev':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await bocchi.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break
            case 'shutdown':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                await bocchi.sendText(from, 'Otsukaresama deshita~ 👋')
                    .then(async () => await bocchi.kill())
                    .catch(() => new Error('Target closed.'))
            break
            case 'premium':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let prem of mentionedJidList) {
                            if (prem === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                            premium.addPremiumUser(prem, args[2], _premium)
                            await bocchi.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prem}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await bocchi.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await bocchi.reply(from, eng.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await bocchi.reply(from, eng.doneOwner(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'setstatus':
            case 'setstats':
            case 'setstat':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                await bocchi.setMyStatus(q)
                await bocchi.reply(from, eng.doneOwner(), id)
            break
            case 'exif':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const namaPack = q.substring(0, q.indexOf('|') - 1)
                const authorPack = q.substring(q.lastIndexOf('|') + 2)
                exif.create(namaPack, authorPack)
                await bocchi.reply(from, eng.doneOwner(), id)
            break
            case 'mute':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(pushname), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isMute) return await bocchi.reply(from, eng.muteChatOnAlready(), id)
                    _mute.push(groupId)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await bocchi.reply(from, eng.muteChatOn(), id)
                } else if (ar[0] === 'disable') {
                    _mute.splice(groupId, 1)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await bocchi.reply(from, eng.muteChatOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
            case 'setname':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q || q.length > 25) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.setMyName(q)
                await bocchi.reply(from, `Done!\n\nUsername changed to: ${q}`, id)
            break
            case 'give':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (args.length !== 2) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList.length !== 0) {
                    for (let give of mentionedJidList) {
                        level.addLevelingXp(give, Number(args[1]), _level)
                        await bocchi.reply(from, `Sukses menambah XP kepada: ${give}\nJumlah ditambahkan: ${args[1]}`, id)
                    }
                } else {
                    level.addLevelingXp(args[0] + '@c.us', Number(args[1]), _level)
                    await bocchi.reply(from, `Sukses menambah XP kepada: ${args[0]}\nJumlah ditambahkan: ${args[1]}`, id)
                }
            break
            case 'listgroup':
                if (!isRegistered) return await bocchi.reply(from, ind.notRegistered(), id)
                const getGroups = await bocchi.getAllGroups()
                let txtGc = '*── 「 GROUP LIST 」 ──*\n'
                for (let i = 0; i < getGroups.length; i++) {
                    txtGc += `\n\n❏ *Name*: ${getGroups[i].name}\n❏ *Unread messages*: ${getGroups[i].unreadCount} messages`
                }
                await bocchi.sendText(from, txtGc)
            break

case 'red':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt2 = isQuotedImage ? quotedMsg : message
                    const dataPotoWt2 = await decryptMedia(encryptMediaWt2, uaOverride)
                    const fotoWtNya2 = await uploadImages(dataPotoWt2, `fotoProfilWt2.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/red?avatar=${fotoWtNya2}`, 'Wasted.jpg', 'El sticker esta siendo enviado', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/red?avatar=${fotoWtNya2}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break

case 'sepia':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt4 = isQuotedImage ? quotedMsg : message
                    const dataPotoWt4 = await decryptMedia(encryptMediaWt4, uaOverride)
                    const fotoWtNya4 = await uploadImages(dataPotoWt4, `fotoProfilWt4.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/sepia?avatar=${fotoWtNya4}`, 'Wasted.jpg', 'El sticker esta siendo enviado', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/sepia?avatar=${fotoWtNya4}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
case 'gray':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt3 = isQuotedImage ? quotedMsg : message
                    const dataPotoWt3 = await decryptMedia(encryptMediaWt3, uaOverride)
                    const fotoWtNya3 = await uploadImages(dataPotoWt3, `fotoProfilWt3.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/greyscale?avatar=${fotoWtNya3}`, 'Wasted.jpg', 'El sticker esta siendo enviado', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/greyscale?avatar=${fotoWtNya3}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
case 'gay':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt5 = isQuotedImage ? quotedMsg : message
                    const dataPotoWt5 = await decryptMedia(encryptMediaWt5, uaOverride)
                    const fotoWtNya5 = await uploadImages(dataPotoWt5, `fotoProfilWt5.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/gay?avatar=${fotoWtNya5}`, 'Wasted.jpg', 'El sticker esta siendo enviado', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/gay?avatar=${fotoWtNya5}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break
case 'wasted':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'El sticker esta siendo enviado', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
            break

case 'clima':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
                const clima = await axios.get(`https://es.wttr.in/${body.slice(7)}?format=Ciudad%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nHumedad%20=%20%h\n\nViento%20=%20%w\n\nLuna Ahora%20=%20%m\n\nAmanece%20=%20%S\n\nAnochece%20=%20%s`)
				await bocchi.sendFileFromUrl(from, `https://es.wttr.in/${body.slice(7)}.png`, '', `El clima.\n\n${clima.data}`, id)
            break

case 'puntos':
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (args.length !== 2) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList.length !== 0) {
                    for (let give of mentionedJidList) {
                        level.addLevelingXp(give, Number(args[1]), _level)
                        await bocchi.reply(from, `Se a�adieron Puntos de XP a: ${give} ?\nPuntos agregados: ${args[1]} ??`, id)
                    }
                } else {
                    level.addLevelingXp(args[0] + '@c.us', Number(args[1]), _level)
                    await bocchi.reply(from, `Se a�adieron Puntos de XP a: ${args[0]} ?\nPuntos agregados: ${args[1]} ??`, id)
                }
            break

case 'ip':
			if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
            if (!isGroupMsg) return bocchi.reply(from, 'Este comando solo funciona en grupos!', id)
            if (args.length == 0) return bocchi.reply(from, 'Falta texto.', id)
            axios.get(`https://a.apimau.ga/iplookup?ip=${q}`)
            .then(async(rest) => {
					
					var ip = rest.data.ip
					var pais = rest.data.country
					var region = rest.data.region
					var longitud = rest.data.longtitude
					var latitude = rest.data.latitude
					var horario = rest.data.timezone
					var org = rest.data.org
					var as = rest.data.as
					var city = rest.data.city
					var codigo = rest.data.countryCode
					var zip = rest.data.zip
					var mapa = rest.data.maps
					
					await bocchi.sendLinkWithAutoPreview(from, `? IP: ${ip}\n\n? Pais: ${pais}\n\n? Region: ${region}\n\n? Ciudad: ${city}\n\n ? Longitud: ${longitud}\n\n? Latitud: ${latitude}\n\n? Proveedor: ${org}\n\n? Sigla de continente: ${as}\n\n? Hor�rio: ${horario} \n\n? Codigo: ${codigo}\n\n? Zip: ${zip}\n\n? Mapa: ${mapa}\n\nBusca de IP realizada!`)
                })
			break

case 'mod':
          if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
            if (args.length == 0) return bocchi.reply(from, 'Escribe un mod para buscar!', id)
            try {
                const happymod = await axios.get('https://tobz-api.herokuapp.com/api/happymod?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (happymod.data.error) return bocchi.reply(from, `No encontre ningun resultado`, id)
                const modo = happymod.data.result[0]
                const resmod = `? *Titulo* : ${modo.title}\n\n? *Compra* : ${modo.purchase}\n\n? *Peso* : ${modo.size}\n\n? *Root* : ${modo.root}\n\n? *Version* : ${modo.version}\n\n? *Precio* : ${modo.price}\n\n? *Link* : ${modo.link}\n\n? *Download* : ${modo.download}`
                bocchi.sendFileFromUrl(from, modo.image, 'HAPPYMOD.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
            break

case 'emoji':
            case 'emot':
                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
                if (!q) return await bocchi.reply(from, `Formato incorrecto`, id)
                try {
                await bocchi.reply(from, eng.wait(), id)
                const emoji = emojiUnicode(q)
                await bocchi.sendImageAsSticker(from, await bocchi.download(`https://videfikri.com/api/emojitopng/?emojicode=${emoji}`), { author: 'Codeerror', pack: 'Code-Bot' })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
            break

case 'cmd':
			if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
			await bocchi.reply(from, eng.wait(), id)
			exec(`${body.slice(5)}`, (error, data,stderr) =>{
				if (error) {
					console.log(error)
					bocchi.reply(from, data + '\n\n' + error, id)
				} else {
					console.log(data)
					bocchi.reply(from, data, id)
				}
			})
			break

case 'groupinfo' :
			if (!isGroupMsg) return bocchi.reply(from, mess.error.Gp, id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            let admgp = ''
            for (let admon of groupAdmins) {
                admgp += `? @${admon.replace(/@c.us/g, '')}\n` 
            }
			var gpOwner = chat.groupMetadata.owner.replace(/@c.us/g, '')
            var grouppic = await bocchi.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await bocchi.sendFileFromUrl(from, pfp, 'group.png', `*👨‍👩‍👦‍👦Grupo:*\n*${groupname}*\n\n*👥Miembros: ${totalMem}*\n\n*⚠️Descripcion:*\n ${desc}\n\n*👨🏻‍💻Creador:* @${gpOwner}\n\n*👮Administradores:*\n${admgp}`, id)
			break

case 'adve':
         if (!isGroupMsg) return bocchi.reply(from, mess.error.Gp, id)
          await bocchi.sendGiphyAsSticker(from, 'https://media.giphy.com/media/G9FMEr3PGv2pfc1Z5F/source.gif')
          await bocchi.sendGiphyAsSticker(from, 'https://media.giphy.com/media/Q5EdPdxqg01xZHKb1q/source.gif')
          await bocchi.reply(from, '*SI ERES ADMINISTRADOR Y QUIERES TIRAR ENLACE O ROBAR GENTE EN VERDAD NO TE LO RECOMENDAMOS ATENTE A LAS CONSECUENCIAS*', id)
         break

          case 'nopv':
          if (!isGroupMsg) return bocchi.reply(from, mess.error.Gp, id)
          await bocchi.sendGiphyAsSticker(from, 'https://media.giphy.com/media/LqrtEGnnExN41GgCeg/source.gif')
          await bocchi.sendGiphyAsSticker(from, 'https://media.giphy.com/media/Xg4Lc2tzOXXdNCU4Qc/source.gif')
          await bocchi.reply(from, '*AQUI VALORAMOS LA PRIVACIDAD DE LAS DAMAS. SI ALGUIEN LES MANDA PV SIN SU AUTORIZACION FAVOR DE REPORTARLO A CUALQUIER ADMINSITRADOR* \n\n *ATTE ADMINISTRACION* \n\n *DESMADROSOS AMIGOS PIXEL*', id)
         break
         
         
            case 'reset':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const reset = []
                _limit = reset
                console.log('Resetting user\'s limit...')
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                await bocchi.reply(from, eng.doneOwner(), id)
                console.log('Success!')
            break

case 'mp3':
               if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
               if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
                if (!q) return await bocchi.reply(from, `Descargas de Youtube\n\nUso: ${prefix}play martin garrix`, id)
                await bocchi.reply(from, eng.wait(), id)
                downloader.ytPlay(q)
                .then(async ({result}) => {
                    const { title, channel, duration, id, thumbnail, views, size, url, description, published_on } = await result
                    if (Number(size.split('MB')[0]) >= 20.00) {
                        await bocchi.sendFileFromUrl(from, thumbnail, 'thumbnail.jpg', `➸ *Titulo*: ${title}\n➸ *ID*: ${id}\n➸ *Tamaño*: ${size}\n\nEl archivo sobre pasa los *20MB*!`, id)
                    } else {
                        await bocchi.sendFileFromUrl(from, thumbnail, 'thumbnail.jpg', `➸ *Titulo*: ${title}\n➸ *Channel*: ${channel}\n➸ *ID*: ${id}\n➸ *Views*: ${views}\n➸ *Duracion*: ${duration}\n➸ *Tamaño*: ${size}\n➸ *Publicado*: ${published_on}\n➸ *Descripcion*: ${description}`, id)
                        const downl = await fetch(url);
                        const buffer = await downl.buffer(); 
                        await fs.writeFile(`/root/Bot/temp/audio/audio.mp3`, buffer)
                        await bocchi.sendFile(from, '/root/Bot/temp/audio/audio.mp3', 'audio.mp3', '', id)
                        console.log('Success sending Play MP3!')
                        fs.unlinkSync('/root/Bot/temp/audio/audio.mp3')
                        
                    }
                }) 
                .catch(async (err) => {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                })
                break



case 'triggered':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await bocchi.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await bocchi.reply(from, eng.wait(), id)
                    const ppRaw = await bocchi.getProfilePicFromServer(sender.id)
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(ppRaw, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await bocchi.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                }
            break
case 'nobg':
            case 'removebg':
            case 'stickernobg':
            case 'recorte':
            if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
            if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
            if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                            if (isMedia && type === 'image') {
                                try {
                                    bocchi.reply(from, '⌛ Espere...', id)
                                    var mediaData = await decryptMedia(message, uaOverride)
                                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                                    var base64img = imageBase64
                                    var outFile = './media/img/noBg.png' //
                                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'qf6gn3KwhUvMqaq2xWFBhuYi', size: 'auto', type: 'auto', outFile })
                                    await fs.writeFile(outFile, result.base64img)
                                    
                                    await bocchi.sendImageAsSticker(from, `data:${mimetype};base64, ${result.base64img}, author: 'CodeError', pack: 'Creado por Code-Bot', keepScale:'true' `)
                                    
                                } catch (err) {
                                    console.log(err)
                                    bocchi.reply(from, '[⚠️] Ocurrio una falla al procesar la imagen!', id)
                                }
                            } else {
                                bocchi.reply(from, '[❗] Envie una imagen con la etiqueta *#stickernobg*', id)
                            }
                            break

case 'ytaudio':
            if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
            if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
                if (args.length == 0) return bocchi.reply(from, `Para descargar canciones de youtube\nUse: ${prefix}mp3 [link_yt]`, id)
                const linkmp32 = args[0].replace('https://youtu.be/','').replace('https://www.youtube.com/watch?v=','')
				await bocchi.reply(from, eng.wait(), id)
                downloader.ytmp32(`https://youtu.be/${linkmp32}`)
                .then(async(res) => {
                    if (res.error) return bocchi.sendFileFromUrl(from, `${res.result.url}`, '', `${res.error}`)
                    
					await bocchi.sendText(from, `*Cancion:* ${res.result.title}\n\nEnviando archivo espere… ⬇️`)
					
                    await bocchi.sendFile(from, res.result.download_audio, `${res.result.title}.mp3`, id)
                    .catch(() => {
                bocchi.reply(from, `Error`, id)
            })
                })
            break
case 'imagen':
            if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
            if (!isGroupMsg) return bocchi.reply(from, 'Este comando solo funciona en grupos!', id)
            
            if (args.length == 0) return bocchi.reply(from, 'Falto un nombre!', id)
            await bocchi.reply(from, eng.wait(), id)
            const linp = await fetch(`https://api.fdci.se/sosmed/rep.php?gambar=${body.slice(7)}`)
			const pint = await linp.json()
            let erest = pint[Math.floor(Math.random() * pint.length) + 1]
			console.log(erest)
            await bocchi.sendFileFromUrl(from, erest, '', '', id)
            
			.catch(() => {
                bocchi.reply(from, 'Ningun imagen con ese nombre, intenta mas tarde.', id)
            })
            break

case 'robado': // By: Poker 
                    if (args.length == 0) return bocchi.reply(from, `Para cambiarle el nombre de paquete y de autor a un sticker mencionalo junto al comando:\n\n*${prefix}robado (nombre del paquete) | (autor)*\n\n_Es obligatorio que uses esta rata *" | "* para dividir cada texto......_\n\nejemplo: *${prefix}cstick (MisStickers) | (CodeBot)*\n\n*Intenta usar letras y números originales... para que no hayan problema con el cambio de nombres.*`, id)
                    if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        const mediaDataTake = await decryptMedia(quotedMsg)
                        await bocchi.reply(from, eng.wait(), id)
                        const packnames = q.substring(0, q.indexOf('|') - 1)
                        const authors = q.substring(q.lastIndexOf('|') + 2)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                        await bocchi.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    } else {
                        await bocchi.reply(from, eng.wrongFormat(), id)
                    }
            break

case 'wame':
		await bocchi.reply(from, `wa.me/${sender.id.replace(/@c.us/g, '')}`, id)
	break    
	
	case 'silenciar':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (args.length !== 1) return bocchi.reply(from, 'Opciones: on / off', id)
				if (args[0] == 'on') {
					slce.push(chat.id)
					fs.writeFileSync('./database/group/silence.json', JSON.stringify(slce))
					bocchi.reply(from, '🔰grupσ dєѕαctívαdσ. lσѕ uѕuαríσѕ nσ pσdrαn uѕαr lσѕ cσmαndσѕ dєl вσt.', id)
				} else if (args[0] == 'off') {
					let ince = slce.indexOf(chatId)
					slce.splice(ince, 1)
					fs.writeFileSync('./database/group//silence.json', JSON.stringify(slce))
					bocchi.reply(from, '🔰grupσ αctívαdσ nuєvαmєntє', id)
				}
            } else {
                bocchi.reply(from, 'Ocurre un Error!', id)
            }
            break
	
	case 'bdsm':
			if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	} else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	} else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            } else {
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	} else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	} else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await bocchi.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
			break
	
	case 'tits':
			if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
			if (octo == 1) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 2) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 3) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 4) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 5) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 6) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 7) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 8) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
				bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			}
            } else {
				if (octo == 1) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 2) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 3) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 4) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 5) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 6) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 7) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 8) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
					bocchi.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				}
			}
            break
	
	case 'masturb':
			if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await bocchi.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await bocchi.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await bocchi.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await bocchi.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await bocchi.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await bocchi.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			}
			break
			
			case 'blowjob':
        case 'boquete':
			if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
				if (double == 1) {
					const blowjob = await axios.get('https://nekos.life/api/v2/img/bj')
					await bocchi.sendFileFromUrl(from, blowjob.data.url, '', '', id)
				} else if (double == 2) {
					const blowjobs = await axios.get('https://nekos.life/api/v2/img/blowjob')
					await bocchi.sendFileFromUrl(from, blowjobs.data.url, '', '', id)
				}
			} else {
				const blowjob1 = await axios.get('https://nekos.life/api/v2/img/erok')
				await bocchi.sendFileFromUrl(from, blowjob1.data.url, '', '', id)
			}
			break

	
	case 'm':
    if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
    if (args.length == 0) return bocchi.reply(from, 'Lo usaste incorrectamente.', id)
    axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
    .then(async (res) => {
        const pyre = res.data.result.result[0].publishedTime
        if (pyre == '' || pyre == 'null' || pyre == null || pyre == undefined || pyre == 'undefined') {
            var playre = 'Indefinido'
        } else if (pyre.endsWith('years ago')) {
            var playre = pyre.replace('years ago', 'Anios atras')
        } else if (pyre.endsWith('hours ago')) {
            var playre = pyre.replace('hours ago', 'Horas atras')
        } else if (pyre.endsWith('minutes ago')) {
            var playre = pyre.replace('minutes ago', 'Minutos atras')
        } else if (pyre.endsWith('day ago')) {
            var playre = pyre.replace('day ago', 'Dia atras')
        } else if (pyre.endsWith('months ago')) {
            var playre = pyre.replace('months ago', 'Meses atras')
        } else if (pyre.endsWith('seconds ago')) {
            var playre = pyre.replace('seconds ago', 'Segundos atras')
        }
        const asize = await axios.get(`http://st4rz.herokuapp.com/api/yta?url=http://youtu.be/${res.data.result.result[0].id}`)
        const afsize = asize.data.filesize.replace(' MB', '')
        console.log(afsize)
        if (afsize >= 16.0 || asize.data.filesize.endsWith('GB')) {
            bocchi.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${asize.data.filesize}.`, id)
        } else {
            await bocchi.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `Titulo: ${res.data.result.result[0].title}\n\nLink: https://youtu.be/${res.data.result.result[0].id}\n\nDuracion: ${res.data.result.result[0].duration} minutos\n\nHace: ${playre}\n\n Visualizaciones: ${res.data.result.result[0].viewCount.text}\n\nEspero haberlo hecho bien y ... ahora solo espera, no lo vuelvas a usar hasta que termine esto!`, id)
            axios.get(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.data.result.result[0].id}`)
            .then(async(rest) => {
                var m3pa = rest.data.result
                var m3ti = rest.data.title
                await bocchi.sendFileFromUrl(from, m3pa, '', '', id)
                    })
        }
    })
    break
case 'colores': // By Orumaito fix the emojis
            if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
            const colorstick = body.slice(9)
            try {
                const ttpc = await axios.get(`https://api.xteam.xyz/attp?text=${encodeURIComponent(colorstick)}`)
                const attp = ttpc.data.result
                await bocchi.sendImageAsSticker(from, attp, { author: 'codeerror', pack: 'CodeBot' })
            } catch(err) {
                console.error(err)
                await bocchi.reply(from, 'Error!', id)
            }
            break
       case 'logo':
			    if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
				if (args.length == 0) bocchi.reply(from, 'Coloca un nombre!', id)
			await bocchi.reply(from, eng.wait(), id)
			await bocchi.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(6)}`, '', '', id)
			break
			case 'neon':
			    if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
				if (args.length == 0) bocchi.reply(from, 'Coloca un nombre!', id)
			await bocchi.reply(from, eng.wait(), id)
			await bocchi.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/neon_light?text=${body.slice(6)}`, '', '', id)
			break
			case 'galaxy':
			    if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, 'Comando solo para grupos!', id)
				if (args.length == 0) bocchi.reply(from, 'Coloca un nombre!', id)
			await bocchi.reply(from, eng.wait(), id)
			await bocchi.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/galaxywp?text=${body.slice(8)}`, '', '', id)
			break

case 'v':
    if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
    if (args.length == 0) return bocchi.reply(from, 'Lo usaste incorrectamente.', id)
    axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
    .then(async (res) => {
        const vyre = res.data.result.result[0].publishedTime
        if (vyre == '' || vyre == 'null' || vyre == null || vyre == undefined || vyre == 'undefined') {
            var videore = 'Indefinido'
        } else if (vyre.endsWith('years ago')) {
            var videore = vyre.replace('years ago', 'Años atrÃ¡s')
        } else if (vyre.endsWith('hours ago')) {
            var videore = vyre.replace('hours ago', 'Horas atras')
        } else if (vyre.endsWith('minutes ago')) {
            var videore = vyre.replace('minutes ago', 'Minutos atras')
        } else if (vyre.endsWith('day ago')) {
            var videore = vyre.replace('day ago', 'Dia atras')
        } else if (vyre.endsWith('months ago')) {
            var videore = vyre.replace('months ago', 'Meses atras')
        } else if (vyre.endsWith('seconds ago')) {
            var videore = vyre.replace('seconds ago', 'Segundos atras')
        }
        const size = await axios.get(`http://st4rz.herokuapp.com/api/ytv?url=http://youtu.be/${res.data.result.result[0].id}}`)
        const fsize = size.data.filesize.replace(' MB', '').replace('Download  ', 'Impossivel calcular')
        console.log(fsize)
        const impo = size.data.filesize.replace('Download  ', 'un peso mucho mayor que no puedo calcular')
        if (fsize >= 16.0 || size.data.filesize.endsWith('Download  ') || size.data.filesize.endsWith('GB')) {
            bocchi.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${impo.replace('  Â  ', ' ')}.`, id)
        } else {
            await bocchi.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `Titulo: ${res.data.result.result[0].title}\n\nLink: https://youtu.be/${res.data.result.result[0].id}\n\nDuracion: ${res.data.result.result[0].duration} minutos\n\nHace: ${videore}\n\nVisualizaciones: ${res.data.result.result[0].viewCount.text}\n\nEnviando archivo`, id)
            axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=https://youtu.be/${res.data.result.result[0].id}`)
            .then(async(rest) => {
                await bocchi.sendFileFromUrl(from, `${rest.data.result}`, ``, ``, id)
                    })
        }
    })
    break
case 'musica':
            case 'ytz':
                if (args.length == 0) return bocchi.reply(from, `Para descargar una musica solo usa el comando: ${prefix}musica « nombre » o « enlace »`, id)
                await bocchi.reply(from, `*Descargando música (~￣³￣)~*`, id)
                const playOptions = {
                    limit: 1,
                    gl: 'ID',
                    hl: 'pt'
                }
                const res = await ytsr(body.slice(6), playOptions).catch(err => {
                    return bocchi.reply(from, `No puedo encontrar alguna música en YouTube con ese título 😔`, id)
                })

                const videoResult = res.items.filter(item => item.type === 'video')[0]

                if (!videoResult) {
                    return bocchi.reply(from, `No puedo encontrar alguna música en YouTube con ese título 😔`, id)
                }

                const playInfo = await ytdl.getInfo(videoResult.url, {
                    quality: 'highestaudio'
                });

                let playStream = ytdl(videoResult.url, {
                    quality: 'highestaudio'
                });

                let songPlayInfo = {
                    title: playInfo.videoDetails.title,
                    url: playInfo.videoDetails.video_url,
                    lengthSeconds: playInfo.videoDetails.lengthSeconds,
                    authorName: playInfo.videoDetails.author.name,
                    videoId: playInfo.videoDetails.videoId,
                    isPrivate: playInfo.videoDetails.isPrivate,
                }
        const durase = `${songPlayInfo.lengthSeconds}/60`
                console.log(durase)
                bocchi.sendFileFromUrl(from, videoResult.bestThumbnail.url, 'yt.jpg', `    *⺀ PLAY YOUTUBE MP3 ⺀* 🥷🏻‼️\n\n*○ Título:*  ${songPlayInfo.title.replace('Official','').replace('Unofficial','').replace('Cover','').replace('Video','').replace('Clip','').replace('|','').replace('Music','').replace('UNOFFICIAL','').replace('OFFICIAL','').replace('MUSIC','').replace('VIDEO','').replace('(','').replace(')','').replace('lirik','').replace('Lyric','').replace('Lirik','')}\n\n*○ Formato Del Archivo:*  MPEG-2 Audio Layer III\n\n*Envíando tu audio...*\n\n*▌│█║▌║▌║║▌║▌║█│▌▌│*`, id)

                //console.log(songinfo);
                let testPlaySize = (((songPlayInfo.lengthSeconds * 128000) / 8) / 1024) / 1024
                console.log(`Tamaño de la música : ${testPlaySize} MB`);

                if (testPlaySize >= 15) {
                    return bocchi.reply(from, `Lo siento el limite de audio es de 15MB. ✋😥`, id)
                }

                if (songPlayInfo.lengthSeconds > 900) {
                    return bocchi.reply(from, `Lo siento el limite de audio es de 15 minutos. ✋😥`, id)
                }

                ffmpeg(playStream)
                    .audioBitrate(128)
                    .save(`./temp/${songPlayInfo.videoId}.mp3`)
                    .on('end', () => {
                        var playStats = fs.statSync(`./temp/${songPlayInfo.videoId}.mp3`)
                        let realSize = playStats.size / (1024 * 1024);
                        console.log(`Tamaño original: ${realSize} MB`);
                        if (realSize <= 15) {
                            bocchi.sendFile(from, `./temp/${songPlayInfo.videoId}.mp3`, `${songPlayInfo.videoId}.mp3`, null, id).then(f => {
                                try {
                                    fs.unlinkSync(`./temp/${songPlayInfo.videoId}.mp3`);
                                    console.log(`Archivo Temporal Eliminado: ${songPlayInfo.videoId}.mp3`);
                                    bocchi.reply(from, `Archivo Temporal Eliminado: ${songPlayInfo.videoId}.mp3`);
                                } catch (err) {
                                    // handle the error
                                    console.log(err);
                                }
                            })
                        } else {
                            return bocchi.reply(from, `Upsss no he podido descargar la música señor. ✋😥`, id)
                        }
                    });
                break
	case 'video':
                case 'ytmp4':
                if (args.length == 0) return bocchi.reply(from, `Para descargar un video solo usa el comando: ${prefix}video « nombre » o « enlace »`, id)
                await bocchi.reply(from, `*Descargando video (~￣³￣)~*`, id)
                const resa = await ytsr(body.slice(6)).catch(err => {
                    return bocchi.reply(from, `No puedo encontrar algún video en YouTube con ese título 😔`, id)
                })
                const videoDatas = resa.items.filter(item => item.type === 'video')[0];
                //console.log(videoDatas)
                console.log(videoDatas.url)
                var viidio = videoDatas.url.replace('https://m.youtu.be/', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/', '').replace('watch?v=', '')
                let info = await ytdl.getInfo(viidio);
                let format = ytdl.chooseFormat(info.formats, { quality: '18' });
                //console.log('Format found!', format)
                if (format.contentLength >= 450000000) {
                        return bocchi.reply(from, `Lo siento el limite de video es de 45MB. ✋😥`, id)
                    } else {
                await bocchi.sendFileFromUrl(from, format.url, `${videoDatas.title}.mp4`, '    *⺀ YOUTUBE MP4 ⺀* 🥷🏻‼️\n\n*○ Título:*  '+ `${videoDatas.title}` +'\n\n*○ Subido Por:*  ' + `${videoDatas.author.name}` + '\n\n*○ Formato Del Archivo:*  MPEG-4 parte 14' + '\n\n*○ Publicado:*  ' + `${videoDatas.uploadedAt.replace('years ago','Años atrás')}` +'\n\n*○ Enlace Directo:*  ' + `${videoDatas.url}` + '\n\n*▌│█║▌║▌║║▌║▌║█│▌▌│*')
                    }
                console.log('Video Enviado Exitosamente.')
                break
	
            default:
                if (isCmd) {
                    await bocchi.reply(from, eng.cmdNotFound(command), id)
                }
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
/********** END OF MESSAGE HANDLER **********/
