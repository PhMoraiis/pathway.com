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
import { ArrowLeft, Ban, Check, Github, LoaderPinwheel, WandSparkles } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'
import { GoogleIcon } from '@/components/google-icon'
import { Separator } from '@/components/ui/separator'
import { PathwayLogo } from '@/components/pathway-logo'
import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const magicLinkSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
})

export default function Auth() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(magicLinkSchema),
  })
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmitEmail = handleSubmit(async data => {
    try {
      await signIn('nodemailer', {
        email: data.email,
        redirect: false,
      })

      toast({
        title: 'Magic link sent',
        description:
          'We sent you an email for the magic link login. Please check your inbox.',
        variant: 'success',
        action: <Check />,
      })

      // @ts-ignore
      document.getElementById('magic-link').reset()
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
    <div className="min-h-screen bg-zinc-100 relative">
      <Button
        onClick={() => router.push('/')}
        variant="ghost"
        className="absolute top-4 left-4 rounded-2xl gap-2 hover:bg-zinc-200"
        aria-label="Go to home page"
      >
        <ArrowLeft /> Home
      </Button>
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <Card className="w-full max-w-md border-none shadow-none bg-zinc-100">
          <CardHeader className="space-y-1">
            <div className="flex justify-start mb-6">
              <PathwayLogo />
            </div>
            <CardTitle className="text-3xl font-semibold">
              Enter in Pathway
            </CardTitle>
            <CardDescription className="text-md">
              Take the first step towards true financial freedom and success.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form id="magic-link" onSubmit={handleSubmitEmail}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-md font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="ada.lovelace@example.com"
                  type="email"
                  required
                  autoFocus
                  autoComplete="email"
                  {...register('email')}
                />
              </div>
              <Button
                disabled={!isDirty || !isValid || isSubmitting}
                type="submit"
                className="w-full mt-4 gap-4"
              >
                {isSubmitting ? (
                  <LoaderPinwheel size={22} className="animate-spin" />
                ) : (
                  <>
                    Send Magic Link
                    <WandSparkles className="mr-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            <Separator />
            <div className="space-y-2">
              <Button
                onClick={() => signIn('github')}
                variant="outline"
                className="w-full"
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
              <Button
                onClick={() => signIn('google')}
                variant="outline"
                className="w-full"
              >
                <GoogleIcon />
                Continue with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex">
            <p className="text-sm text-muted-foreground">
              By signing in, you agree to our{' '}
              <Link
                className="text-blue-600 hover:underline duration-200"
                href={'/terms'}
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                className="text-blue-600 hover:underline duration-200"
                href={'/privacy'}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
