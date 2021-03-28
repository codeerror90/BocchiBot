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

*[1]* Descargas
*[2]* Bot
*[3]* Miscelaneos
*[4]* Sticker
*[5]* Weeaboo
*[6]* Diversión
*[7]* Moderación
*[8]* NSFW
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
-----[ DESCARGAS ]-----

1. *${prefix}facebook*
Descargar video de Facebook.
Aliases: *fb*
Usage: *${prefix}facebook* video_link

2. *${prefix}ytmp3*
Descargar audio de YouTube.
Aliases: -
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Descargar video de YouTube.
Aliases: -
Usage: *${prefix}ytmp4* link

4. *${prefix}joox*
Descarga música de Joox.
Aliases: -
Usage: *${prefix}joox* song's_title

5. *${prefix}tiktok*
Descargar video de TikTok.
Aliases: -
Usage: *${prefix}tiktok* link

6. *${prefix}twitter*
Descargar medios de Twitter.
Aliases: *twt*
Usage: *${prefix}twiter* link

7. *${prefix}tiktokpic*
Descargar foto de perfil de TikTok.
Aliases: -
Usage: *${prefix}tiktokpic* username

8. *${prefix}tiktoknowm*
Descargar video de TikTok sin WM.
Aliases: *tktnowm*
Usage: *${prefix}tiktoknowm* link

9. *${prefix}moddroid*
Buscar mod en moddroid.
Aliases: -
Usage: *${prefix}moddroid* APK_name

10. *${prefix}happymod*
Buscar mod en happymod.
Aliases: -
Usage: *${prefix}happymod* APK_name

11. *${prefix}linedl*
Descargador Stickers de línedl.
Aliases: -
Usage: *${prefix}linedl* sticker_link

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
Usage: Reply to deleted messages with a caption *${prefix}delete*.

7. *${prefix}report*
Informar errores al dev.
Aliases: -
Usage: *${prefix}report* text

8. *${prefix}tos*
Términos de servicio.
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Únase al grupo a través del enlace.
Aliases: -
Usage: *${prefix}join* group's_link

10. *${prefix}ownerbot*
Envíe el contacto del propietario.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Enviar foto de perfil del usuario.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Verificación de tiempo activo premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Lista de usuarios premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

14. *${prefix}limit*
Verifique su límite de comandos remanentes.
Aliases: -
Usage: *${prefix}limit*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISCELANEOS ]-----

1. *${prefix}say*
El bot repetirá tu mensaje.
Aliases: -
Usage: *${prefix}say* text

2. *${prefix}lyric*
Busca letras de canciones.
Aliases: -
Usage: *${prefix}lyric* song's_title

3. *${prefix}shortlink*
Crea un enlace corto.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikien*
Envíe Wikipedia desde el texto dado.
Aliases: -
Usage: *${prefix}wikien* query

5. *${prefix}kbbi*
Envíe definiciones de palabras desde KBBI.
Aliases: -
Usage: *${prefix}kbbi* text

6. *${prefix}igstalk*
Stalk cuenta de Instagram.
Aliases: -
Usage: *${prefix}igstalk* ig_username

7. *${prefix}gsmarena*
Envío de información telefónica desde GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* phone's_model

8. *${prefix}receipt*
Envío de recibo de comida.
Aliases: *resep*
Usage: *${prefix}receipt* food's_name

9. *${prefix}ytsearch*
Envío de resultados de búsqueda de YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

10. *${prefix}tts*
Crea un texto a voz. Necesita un código de idioma, lo puede encontrar aquí https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Usage: *${prefix}tts* Código de lenguaje | text

11. *${prefix}afk*
Configure su cuenta en modo AFK, les diré a quienes lo mencionaron.
Aliases: -
Usage: *${prefix}afk* reason. Send any message to group to disable.

12. *${prefix}distance*
Envío de información de distancia de la ciudad.
Aliases: -
Usage: *${prefix}distance* from | to

