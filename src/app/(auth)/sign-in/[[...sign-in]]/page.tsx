import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">AutoBiz</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        <SignIn />
      </div>
    </div>
  )
}
