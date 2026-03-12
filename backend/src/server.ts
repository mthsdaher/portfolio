import cors from 'cors'
import express from 'express'
import { z } from 'zod'

const app = express()
const port = Number(process.env.PORT ?? 3001)

app.use(
  cors({
    origin: ['http://localhost:5173'],
  }),
)
app.use(express.json())

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must have at least 2 characters.'),
  email: z.string().trim().email('Please provide a valid email address.'),
  message: z
    .string()
    .trim()
    .min(20, 'Message must have at least 20 characters.'),
})

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true, service: 'portfolio-api' })
})

app.post('/api/contact', (req, res) => {
  const parsed = contactSchema.safeParse(req.body)

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      message: 'Validation failed.',
      errors: parsed.error.flatten().fieldErrors,
    })
  }

  return res.status(200).json({
    ok: true,
    message: 'Message received. I will get back to you soon.',
    data: parsed.data,
  })
})

app.listen(port, () => {
  console.log(`Portfolio API running on http://localhost:${port}`)
})