13. *${prefix}findsticker*
Etiqueta de búsqueda.
Aliases: *findstiker*
Usage: *${prefix}findsticker* text

14. *${prefix}math*
Una calculadora.
* = multiplicación
+ = adición
- = sustracción
/ = división
Aliases: -
Usage: *${prefix}math* 12*12

15. *${prefix}listsurah*
Envío de la lista de Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

16. *${prefix}surah*
Envío de sura.
Aliases: -
Usage: *${prefix}surah* surah_number

17. *${prefix}js*
Obtenga un horario reducido.
Aliases: - 
Usage: *${prefix}js* area

18. *${prefix}mutual*
Obtenga contacto aleatorio.
Aliases: -
Usage: *${prefix}mutual*

19. *${prefix}whois*
Búsqueda de IP.
Aliases: -
Usage: *${prefix}whois* ip_address

20. *${prefix}play*
Reproduce audio de YouTube.
Aliases: - 
Usage: *${prefix}play* title

21. *${prefix}sms*
Envía SMS como anónimo. (Puerta de enlace SMS)
Aliases: -
Usage: *${prefix}sms* message | number

22. *${prefix}toxic*
Tóxico al azar. (Indonesian)
Aliases: -
Usage: *${prefix}toxic*

23. *${prefix}tafsir*
Interpretación del Corán. (Indonesian)
Aliases: -
Usage: *${prefix}tafsir* surah_name ayat

24. *${prefix}motivasi*
Texto de motivación. (Indonesian)
Aliases: -
Usage: *${prefix}motivasi*

25. *${prefix}linesticker*
Sticker de última línea.
Aliases: *linestiker*
Usage: *${prefix}linesticker*

26. *${prefix}alkitab*
Búsqueda de la Biblia. (Indonesian)
Aliases: -
Usage: *${prefix}* gospel_name

27. *${prefix}cekongkir*
Cheque de tarifa postal. (Indonesian)
Aliases: -
Usage: *${prefix}ongkir* service_name | from | to

28. *${prefix}movie*
Buscar películas.
Aliases: -
Usage: *${prefix}movie* title

28. *${prefix}reminder*
Recordatorio. 
*s* - segundos
*m* - minutos
*h* - horas
*d* - dias
Aliases: -
Usage: *${prefix}reminder* 10s | recordatorio_mensaje

29. *${prefix}imagetourl*
Cargador de imágenes.
Aliases: *imgtourl*
Usage: Send images with caption *${prefix}imagetourl* or reply to the image with a caption *${prefix}imagetourl*.

30. *${prefix}infohoax*
Actualización de información de engaño.
Aliases: -
Usage: *${prefix}infohoax*

31. *${prefix}trending*
Tendencias de Twitter.
Aliases: -
Usage: *${prefix}trending*

32. *${prefix}jobseek*
Solicitante de empleo solo en Indonesia.
Aliases: -
Usage: *${prefix}jobseek*

33. *${prefix}spamcall*
Llamada no deseada.
Aliases: -
Usage: *${prefix}spamcall* 812xxxxxxxx

34. *${prefix}spamsms*
SMS no deseados.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx amount

35. *${prefix}email*
Enviar un correo electrónico.
Aliases: -
Usage: *${prefix}email* email | subject | message

36. *${prefix}quotes*
Citas indonesias al azar.
Aliases: -
Usage: *${prefix}quotes*

37. *${prefix}genshininfo*
Información de personajes de Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* chara_name

38. *${prefix}translate*
Traduce un texto.
Aliases: *trans*
Usage: *${prefix}translate* texto | code_lang

39. *${prefix}hadees*
Información de Hadees.
Aliases: *hadis*
Usage: *${prefix}hadees* hadees_name | hadees_number

40. *${prefix}asmaulhusna*
Asmal Hosna.
Aliases: -
Usage: *${prefix}asmaulhusna* asmaulhusna_number

