/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix, ownerNumber } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Por favor, espere un momento~`
}

exports.ok = () => {
    return `Ok Listo~`
}

exports.wrongFormat = () => {
    return `¡Formato incorrecto! Compruebe el uso en *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Por favor ingrese el mensaje!`
}

exports.cmdNotFound = (cmd) => {
    return `Comando *${prefix}${cmd}* no encontrado!`
}

exports.blocked = () => {
    return `El bot no recibe llamadas. Has sido bloqueado por romper las reglas!\n\nContactar con el propietario: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Este comando solo el propietario lo puede usar!`
}

exports.doneOwner = () => {
    return `Listo, solicitud realziada~`
}

exports.groupOnly = () => {
    return `Este comando solo se puede usar en grupo!`
}

exports.adminOnly = () => {
    return `Este comando solo puede ser utilizado por administradores de grupo!`
}

exports.notNsfw = () => {
    return `El comando NSFW no ha sido habilitado!`
}

exports.nsfwOn = () => {
    return `NSFW el comando fue exitosamente *habilitado*!`
}

exports.nsfwOff = () => {
    return `NSFW el comando fue exitosamente *deshabilitado*!`
}

exports.nsfwAlready = () => {
    return `El comando NSFW se habilitó correctamente antes.`
}

exports.addedGroup = (chat) => {
    return `Gracias por invitarme, miembros de *${chat.contact.name}*!\n\nRegístrese escribiendo:\n*${prefix}register* nombre | edad`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ SALA DE LISTA NEGRA ]------\n\nTotal bloqueados: *${blockNumber.length}* usuario(s)\n`
}

exports.notPremium = () => {
    return `¡Perdón! Este comando solo puede ser utilizado por usuarios premium.`
}

exports.notAdmin = () => {
    return `El usuario no es administrador!`
}

exports.adminAlready = () => {
    return `No se puede promover una usuario que ya es administrador.!`
}

exports.botNotPremium = () => {
    return `Este bot no admite comandos premium. Póngase en contacto con el propietario de este bot.`
}

exports.botNotAdmin = () => {
    return `Primero haz que el bot sea administrador!`
}

exports.ytFound = (res) => {
    return `*Video encontrado!*\n\n➸ *Title*: ${res.title}\n➸ *Description*:\n${res.desc}\n➸ *Duration*: ${res.duration} minutes\n\nSe están enviando los medios, espere...`
}

