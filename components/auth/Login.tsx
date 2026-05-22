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
            <Link href="/">Wizbay</Link>
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
              <svg className="h-5 w-5" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.215 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.196 0-9.625-3.327-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.094 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>

              <span className="cursor-pointer">Continue with Google</span>
            </button>

            {/* Apple Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-400 bg-white px-4 py-3 text-sm font-normal text-gray-700 transition hover:bg-gray-50 focus:outline-none">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.414 2.063-1.243 2.77-.829.707-1.83 1.06-3.004 1.06-.048-1.016.318-1.94 1.097-2.77.39-.415.885-.76 1.486-1.036.6-.276 1.156-.428 1.664-.456zm4.271 16.126c-.366.853-.799 1.64-1.298 2.359-.682.976-1.239 1.652-1.669 2.028-.666.618-1.38.935-2.143.951-.547 0-1.208-.156-1.98-.47-.774-.313-1.485-.47-2.134-.47-.681 0-1.41.157-2.187.47-.778.314-1.404.479-1.88.495-.731.032-1.462-.293-2.195-.975-.468-.408-1.05-1.108-1.748-2.1-.748-1.057-1.362-2.283-1.841-3.678-.512-1.507-.768-2.966-.768-4.378 0-1.618.35-3.013 1.048-4.182.549-.94 1.28-1.68 2.195-2.222.914-.541 1.903-.818 2.966-.834.585 0 1.352.181 2.303.542.95.362 1.56.543 1.828.543.203 0 .89-.214 2.06-.64 1.105-.393 2.037-.557 2.798-.494 2.062.167 3.61.98 4.644 2.442-1.844 1.118-2.758 2.684-2.742 4.696.016 1.568.585 2.873 1.706 3.913.508.479 1.074.85 1.7 1.11-.137.398-.282.78-.438 1.144z" />
              </svg>

              <span className="cursor-pointer">Continue with Apple</span>
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
              className="w-full cursor-pointer rounded-none bg-[#9CA3AF] py-3.5 text-sm font-medium text-white transition hover:bg-[#8B939F] focus:outline-none pt-4"
            >
              Log In
            </button>
          </form>

          {/* Footer Navigation Link */}
          <p className="mt-8 text-sm text-gray-600">
            Don&apos;t have an Account?{" "}
            <Link
              href="/auth/register"
              className="text-gray-800  underline underline-offset-2 hover:text-black"
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