41. *${prefix}randomquran*
Sura del Corán al azar.
Aliases: -
Usage: *${prefix}randomquran*

42. *${prefix}coronavirus*
Verifique los casos de COVID-19.
Aliases: *corona*
Usage: *${prefix}coronavirus* nombre_nacion

43. *${prefix}tomp3*
Convertir un video a solo audio (MP3).
Aliases: -
Usage: Send a video with caption *${prefix}tomp3* or reply video with a caption *${prefix}tomp3*.

44. *${prefix} frasestick*
Texto a sticker.
Aliases: -
UsageL *${prefix}ttp* text

45. *${prefix}addsticker*
Agregar Sticker a la base de datos
Aliases: *addstiker*
Usage: Responde a un Sticker con *${prefix}addsticker* Tecla del Sticler.

46. *${prefix}delsticker*
Elimina Sticker de la base de datos.
Aliases: *delstiker*
Usage: *${prefix}delstiker* tecla del sticker

47. *${prefix}stickerlist*
Muestra la lista de stickers en la base de datos.
Aliases: *liststicker stikerlist liststiker*
Usage: *${prefix}stickerlist*

48. *${prefix}nightcore*
Crea un efecto nightcore a partir del audio transmitido.
Aliases: Responder Audio con *${prefix}nightcore*.

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Crea stickers a partir de imágenes enviadas o respondidas.
Aliases: *stiker*
Usage: Enviar imágenes con título *${prefix}sticker* o responde a las imágenes con la leyenda *${prefix}sticker*.

2. *${prefix}stickergif*
Crea stickers a partir de videos / GIF.
Aliases: *stikergif*
Usage: Enviar videos / GIF con subtítulo *${prefix}stickergif* o responde a los videos / GIF con la leyenda *${prefix}stickergif*.

3. *${prefix}ttg*
Crea texto en pegatinas GIF.
Aliases: -
Usage: *${prefix}ttg* text

4. *${prefix}stickertoimg*
Convertir sticker en imagen.
Aliases: *stikertoimg*
Usage: Responde a las pegatinas con la leyenda *${prefix}stickertoimg*.

5. *${prefix}emoji*
Convierte emoji en sticker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

6. *${prefix}stickerwm*
Crea una sticker con metadatos/WM.
Aliases: *stcwm*
Usage: Enviar imágenes con subtítulo *${prefix}stickerwm* nombre_paquete | nombre del autor o responde a la imagen con una leyenda *${prefix}stickerwm* nombre_paquete | nombre del autor.

7. *${prefix}stickermeme*
Crea un meme de sticker.
Aliases: *stcmeme*
Usage: Send images with caption *${prefix}sticker* upper_text | bottom_text or reply to the images with a caption *${prefix}sticker* upper_text | bottom_text.

8. *${prefix}takestick*
Edite los metadatos de la etiqueta.
Aliases: -
Usage: Responde a las stickers con una leyenda *${prefix}takestick* pack_name | author_name

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

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

4. *${prefix}kusonime*
Busque información de anime y enlaces de descarga por lotes en Kusonime.
Aliases: -
Usage: *${prefix}kusonime* anime's_title

5. *${prefix}komiku*
Buscando información de manga y enlaces de descarga en Komiku.
Aliases: -
Usage: *${prefix}komiku* manga's_title

6. *${prefix}wait*
Busque la fuente de anime en la escena de las capturas de pantalla.
Aliases: -
Usage: Send screenshots with caption *${prefix}wait* or reply to the screenshots with a caption *${prefix}wait*.

7. *${prefix}source*
Busque fuentes del panel doujin, ilustraciones e imágenes relacionadas con el anime.
Aliases: *sauce*
Usage: Send images with caption *${prefix}source* or reply to the images with a caption *${prefix}source*.

8. *${prefix}waifu*
Envía fotos waifu al azar.
Aliases: -
Usage: *${prefix}waifu*