exports.notRegistered = () => {
    return `No te has registrado en nuestra base de datos!\n\nRegístrese escribiendo:\n*${prefix}register* nombre | edad`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRO 」*\n\nSu cuenta se registró con éxito con los datos:\n\n➸ *Nombre*: ${name}\n➸ *Edad*: ${age}\n➸ *ID*: ${userId}\n➸ *Tiempo de Registro*: ${time}\n➸ *Serial*: ${serial}\n\nNota:\nNO comparta su *serial* con alguien!\n\nConsidere leer *${prefix}rules* Primero.`
}

exports.registeredAlready = () => {
    return `Te has registrado antes.`
}

exports.received = (pushname) => {
    return `Hola ${pushname}!\nGracias por informar, trabajaremos en ello lo antes posible.`
}

exports.limit = (time) => {
    return `Lo sentimos, pero ha alcanzado el límite con estos comandos.\nEspere por favor *${time.hours}* hora(s) *${time.minutes}* minuto(s) *${time.seconds}* segundo(s) mas.`
}

exports.videoLimit = () => {
    return `El tamaño del video es demasiado grande.!`
}

exports.joox = (result) => {
    return `*Canción encontrada!*\n\n➸ *Singer*: ${result[0].penyanyi}\n➸ *Title*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Duration*: ${result[0].duration}\n\nSe están enviando los medios, espere...`
}

exports.gsm = (result) => {
    return `➸ *Modelo de teléfono*: ${result.title}\n➸ *Especificación*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Ingredientes*: ${result.bahan}\n\n*Pasos*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Titulo*: ${title}\n➸ *Canal*: ${channel}\n➸ *Duracion*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm) => {
    return `-----[ *USUARIO INFO* ]-----\n\n➸ *Nombre de usuario*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI ENLACES 」*\n\nAnuncio para todos los miembros del grupo de ${(name || formattedTitle)}\nSi alguien envía un enlace de grupo en este grupo, será expulsado automáticamente por el bot.\n\nGracias.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `La función de enlace anti-grupo fue exitosamente *deshabilitada*!`
}

exports.detectorOnAlready = () => {
    return `La función de enlace anti-grupo se ha habilitado antes.`
}

exports.linkDetected = () => {
    return `*「 ANTI ENLACES 」*\n\nEnviaste un enlace de grupo!\nLo siento, pero tienes que irte...\nEncantados de conocerte~`
}

exports.levelingOn = () => {
    return `La función de nivelación se *habilitó* con éxito!`
}

exports.levelingOff = () => {
    return `La función de nivelación se *deshabilitó*!`
}

exports.levelingOnAlready = () => {
    return `La función de nivelación se ha habilitado antes.`
}

exports.levelingNotOn = () => {
    return `¡La función de nivelación no ha sido habilitada!`
}

exports.levelNull = () => {
    return `Aún no tienes ningún nivel!`
}

exports.welcome = (event) => {
    return `Bienvenido @${event.who.replace('@c.us', '')}!`
}

exports.welcomeOn = () => {
    return `La función de bienvenida se *habilitó* con éxito!`
}

exports.welcomeOff = () => {
    return `La función de bienvenida se *deshabilitó* con éxito!`
}

exports.welcomeOnAlready = () => {
    return `La función de bienvenida se ha habilitado antes.`
}

exports.minimalDb = () => {
    return `Necesita al menos *10* usuarios que tengan un nivel en la base de datos!`
}

exports.autoStikOn = () => {
    return `La función de Auto-sticker se *habilitó* con éxito!`
}

exports.autoStikOff = () => {
    return `Auto-sticker la función se *deshabilitó* con éxito!`
}

exports.autoStikOnAlready = () => {
    return `La función de Auto-sticker se ha habilitado antes.`
}

exports.afkOn = (pushname, reason) => {
    return `La función AFK fue exitosamente *habilitada*!\n\n➸ *Usuario*: ${pushname}\n➸ *Razon*: ${reason}`
}

exports.afkOnAlready = () => {
    return `La función AFK se ha habilitado antes.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 MODO AFK 」*\n\nSssttt! La persona está en estado AFK, no te molestes!\n➸ *Razon*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Está de vuelta de AFK, bienvenido~`
}

exports.gcMute = () => {
    return `*「 CERRADO 」*\n\nSolo los administradores que pueden enviar mensajes en este grupo.` 
}

exports.gcUnmute = () => {
    return `*「 ABIERTO 」*\n\nTodos los miembros pueden enviar mensajes en este grupo ahora.`
}

exports.notNum = (q) => {
    return `"${q}", no son números!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nombre*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Precio*: ${price}\n➸ *Descripción*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nombre*: ${nama}\n➸ *Precio*: ${harga}\n➸ *Vendido*: ${terjual}\n➸ *Locación*: ${shop_location}\n➸ *Product link*: ${link_product}\n➸ *Descripción*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRO 」*\n\nSu cuenta está registrada correctamente!. ${pushname}~ :3`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTRADO 」*\n\nCuenta encontrada!\n\n➸ *Nombre*: ${name}\n➸ *Edad*: ${age}\n➸ *ID*: ${userId}\n➸ *Tiempo de Registro*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Cuenta con serial: *${serial}* no encontrada!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Titulo*: ${result.title}\n➸ *Duración*: ${result.duration}\n➸ *Link*: ${result.url}\n\nSe están enviando los medios, espere...`
}

exports.pcOnly = () => {
    return `Este comando solo se puede usar en chat privado!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nEnviaste un enlace de grupo!\nLo siento, pero tienes que irte...`
}

exports.ageOld = () => {
    return `¡Eres demasiado mayor para usar esta función! Vuelve a tu juventud para poder utilizar esta función..`
}

