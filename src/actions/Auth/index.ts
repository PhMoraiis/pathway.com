import prisma from '@/database'
import { env } from '@/lib/env'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
// import Resend from 'next-auth/providers/resend'
import Nodemailer from 'next-auth/providers/nodemailer'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
  },
  providers: [
    // Resend({
    //   server: {
    //     host: env.EMAIL_SERVER_HOST,
    //     port: env.EMAIL_SERVER_PORT ? Number(env.EMAIL_SERVER_PORT) : undefined,
    //     auth: {
    //       user: env.EMAIL_SERVER_USER,
    //       pass: env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: env.EMAIL_FROM,
    // }),
    Nodemailer({
      server: env.EMAIL_SERVER_MAILER,
      from: env.EMAIL_FROM_MAILER,
    }),
    Github,
    Google
  ],
})