9. *${prefix}anitoki*
Última actualización de Anitoki fansub.
Aliases: -
Usage: *${prefix}anitoki*

10. *${prefix}neonime*
Última actualización de Neonime Fansub.
Aliases: -
Usage: *${prefix}neonime*

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

1. *${prefix}hartatahta*
Haz una imagen del "Harta Tahta Nama".
Aliases: -
Usage: *${prefix}hartatahta* name

2. *${prefix}partner*
Partido de Weton. (Indonesio)
Aliases: *pasangan*
Usage: *${prefix}partner* name | partner

3. *${prefix}zodiac*
Fortuna semanal del zodíaco. (Indonesio)
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiac

4. *${prefix}write*
Tome notas escritas en un libro.
Aliases: *nulis*
Usage: *${prefix}write* text

5. *${prefix}glitchtext*
Crea un texto con estilo de falla.
Aliases: *glitext*
Usage: *${prefix}glitchtext* text1 | text2

6. *${prefix}simi*
Chat SimiSimi. (Indonesio)
Aliases: -
Usage: *${prefix}simi* text

7. *${prefix}blackpink*
Crea un texto con estilo de logotipo Blackpink.
Aliases: -
Usage: *${prefix}blackpink* text

8. *${prefix}phmaker*
Crea un texto con el estilo del logotipo de Pornhub.
Aliases: -
Usage: *${prefix}phmaker* left_text | right_text

9. *${prefix}galaxy*
Crea un texto con estilo de galaxia.
Aliases: -
Usage: *${prefix}galaxy* text

10. *${prefix}tod*
Juega a la verdad o al desafío. (Indonesio)
Aliases: -
Usage: *${prefix}tod*

11. *${prefix}weton*
Fortuna de Weton. (Indonesio)
Aliases: -
Usage: *${prefix}weton* date | month | year

12. *${prefix}triggered*
Aplicar un efecto de activación a la imagen.
Aliases: -
Usage: Enviar imagen con subtítulo *${prefix}triggered* o responder a alguien mensaje con subtítulo *${prefix}desencadenado * o puede usar directamente *${prefix}triggered*.

13. *${prefix}kiss*
Besar a alguien ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Enviar imagen con subtítulo *${prefix}kiss* o responder una imagen con un título *${prefix}kiss*.

14. *${prefix}asupan*
Dosis diaria de TikTok.
Aliases: -
Usage: *${prefix}asupan*

15. *${prefix}citacita*
Ideales de meme. (Indonesio)
Aliases: -
Usage: *${prefix}citacita*

16. *${prefix}phcomment*
Crea una imagen con estilo en la sección de comentarios de Pornhub.
Aliases: -
Usage: *${prefix}phcomment* username | text

17. *${prefix}ffbanner*
Crea un estandarte de Free Fire.
Aliases: -
Usage: *${prefix}ffbanner* text1 | text2

18. *${prefix}fflogo*
Crea un logotipo de personajes de Free Fire.
Aliases: -
Usage: *${prefix}fflogo* text1 | text2

19. *${prefix}neontext*
Crea una imagen de texto de neón
Aliases: *neon*
Usage: *${prefix}neontext* up | center | bottom

20. *${prefix}firemaker*
Crea un texto de fuego.
Aliases: -
Usage: *${prefix}firemaker* text

21. *${prefix}mlmaker*
Crea una imagen de héroe de ML con texto.
Aliases: -
Usage: *${prefix}mlmaker* hero_name | text

22. *${prefix}balloonmaker*
Crea un par de imágenes de globos.
Aliases: *blmaker*
Usage: *${prefix}balloonmaker* name1 | name2

23. *${prefix}sliding*
Crea un texto deslizante.
Aliases: -
Usage: *${prefix}sliding* text

24. *${prefix}wasted*
Crea un efecto desperdiciado.
Aliases: -
Usage: Send image with caption *${prefix}wasted* or reply image with caption *${prefix}wasted*.

