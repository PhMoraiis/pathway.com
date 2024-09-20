import { z } from 'zod'

export default interface IUser {
  id: string
  name: string
  email: string
  password: string
}

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(12)
    .regex(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}/,
      {
        message:
          'Password must contain at least 12 characters, one uppercase letter, one lowercase letter, one number and one special character',
      }
    ),
})
