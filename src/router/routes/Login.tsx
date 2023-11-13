import AuthForm from '@/components/AuthForm.tsx'

export default function Login() {
  return (
    <div
      className="container relative grid h-screen flex-col items-center justify-center
      lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <img
          className="absolute bottom-0 left-0 right-0 top-0 inline-flex h-full w-full object-cover"
          src="/images/bg.jpg"
          alt=""
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              “Life isn’t about finding yourself. Life is about creating
              yourself.” -
            </p>
            <footer className="text-sm">George Bernard Shaw</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter email below to enter in your account
            </p>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