exports.fakeLink = () => {
    return `Ow, este enlace parece un poco sospechoso, por la seguridad de los miembros de este grupo, te patearé.\nBye~.`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Surah name*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Meaning*: ${ranquran.data.result.arti}
*Number*: ${ranquran.data.result.nomor}
*Description*: ${ranquran.data.result.keterangan}
*Audio link*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
*List of hadees*:
1. Bukhari hadees has 6638 hadees
    _usage_: ${prefix}hadees bukhari 1
2. Muslim hadees has 4930 hadees
    _usage_: ${prefix}hadees muslim 25
3. Tirmidzi hadees has 3625 hadees
    _usage_: ${prefix}hadees tirmidzi 10
4. Nasai hadees has 5364 hadees
    _usage_: ${prefix}hadees nasai 6
5. Ahmad hadees 4305 hadees
    _usage_: ${prefix}hadees ahmad 5
6. Abu Daud hadees 4419 hadees
    _usage_: ${prefix}hadees abudaud 45
7. Malik hadees 1587 hadees
    _usage_: ${prefix}hadees malik 45
8. Ibnu Majah hadees 4285 hadees
    _usage_: ${prefix}hadees ibnumajah 8
9. Darimi hadees 2949 hadees
    _usage_: ${prefix}hadees darimi 3
    `
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

¡Se agotó el límite de uso! Por favor haz lo siguiente:
❏ *_Esperar hasta 12:00 AM (GMT+7)_*
    `
}

exports.asmaulHusna = (assna) => {
    return `
*── 「 ASMAUL HUSNA 」 ──*
*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.stickerDel = () => {
    return `El Sticker se eliminó correctamente de la base de datos.!`
}

exports.stickerAdd = () => {
    return `El Sticker se agregó correctamente a la base de datos.!`
}

exports.stickerAddAlready = (q) => {
    return `Pegatinas con palabras clave "${q}" ya existe en la base de datos!`
}

exports.stickerNotFound = () => {
    return `Sticker no encontrado!`
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 RECORDATORIO 」 ──*
    
Recordatorio activado con éxito!
➸ *Mensaje*: ${messRemind}
➸ *Duración*: ${parsedTime.hours} hora ${parsedTime.minutes} minuto ${parsedTime.seconds} segundo
➸ *A*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 RECORDATORIO 」 ──*
⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Mensaje*: ${messRemind}`
}

exports.nameChanged = (q) => {
    return `El nombre de usuario se ha cambiado correctamente a *${q}*`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
------[ BIENVENIDO ]-----

======================
➸ *Nombre*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Rol*: ${role}
➸ *Premium*: ${premium}
======================

Total registrados: *${jumlahUser}*

Los siguientes menús están disponibles:

*[1]* Descargas/Media
*[2]* Bot
*[3]* Variados
*[4]* Stickers
*[5]* Zona Anime/Otakus
*[6]* Diversión
*[7]* Grupos/Admins
*[8]* 18+
*[9]* Dueño
*[10]* Niveles

Escribe *${prefix}menu* seguido del numero para abrir el menú de la página seleccionada.

Nota:
Trate bien al bot, el desarrollador actuará con firmeza si el usuario viola las reglas.
Este bot tiene anti-spam en forma de comando de enfriamiento durante *5 segundos* cada vez que lo usa.
    `
}

exports.menuDownloader = () => {
    return `
-----[ DESCARGAS/MEDIA ]-----

1. *${prefix}musica*
Descarga mp3 de Youtube.
Aliases: -
Uso: *${prefix}musica* Canción+Artista

2. *${prefix}Video*
Descargar Video de Youtube.
Aliases: -
Usage: *${prefix}Video* Cancion+Artista

3. *${prefix}facebook*
Descargar video de Facebook.
Aliases: -
Usage: *${prefix}facebook* +link

4. *${prefix}tomp3*
Convertir un video a solo audio (MP3).
Aliases: -
Usage: Envia un video con el texto *${prefix}tomp3* o responde un video con *${prefix}tomp3*.

5. *${prefix}twitter*
Descargar medios de Twitter.
Aliases: *twt*
Usage: *${prefix}twiter* link

6. *${prefix}moddroid*
Buscar mod en moddroid.
Aliases: -
Usage: *${prefix}moddroid* APK_name

7. *${prefix}happymod*
Buscar mod en happymod.
Aliases: -
Usage: *${prefix}happymod* APK_name


_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Debe leer.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Muestra los comandos disponibles.
Aliases: -
Usage: *${prefix}menu* index_number

3. *${prefix}status*
Muestra el estado del bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Verifique los números bloqueados.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Comprueba la velocidad del bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Elimina mensajes de bots.
Aliases: *del*
Usage: Responder a los mensajes de bot con un la leyenda *${prefix}delete*.

7. *${prefix}report*
Informar errores al dev.
Aliases: -
Usage: *${prefix}report* texto

8. *${prefix}tos*
Términos de servicio.
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Únase al grupo a través del enlace.
Aliases: -
Usage: *${prefix}join* link del grupo

10. *${prefix}ownerbot*
Envíe el contacto del propietario.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Enviar foto de perfil del usuario.
Aliases: -
Usage: *${prefix}getpic* @user/521812xxxxxxxx

12. *${prefix}premiumcheck*
Verificación de tiempo activo premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}limit*
Verifique su límite de comandos remanentes.
Aliases: -
Usage: *${prefix}limit*

