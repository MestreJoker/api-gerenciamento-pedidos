import express from 'express'
import pedidoRoutes from './src/routes/pedidoRoutes.js'

const app = express()
app.use(express.json())
app.use(pedidoRoutes)

const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

app.get('/', (req, res) => {
    res.json({mensagem: "Rota principal funcionando"})
})