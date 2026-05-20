import Link from "next/link";
import React from "react";

const Login = () => {
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

      {/* Right Side: Authentication Form Section */}
      <div className="flex w-full md:w-1/2 flex-col justify-center px-6 py-12 sm:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-md text-center">
          {/* Header Typography */}
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-2">
            Welcome Back to Wizbay
          </p>
          <h1 className="text-3xl md:text-4xl font-normal text-gray-800 tracking-tight mb-8">
            Log In to Your Account
          </h1>

          {/* Social Authentication Buttons */}
          <div className="space-y-3.5">
            {/* Google Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-400 bg-white px-4 py-3 text-sm font-normal text-gray-700 transition hover:bg-gray-50 focus:outline-none">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.415 0-6.191-2.783-6.191-6.2s2.776-6.2 6.191-6.2c1.5 0 2.87.532 3.957 1.417l3.073-3.074C18.855 2.152 15.74 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.897 0 10.874-4.225 10.874-11.24 0-.712-.08-1.396-.188-1.955H12.24z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Apple Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-400 bg-white px-4 py-3 text-sm font-normal text-gray-700 transition hover:bg-gray-50 focus:outline-none">
              <svg
                className="h-4 w-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative bg-white px-4 text-xs font-normal text-gray-500 tracking-wide">
              Log in via Email
            </span>
          </div>

          {/* Email Login Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-left space-y-5"
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

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-normal text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  className="text-xs text-gray-500 hover:text-black underline underline-offset-2"
                >
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-none border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 transition focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="w-full rounded-none bg-[#9CA3AF] py-3.5 text-sm font-medium text-white transition hover:bg-[#8B939F] focus:outline-none pt-4"
            >
              Log In
            </button>
          </form>

          {/* Footer Navigation Link */}
          <p className="mt-8 text-sm text-gray-600">
            Don't have an Account?{" "}
            <Link
              href="/auth/register"
              className="text-gray-800 underline underline-offset-2 hover:text-black"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
