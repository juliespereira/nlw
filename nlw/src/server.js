//servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require ('./pages')

//configurando o nunjucks (template engine)
const nunjucks = require ('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //guardar na memória desativado
})


server
//receber os dados do req.body (escondendo os dados na url)
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos(css, script, imagens)
.use(express.static("public")) //pegando as pastas do css
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) //ligando o servidor 

//console.log() --> printf