14. *${prefix}uptime*
Muestra el Tiempo Activo del Bot.
Aliases: -
Usage: *${prefix}uptime*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ VARIADOS ]-----

1. *${prefix}say*
El bot repetirá tu mensaje.
Aliases: -
Usage: *${prefix}say* texto

2. *${prefix}tts*
Crea un texto a voz. Necesita un código de idioma, lo puede encontrar aquí https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Usage: *${prefix}tts* Código de lenguaje | texto

3. *${prefix}afk*
Configure su cuenta en modo AFK, les diré a quienes lo mencionaron.
Aliases: -
Usage: *${prefix}afk* reason. Send any message to group to disable.

4. *${prefix}math*
Una calculadora.
* = multiplicación
+ = adición
- = sustracción
/ = división
Aliases: -
Usage: *${prefix}math* 12*12

5. *${prefix}ip*
Búsqueda de IP.
Aliases: -
Usage: *${prefix}ip* ip_address

6. *${prefix}reminder*
Recordatorio. 
*s* - segundos
*m* - minutos
*h* - horas
*d* - dias
Aliases: -
Usage: *${prefix}reminder* 10s | recordatorio_mensaje

7. *${prefix}imagetourl*
Crea un url/link de una imagen que enviés.
Aliases: *imgtourl*
Usage: Envia una imagen con el texto *${prefix}imagetourl* or respode una imagencon el texto *${prefix}imagetourl*.

8. *${prefix}translate*
Traduce un texto.
Aliases: *trans*
Usage: *${prefix}translate* texto | codigo_lenguaje

9. *${prefix}coronavirus*
Verifique los casos de COVID-19.
Aliases: *corona*
Usage: *${prefix}coronavirus* nombre_nacion

10. *${prefix} imagen*
Busca una Imagen.
Aliases: -
Usage: *${prefix}imagen* imagen a buscar

11. *${prefix}nightcore*
Crea un efecto nightcore a partir del audio transmitido.
Usage: Responder Audio con *${prefix}nightcore*.

12. *${prefix}toptt*
Envia una nota de voz a partir de un mp3.
Usage: Responder Audio con *${prefix}toptt*.

13. *${prefix}clima*
Conoce el clima de tu ciudas.
Usage: Envia *${prefix}clima* y tu ciudad.

13. *${prefix}frasedehoy*
Frases Motivasionaels aleatorias
Usage: Envia *${prefix}frasedehoy*.

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKERS ]-----

1. *${prefix}sticker*
Crea stickers a partir de imágenes enviadas o respondidas.
Aliases: *stiker*
Usage: Enviar imágenes con título *${prefix}sticker* o responde a las imágenes con la leyenda *${prefix}sticker*.

