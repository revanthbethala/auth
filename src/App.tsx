import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

export default function App() {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="w-full flex justify-end p-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <main className="text-center">
        <SignedIn>
          <h1 className="text-3xl font-bold mb-4">
            Welcome, {user?.firstName ?? 'User'} 👋
          </h1>
          <p className="text-lg text-gray-700">
            You are now logged in to the application.
          </p>
        </SignedIn>

        <SignedOut>
          <h1 className="text-2xl font-semibold mb-2">Welcome to the App</h1>
          <p className="text-gray-600">Please sign in to continue.</p>
        </SignedOut>
      </main>
    </div>
  );
}
