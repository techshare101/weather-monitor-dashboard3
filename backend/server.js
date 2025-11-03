import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ 
    message: 'weather monitor dashboard3 API is online',
    forged_by: 'Forge Orchestra',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

app.listen(PORT, () => {
  console.log(`🚀 weather monitor dashboard3 API running on port ${PORT}`)
})