2. *${prefix}gif*
Crea stickers a partir de videos / GIF.
Aliases: *stikergif*
Usage: Enviar videos / GIF con subtítulo *${prefix}gif* o responde a los videos / GIF con la leyenda *${prefix}gif*.

3. *${prefix}frasestick*
Texto a sticker.
Aliases: -
UsageL *${prefix}frasestick* texto/frase

4. *${prefix}robado*
Roba/Renombra los Stickers (nombre | autor.
Aliases: -
Usage: *${prefix}robado* nombre | autor

5. *${prefix}wasted*
Crea un efecto Wasted como GTA.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}wasted* o responde a una imagen con el texto *${prefix}wasted*.

6. *${prefix}red*
Crea una imagen y un sticker con un efecto rojo.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}red* o responde a una imagen con el texto *${prefix}red*.

7. *${prefix}sepia*
Crea una imagen y un sticker con un efecto sepia.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}sepia* o responde a una imagen con el texto *${prefix}sepia*.

8. *${prefix}gray*
Crea una imagen y un sticker con un efecto blanco y negro.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}gray* o responde a una imagen con el texto *${prefix}gray*.

9. *${prefix}gay*
Crea una imagen y un sticker con un efecto de la bandera de colores.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}gay* o responde a una imagen con el texto *${prefix}gay*.

10. *${prefix}nobg*
Elimina el fondo de una imagen y creala sticker (solo premium).
Aliases: -
Usage: Envia una imagen con el texto *${prefix}nobg*.

11. *${prefix}emoji*
Crea un sticker de un emoji.
Aliases: -
Usage: Envie el comando *${prefix}emoji* y el emoji que quiere hacer sticker.

12. *${prefix}colores*
Crea un sticker de texto o emojis con colores.
Aliases: -
Usage: Envie el comando *${prefix}colores* y el texto o emoji que quiere hacer sticker.

13. *${prefix}addsticker*
Agregar Sticker a la base de datos
Aliases: *addstiker*
Usage: Responde a un Sticker con *${prefix}addsticker* Tecla del Sticler.

14. *${prefix}delsticker*
Elimina Sticker de la base de datos.
Aliases: *delstiker*
Usage: *${prefix}delstiker* tecla del sticker

15. *${prefix}stickerlist*
Muestra la lista de stickers en la base de datos.
Aliases: *liststicker stikerlist liststiker*
Usage: *${prefix}stickerlist*

16. *${prefix}toimg*
Convertir sticker en imagen.
Aliases: *stikertoimg*
Usage: Responde a los stickers con la leyenda *${prefix}toimg*.

17. *${prefix} triggered*
Crea un sticker gif a partir de una imagen con un efecto y leyenda triggered.
Aliases: -
Usage: Envia una imagen con el texto *${prefix}triggered* o responde a una imagen con el texto *${prefix}triggered*.



_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ ANIME/OTAKUS ]-----

1. *${prefix}lolivid*
Envía un video random de lolis.
Aliases: -
Usage: *${prefix}lolivid*

1. *${prefix}neko*
Envía una foto de chica neko.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Envía fondos de pantalla de anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Envía fotos de chicas kemonomimi.
Aliases: -
Usage: *${prefix}kemono*

8. *${prefix}waifu*
Envía fotos waifu al azar.
Aliases: -
Usage: *${prefix}waifu*

11. *${prefix}anoboy*
Anime en curso en el fansub de Anoboy.
Aliases: -
Usage: *${prefix}anoboy*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ DIVERTIDO ]-----


1. *${prefix}kiss*
Besar a alguien envia la foto de la persona que quieres besar ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Enviar imagen con subtítulo *${prefix}kiss* o responder una imagen con un título *${prefix}kiss*.

2. *${prefix}phcomment*
Crea una imagen con estilo de la sección de comentarios de Pornhub.
Aliases: -
Usage: *${prefix}phcomment* Usuario | Texto que desees

3. *${prefix}patear*
Dale una patada a alguien del grupo. 
Otros usos. - 
Uso:  *${prefix}patear* @miembro1

