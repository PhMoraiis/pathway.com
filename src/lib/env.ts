import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_RESEND_KEY: z.string(),
  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.string(),
  EMAIL_FROM: z.string(),
  EMAIL_SERVER_MAILER: z.string(),
  EMAIL_FROM_MAILER: z.string(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
