"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  // Simulate API call (replace with actual authentication logic)
  setTimeout(() => {
    setIsLoading(false);
    router.push('/dashboard'); // Navigate to dashboard after loading
  }, 1500);
};


  return (
    <>
      <Head>
        <title>Login | Your Awesome App</title>
        <meta name="description" content="Login to access your account" />
      </Head>

      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        {/* Image Section - Hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative">
          <Image
            src="/create account.avif" // Replace with your image path
            alt="Decorative background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-12">
            <div>
              <h2 className="text-black text-4xl font-bold mb-4">Welcome Back</h2>
              <p className="text-blaack/40 text-lg max-w-md">
                Discover amazing features that will transform the way you work.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8 md:hidden">
              <h1 className="text-3xl font-bold text-gray-800">Your Logo</h1>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign in to your account</h1>
              <p className="text-gray-600">
                Or{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                  start your free trial
                </a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                      Forgot?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </>
                    ) : 'Sign in'}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm mb-6">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

            {/* Social Sign-In */}
<div className="mb-6">
  <div className="flex gap-4">
    <button
      onClick={() => console.log("Google login")}
      type="button"
      className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <path
          fill="#EA4335"
          d="M24 9.5c3.4 0 6.4 1.1 8.9 3.2l6.6-6.6C35.1 2.2 29.9 0 24 0 14.6 0 6.5 5.8 2.4 14.1l7.8 6C12.4 13.5 17.7 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.5c-.5 2.8-2.1 5.2-4.5 6.8v5.6h7.3c4.3-4 6.8-9.8 6.8-16.7z"
        />
        <path
          fill="#FBBC05"
          d="M10.2 28.1c-1.2-3.5-1.2-7.2 0-10.7V11.4H2.4C-.8 16.4-.8 23.6 2.4 28.6l7.8-6.1z"
        />
        <path
          fill="#4285F4"
          d="M24 48c6.5 0 12-2.1 16-5.8l-7.3-5.6c-2.2 1.5-5 2.3-8.7 2.3-6.3 0-11.6-4-13.6-9.4l-7.8 6C6.5 42.2 14.6 48 24 48z"
        />
      </svg>
      Google
    </button>

    <button
      onClick={() => console.log("Facebook login")}
      type="button"
      className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.04h3.127V8.412c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.666h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.326C24 .598 23.403 0 22.675 0z" />
      </svg>
      Facebook
    </button>
  </div>
</div>

              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium" onClick={()=> router.push('/signin')}>
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}