4. *${prefix}besar*
Date un beso con alguien del grupo 7u7. 
Otros usos. - 
Uso:  *${prefix}besar* @miembro1

5. *${prefix}golpear*
Golpea a alguien del grupo. 
Otros usos. - 
Uso:  *${prefix}golpear* @miembro1




_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ GRUPOS/ADMINS ]-----

1. *${prefix}add*
Agregue usuarios al grupo.
Aliases: -
Usage: *${prefix}add* 521xxxxxxxxxx

2. *${prefix}kick*
Eliminar miembros del grupo.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}advertir*
Asigna advertencias a los usuarios, si acumula 3 advertencias serán expulsados. 
Otros usos: - 
Uso: *${prefix}advertencia* responda a un mensaje de la persona que desea advertir. 

4. *${prefix}promote*
Promocionar miembro para que se convierta en administrador.
Aliases: -
Usage: *${prefix}promote* @member1

5. *${prefix}demote*
Descender miembro de administrador.
Aliases: -
Usage: *${prefix}demote* @member1

6. *${prefix}leave*
Sacat el bot del grupo.
Aliases: -
Usage: *${prefix}leave*

7. *${prefix}everyone*
Mencione a todos los miembros del grupo.
Aliases: -
Usage: *${prefix}everyone*

8. *${prefix}nsfw*
Activar/desactivar el modo NSFW (18+).
Aliases: -
Usage: *${prefix}nsfw* enable/disable

9. *${prefix}groupicon*
Cambiar icono de grupo.
Aliases: -
Usage: Enviar imágenes con subtítulo *${prefix}groupicon* o responde a las imágenes con una leyenda *${prefix}groupicon*.

10. *${prefix}antilink*
Activar/Desactivar la función de proteccion de enlace de grupo de Whatsapp.
Aliases: -
Usage: *${prefix}antilink* enable/disable

11. *${prefix}welcome*
Activar/Desactivar la función de bienvenida.
Aliases: -
Usage: *${prefix}welcome* enable/disable

12. *${prefix}autosticker*
Alternar la función de autoadhesivo. Cada imagen enviada se convertirá en un Sticker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

13. *${prefix}antinsfw*
Activar/Desactivar proteccion de enlace anti-NSFW.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

14. *${prefix}mutegc*
Configure el grupo para que solo administradores envien mensajes.
Aliases: -
Usage: *${prefix}mutegc* enable/disable

15. *${prefix}revoke*
Restablecer el enlace del grupo.
Aliases: -
Usage: *${prefix}revoke*.

16. *${prefix}linkgroup*
Envia el enlace del grupo
Aliases: -
Usage: *${prefix}linkgroup*.

17. *${prefix}ownergroup*
Muestra quien creo el grupo.
Aliases: -
Usage: *${prefix}ownergroup*.

18. *${prefix}admins*
Muestra a los administradores del grupo.
Aliases: -
Usage: *${prefix}admins*.

19. *${prefix}groupinfo*
Muestra la informacion del grupo.
Aliases: -
Usage: *${prefix}groupinfo*.

20. *${prefix}wame*
Muestra ek link de tu Wa.me
Aliases: -
Usage: *${prefix}wame*.

21. *${prefix}afk*
Avisa al grupo si estas ausente y por que razón
Aliases: -
Usage: *${prefix}afk* Razón ejemplo: $afk trabajando.

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ 18+ ]-----

1. *${prefix}lewds*
Envía fotos de anime lascivo.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}waifu18*
Envía fotos waifu NSFW aleatorias.
Aliases: -
Usage: *${prefix}waifu18*

3. *${prefix}fetish*
Envía fotos fetiche.
Aliases: -
Usage: *${prefix}fetish* + alguna de las siguientes armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

4. *${prefix}tits*
Envía fotos de pechos.
Aliases: -
Usage: *${prefix}tits*.

5. *${prefix}bdsm*
Envía fotos hot de bdsm.
Aliases: -
Usage: *${prefix}bdsm*.

6. *${prefix}blowjob*
Envía fotos hot.
Aliases: -
Usage: *${prefix}blowjob*.

