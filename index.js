import express from 'express'

const app = express()
app.use(express.json())

const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

app.get('/', (req, res) => {
    res.json({mensagem: "Rota principal funcionando"})
})