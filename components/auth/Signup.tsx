import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-white font-sans antialiased">
      {/* Left Side: Editorial Image Section */}
      <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-screen bg-[#E5E4E2]">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
          alt="Wizbay Editorial"
          className="h-full w-full object-cover object-center mix-blend-multiply brightness-[0.95]"
        />
        {/* Brand Logo Overlay */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <span className="text-2xl md:text-3xl font-serif tracking-widest text-white uppercase drop-shadow-sm">
            Wizbay
          </span>
        </div>
      </div>

      {/* Right Side: Registration Form Section */}
      <div className="flex w-full md:w-1/2 flex-col justify-center px-6 py-12 sm:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-md text-center">
          {/* Header Typography */}
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-2">
            Welcome to Wizbay
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800 tracking-tight mb-8">
            Free, 1-Step Registration
          </h1>

          {/* Social Authentication Buttons */}
          <div className="space-y-3.5">
            {/* Google Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-400 bg-white px-4 py-3 text-sm font-normal text-gray-700 transition hover:bg-gray-50 focus:outline-none">
              {/* Official Google Multi-color G Logo */}
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" width="100%" height="100%">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Apple Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-400 bg-white px-4 py-3 text-sm font-normal text-gray-700 transition hover:bg-gray-50 focus:outline-none">
              {/* Official Clean Apple Silhouette Logo */}
              <svg className="h-4 w-4 shrink-0 fill-black" viewBox="0 0 24 24" width="100%" height="100%">
                <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.06 0-1.4-.65-2.61-.65-1.22 0-1.6.63-2.61.65-1.04.02-2.21-.99-3.2-1.96-2.02-1.98-3.55-5.58-3.55-8.97 0-5.38 3.48-8.23 6.75-8.23 1.04 0 2.02.39 2.67.39.63 0 1.76-.43 2.99-.43 1.28 0 2.44.47 3.23 1.27-3.92 1.62-3.3 6.95.42 8.47-1.12 2.65-2.45 5.3-4.02 6.57zM14.63 2.11c1.23-1.5 2.05-3.56 1.82-5.61-1.76.07-3.9 1.18-5.16 2.67-1.1 1.27-2.06 3.38-1.8 5.38 1.96.15 3.98-1.02 5.14-2.44z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative bg-white px-4  text-[16px] font-normal text-gray-500 tracking-wide">
              Sign up via Email
            </span>
          </div>

          {/* Email Input Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-left space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-normal text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-none border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 transition focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="w-full rounded-none bg-[#9CA3AF] py-3.5 text-lg font-normal text-white transition hover:bg-[#8B939F] focus:outline-none"
            >
              Invite Me
            </button>
          </form>

          {/* Footer Navigation Link */}
          <p className="mt-8 text-sm text-gray-600">
            Already have an Account?{" "}
            <Link  
              href="/auth/login"
              className="text-gray-800 underline underline-offset-2 hover:text-black"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;