7. *${prefix}masturb*
Envía fotos hot.
Aliases: -
Usage: *${prefix}masturb*.

8. *${prefix}phdl*
Descarga videos de Pornhub.
Aliases: -
Usage *${prefix}phdl* mas link

9. *${prefix}yuri*
Envía fotos de yuri al azar.
Aliases: -
Usage: *${prefix}yuri*

10. *${prefix}lewdavatar*
Envía avatares lascivos al azar.
Aliases: -
Usage: *${prefix}lewdavatar*

11. *${prefix}femdom*
Envía fotos de femdom al azar.
Aliases: -
Usage: *${prefix}femdom*

12. *${prefix}nekopoi*
Enviar el último enlace de vídeo Nekopoi.
Aliases: -
Usage: *${prefix}nekopoi*

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ DUEÑO ]-----
Hola propietarioヽ(・∀・)ﾉ!

1. *${prefix}bc*
Haz un mensaje genera para todos los chats del bot.
Aliases: -
Usage: *${prefix}bc* text

2. *${prefix}bcgroup*
Haz una mensaje solo para los grupos del bot.
Otros usos: -
Uso: *${prefix}bcgroup* texto. 

3. *${prefix}clearall*
Elimina todos los chats de la cuenta del bot.
Aliases: -
Usage: *${prefix}clearall*

4. *${prefix}getses*
Tome una captura de pantalla de la sesión desde la cuenta del bot.
Aliases: -
Usage: *${prefix}getses*

5. *${prefix}ban*
Agregar / eliminar usuarios prohibidos.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

6. *${prefix}leaveall*
Sal de todos los grupos.
Aliases: -
Usage: *${prefix}leaveall*

7. *${prefix}eval*
Evalúe el código JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

8. *${prefix}shutdown*
Apagar bot.
Aliases: -
Usage: *${prefix}shutdown*

9. *${prefix}premium*
Agregar / eliminar usuarios premium.
Aliases: -
Usage: *${prefix}premium* add/del @user

10. *${prefix}setstatus*
Pone cosas sobre mí.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

11. *${prefix}serial*
Verifique el número de serie del usuario.
Aliases: -
Usage: *${prefix}serial* user_serial

12. *${prefix}exif*
Ajusta tus stickers WM.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

13. *${prefix}mute*
Silencia a todos los usuarios.
Aliases: -
Usage: Use *${prefix}mute* to mute and use *${prefix}mute* once again to unmute.

14. *${prefix}setname*
Cambia el nombre del bot. Máximo 25 caracteres.
Aliases: -
Usage: *${prefix}name* username

15. *${prefix}block*
Blockear Usuario.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

16. *${prefix}unblock*
Desbloquear Usuario.
Aliases: *unblok*
Usage: *${prefix}unblock* @user/62812xxxxxxxx

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ NIVELES  ]-----

1. *${prefix}level*
comprueba tu nivel.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Consulte la tabla de clasificación.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.rules = () => {
    return `
-----[ REGLAS ]-----

1. NO envíe spam al bot. 
 Penalización: *ADVERTENCIA / BLOQUEO TEMPORAL*
 
2. NO LLAME/TEXTEE AL BOT
Penalización: *BLOQUEO TEMPORAL*

3. No abuse del bot.
Penalización: *BLOQUEO PERMANENTE*
 
4. No agrege a grupos al bot.
Penalización: *BLOQUEO PERMANENTE*

Si comprende estas reglas, escriba *-menu* para empezar.

Dueño:
wa.me/+5218333659697

    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = () => {
    return `
-----[ TÉRMINOS Y CONDICIONES ]-----

Este bot es un bot bajo desarrollo de code-error.
El propietario / hoster de este bot es independiente de la responsabilidad y supervisión del desarrollador.
no se puede plagiar, agregar, eliminar, reemplazar el código fuente con notas *NO VENDER* este código fuente en ninguna forma.
Si ocurre un error, la primera persona con la que debe comunicarse es el propietario / hoster.

Personas de contacto:

Dueño:
wa.me/+5218333659697


Gracias!

- Code-Error
    `
}
