import express from 'express'
import mongoose from 'mongoose'
import funcionariosRoutes from './routes/funcionariosRoutes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', funcionariosRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/inventario_ti')
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor esta rodando na porta ${PORT}!`)
    })
})
.catch((error) => {
    console.log('Erro ao conectar na banco de dados MongoDB:', error)
})