25. *${prefix}caklontong*
Prueba de Cak Lontong.
Aliases: -
Usage: *${prefix}caklontong*

26. *${prefix}hilih*
Hilih-ify tu texto.
Aliases: -
Usage: *${prefix}hilih* text.

27. *${prefix}tebakgambar*
Prueba de adivinar la imagen.
Aliases: -
Usage: *${prefix}tebakgambar*

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERACIÓN ]-----

1. *${prefix}add*
Agregue usuarios al grupo.
Aliases: -
Usage: *${prefix}add* 521xxxxxxxxxx

2. *${prefix}kick*
Eliminar miembros del grupo.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promocionar miembro para que se convierta en administrador.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Descender miembro de administrador.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Sacat el bot del grupo.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mencione a todos los miembros del grupo.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}nsfw*
Alternar el modo NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Cambiar icono de grupo.
Aliases: -
Usage: Enviar imágenes con subtítulo *${prefix}groupicon* o responde a las imágenes con una leyenda *${prefix}groupicon*.

9. *${prefix}antilink*
Alternar la función de enlace de grupo de tía.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Alternar la función de bienvenida.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Alternar la función de autoadhesivo. Cada imagen enviada se convertirá en una pegatina.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Alternar enlace anti-NSFW.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

13. *${prefix}mutegc*
Configure el grupo para que solo administradores envien mensajes.
Aliases: -
Usage: *${prefix}mutegc* enable/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Envía fotos de anime lascivo.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Envía hasta 5 imágenes lascivas de anime. (SOLAMENTE PREMIUM)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Envío de información doujinshi desde nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* code

4. *${prefix}nhdl*
Descargue doujin de nHentai como archivo PDF. (SOLAMENTE PREMIUM)
Aliases: -
Usage: *${prefix}nhdl* code

5. *${prefix}nekopoi*
Enviar el último enlace de vídeo Nekopoi.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Envía hasta 5 fotos fetiche. (SOLAMENTE PREMIUM)
Aliases: *mfetish*
Usage: *${prefix}multifetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

7. *${prefix}waifu18*
Envía fotos waifu NSFW aleatorias.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Envía fotos fetiche.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Descarga videos de Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Envía fotos de yuri al azar.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Envía avatares lascivos al azar.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Envía fotos de femdom al azar.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
Búsqueda nHentai.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Búsqueda de Nekopoi.
Aliases: -
Usage: *${prefix}nekosearch* query

15. *${prefix}cersex*
Historias de adultos al azar (indonesio).
Aliases: -
Usage: *${prefix}cersex*

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ DUEÑO ]-----
Hola propietarioヽ(・∀・)ﾉ!

1. *${prefix}bc*
Haz un mensaje genera para todos los grupos.
Aliases: -
Usage: *${prefix}bc* text

2. *${prefix}clearall*
Elimina todos los chats de la cuenta del bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Tome una captura de pantalla de la sesión desde la cuenta del bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Agregar / eliminar usuarios prohibidos.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Sal de todos los grupos.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evalúe el código JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Apagar bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Agregar / eliminar usuarios premium.
Aliases: -
Usage: *${prefix}premium* add/del @user

9. *${prefix}setstatus*
Pone cosas sobre mí.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

10. *${prefix}serial*
Verifique el número de serie del usuario.
Aliases: -
Usage: *${prefix}serial* user_serial

11. *${prefix}exif*
Ajusta tus stickers WM.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Silencia a todos los usuarios.
Aliases: -
Usage: Use *${prefix}mute* to mute and use *${prefix}mute* once again to unmute.

13. *${prefix}setname*
Cambia el nombre del bot. Máximo 25 caracteres.
Aliases: -
Usage: *${prefix}name* username

14. *${prefix}block*
Blockear Usuario.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

15. *${prefix}unblock*
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
