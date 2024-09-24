'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Ban, Check, Github, MailIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'
import { GoogleIcon } from '@/components/google-icon'

export default function Auth() {
  const form = useForm()
  const { toast } = useToast()

  const handleSubmit = form.handleSubmit(async data => {
    try {
      await signIn('nodemailer', {
        email: data.email,
        redirect: false,
      })
      console.log(data)

      toast({
        title: 'Magic link sent',
        description:
          'We sent you an email for the magic link login. Please check your inbox.',
        variant: 'success',
        action: <Check />,
      })

      form.reset()
    } catch (error) {
      toast({
        title: 'Error sending magic link',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
        action: <Ban />,
      })
    }
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>
            Choose your preferred method to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="magic-link" onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  autoFocus
                  autoComplete="email"
                  {...form.register('email')}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" form="magic-link" className="w-full mb-2">
            <MailIcon className="mr-2 h-4 w-4" /> Sign in with Magic Link
          </Button>
          <Button
            onClick={() => signIn('github')}
            variant="outline"
            className="w-full mb-2"
          >
            <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
          </Button>
          <Button
            onClick={() => signIn('google')}
            variant="outline"
            className="w-full"
          >
            <GoogleIcon />
            Sign in with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
