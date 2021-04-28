/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const { loader } = require('./function')
const { version, bugs } = require('./package.json')
const msgHandler = require('./message/index.js')
const figlet = require('figlet')
const canvas = require('discord-canvas')
const { ownerBot } = require('./config.json')
const fs = require('fs-extra')
const { groupLimit, memberLimit } = require('./database/bot/setting.json')

const start = (bocchi = new Client()) => {
    console.log(color(figlet.textSync('BocchiBot', 'Larry 3D'), 'cyan'))
    console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length))
    console.log(color('=> Source code version:', 'yellow'), color(version))
    console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(bugs.url))
    console.log(color('[BOCCHI]'), color('BocchiBot is now online!', 'yellow'))
    console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
    bocchi.sendTextWithMentions('5213131003801-1588278744@g.us', `🤖 CodeBot se ha iniciado correctamente - @5218333659697@c.us`)
    //Uncomment code di bawah untuk mengaktifkan auto-update file changes. Tidak disarankan untuk long-time use.
    // loader.nocache('../message/index.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))

    bocchi.onStateChanged((state) => {
        console.log(color('[BOCCHI]'), state)
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') bocchi.forceRefocus()
    })

    bocchi.onAddedToGroup(async (chat) => {
        const gc = await bocchi.getAllGroups()
        console.log(color('[BOCCHI]'), 'Added to a new group. Name:', color(chat.contact.name, 'yellow'), 'Total members:', color(chat.groupMetadata.participants.length, 'yellow'))
        if (chat.groupMetadata.participants.includes(ownerBot)) {
            await bocchi.sendText(chat.id, ind.addedGroup(chat))
        } else if (gc.length > groupLimit) {
            await bocchi.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${groupLimit}`)
            await bocchi.deleteChat(chat.id)
            await bocchi.leaveGroup(chat.id)
        } else if (chat.groupMetadata.participants.length < memberLimit) {
            await bocchi.sendText(chat.id, `Need at least ${memberLimit} members in group!`)
            await bocchi.deleteChat(chat.id)
            await bocchi.leaveGroup(chat.id)
        } else {
            await bocchi.sendText(chat.id, ind.addedGroup(chat))
        }
    })

    bocchi.onMessage((message) => {
        // Uncomment code di bawah untuk mengaktifkan auto-delete cache pesan.
        /*
        bocchi.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log(color('[BOCCHI]'), color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    bocchi.cutMsgCache()
                    console.log(color('[BOCCHI]'), color('Cache deleted!', 'yellow'))
                }
            })
        */
        
        // Comment code msgHandler di bawah untuk mengaktifkan auto-update. Kemudian, uncomment code require di bawah msgHandler.
        msgHandler(bocchi, message)
        // require('./message/index.js')(bocchi, message)
    })

    bocchi.onIncomingCall(async (callData) => {
        await bocchi.sendText(callData.peerJid, ind.blocked(ownerBot))
        await bocchi.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked.`, 'yellow'))
    })

bocchi.onGlobalParticipantsChanged(async (event) => {
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const anti = JSON.parse(fs.readFileSync('./database/bot/banned.json'))
const isWelcome = _welcome.includes(event.chat)
const isAnti = anti.includes(event.who)
const gcChat = await bocchi.getChatById(event.chat)
const pcChat = await bocchi.getContact(event.who)
let { pushname, verifiedName, formattedName } = pcChat
        pushname = pushname || verifiedName || formattedName
const { name, groupMetadata } = gcChat
        const botNumbers = await bocchi.getHostNumber() + '@c.us'
try {
if (event.action == 'add') {
if (isAnti && botNumbers) {
await bocchi.sendText(event.chat, `Lo siento pero te ha sido prohibido entrar a este grupo.🤷`)
await bocchi.removeParticipant(event.chat, event.who)
await bocchi.contactBlock(event.who) // Evita ser travado por putinhos
console.log(color('[BLACKLIST]', 'red'), color(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por ter sido colocado na blacklist...`, 'yellow'))
} else if (isWelcome && botNumbers) {
var profile = await bocchi.getProfilePicFromServer(event.who)
if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
const welcomer = await new canvas.Welcome()
.setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(profile)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
.setBackground('https://images.wallpaperscraft.com/image/landscape_art_road_127350_1280x720.jpg')
.toAttachment()
const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
await bocchi.sendFile(event.chat, base64, 'welcome.png', `Hola @${event.who.replace('@c.us','')} \n\nY bienvenido a ${name} \n\nQueremos que te diviertas y obviamente sigas nuestras reglas.!\n\n*Permitenos conocerte y presentate con Tu nombre, Foto, Edad y de donde eres* \n\nSi es necesario, llame a un administrador o escriba $menu.`)
console.log(color('[INGRESO]', 'red'), color(`${pushname} - (${event.who.replace('@c.us', '')}) ingreso al grupo ${name}...`, 'yellow'))
}
} else if (event.action == 'remove' && isWelcome && botNumbers) {
var profile = await bocchi.getProfilePicFromServer(event.who)
if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
const bye = await new canvas.Goodbye()
.setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(profile)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
.setBackground('https://images.wallpaperscraft.com/image/landscape_art_road_127350_1280x720.jpg')
.toAttachment()
const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
await bocchi.sendFile(event.chat, base64, 'welcome.png', `Bye ${pushname}, ve con diosito , te extrañaremos, o quizas no ☺️~`)
console.log(color('[SALIO/BAN]', 'red'), color(`${pushname} - (${event.who.replace('@c.us', '')}) salio o fue baniadodel grupo ${name}...`, 'yellow'))
}
} catch (err) { console.log(err) }
        })
}
create(options(start))
    .then((bocchi) => start(bocchi))
    .catch((err) => console.error(err))
