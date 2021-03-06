const request = require('request'); // Mais modulos, será que nunca vou cansar de usar-los?
const fs = require('fs');
const dm = require('@open-wa/wa-decrypt');
const multer = require('multer');
const upload = multer();
module.exports = {
    addcandidate,
    voteadapter,
    getpoll,
    adminpollreset,
    readJsonFile,
    saveJsonFile
} // A module exports "ativa" os modulos como addCandidate

function voteadapter(kill, message, pollfile, voterslistfile) { // fique atento ao que está apos o function, isso ja ira te definir o que é
    if (isvoted(message, voterslistfile)) {
        bocchi.reply(message.chatId, 'Qué feo emm, tratando de eludir el voto para votar dos veces? Te estoy vigilando!', message.id, true);
        return;
    }
    let data = readJsonFile(pollfile)
    if (data['candis'] === 'null') {
        bocchi.reply(message.chatId, '⭐️ Bueno, no tenemos otra opción ... ¿Podría el creador de la encuesta olvidarse de publicar?', message.id, true);
        return;
    }
    let arr = data['candis']
    for (let i = 0; i < arr.length; i++) {
        if (message.body.includes((i + 1)
                .toString())) {
            addvote(kill, message, i, pollfile);
            return;
        }
    }
    bocchi.reply(message.chatId, 'Hmm, este voto me parece incorrecto, lo usaste bien?', message.id, true);
}
async function addcandidate(kill, message, candi, pollfile, voterslistfile) {
    let data = readJsonFile(pollfile)
    if (data['candis'] === 'null') {
        let cd = {
            name: candi,
            votes: 0
        }
        delete data['candis'];
        data['candis'] = [cd, ]
    } else {
        if (data['candis'].length >= 10) {
            bocchi.reply(message.chatId, '🎯️El número máximo de candidatos que puedo agregar es 10, lo siento.', message.id, true);
            return;
        }
        let cd = {
            name: candi,
            votes: 0
        };
        data['candis'].push(cd);
    }
    saveJsonFile(pollfile, data)
    bocchi.reply(message.chatId, `🎯️ ¡OK! Se agregó el candidato $ {candi}!`, message.id, true);
}

function addvote(kill, message, num, pollfile, voterslistfile) {
    let data = readJsonFile(pollfile)
    let vts = data['candis'][num]['votes'];
    vts = vts + 1;
    delete data['candis'][num]['votes'];
    data['candis'][num]['votes'] = vts
    saveJsonFile(pollfile, data)
    let op;
    op = 'Votaste por ' + data['candis'][num]['name'] + '\n\n*En la votación:* ' + data['title'] + '\n\n';
    let ls = '';
    let arr = data['candis'];
    for (let i = 0; i < arr.length; i++) {
        let cd = arr[i];
        ls = ls + ((i + 1)
            .toString()) + ')' + cd['name'] + ' : [' + cd['votes'] + ' Votos] \n\n';
    }
    op = op + ls;
    op = op + '\nSi quiere votar, use */vote <número de candidato>* , por ejemplo:\n\n*/Vote 1* .';
    bocchi.reply(message.chatId, op, message.id, true);
    addvotedlog(message);
}

function isvoted(message, voterslistfile) {
    let data = readJsonFile(voterslistfile)
    return data['list'].includes(message.author);
}

function addvotedlog(message) {
    let data = readJsonFile(voterslistfile)
    data['list'].push(message.author)
    saveJsonFile(voterslistfile, data);
}

function getpoll(kill, message, pollfile, voterslistfile) {
    let data = readJsonFile(pollfile)
    let op = '';
    if (data['candis'] == 'null') {
        op = '*Titulo* : ' + data ['title'] + '\n\nPero se olvidaron de poner opciones de voto...\n\nIntenta agregar el tuyo con */ins <opcion>* , ejemplo:\n\n*/Ins Samu* .';
    } else {
        op = '*Titulo* : ' + data ['title'] + '\n\n';
        let ls = '';
        let arr = data['candis'];
        for (let i = 0; i < arr.length; i++) {
            let cd = arr[i];
            ls = ls + (i + 1)
                .toString() + ')' + cd['name'] + ' : [' + cd['votes'] + ' Votes] \n';
        }
        op = op + ls;
        op = op + '\nSi quiere votar, use */vote <número de candidato>* , por ejemplo:\n\n*/Vote 1* .';
    }
    bocchi.reply(message.chatId, op, message.id, true)
}
async function adminpollreset(kill, message, polltitle, pollfile, voterslistfile) {
        var datetime = new Date();
        try {
            saveJsonFile('poll_logs.json', readJsonFile(pollfile))
        } catch (e) {
            console.log('El voto no existe, crearé uno...')
        }
        let base = {
                title: polltitle,
                polldate: datetime.toISOString()
                    .slice(0, 10),
                candis: 'null'
            }
        saveJsonFile(pollfile, base)
        bocchi.reply(message.chatId, `*⭐️ *Se inició la votación para ${polltitle}*\n\n ❤ Agregue opciones de elección usando */ins <nombre de la opcion>* .\n\nVote con */vote <número de candidato>*`, message.id);
        let data = {
            list: ['testentry']
        }
        saveJsonFile(voterslistfile, data);
}
var configFiles = './lib/media/poll/' // Localização dos arquivos de votos, não mude a menos que necessario

 function readJsonFile(filename) {
    filename=configFiles+filename;
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

function saveJsonFile(filename, object) {
    filename = configFiles + filename;
    var jsonContent = JSON.stringify(object);
    fs.writeFile(filename, jsonContent, 'utf8', function(err) {
        if (err) {
            console.log('Oops, dio error en' + filename);
            return console.log(err);
        }
    });
}
async function isGroupAdmin(kill, message, author) {
    let value = await bocchi.getGroupAdmins(message.chatId)
    return value.toString()
        .includes(message.author)
}
