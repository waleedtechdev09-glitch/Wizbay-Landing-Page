import Link from "next/link";
import React from "react";

const WithoutAuth = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between bg-black text-white font-sans antialiased selection:bg-white/20">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Note: Replace this placeholder URL with your actual image path asset
          backgroundImage: `url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Dark Vignette Overlay to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto flex w-full max-w-[440px] flex-col items-center px-6 text-center">
        {/* Brand Header */}
        <header className="mb-8 select-none">
          <h1 className="text-3xl font-serif tracking-[0.2em] uppercase text-white drop-shadow-sm md:text-4xl">
            <Link href="/">WIZBAY</Link>
          </h1>
          <p className="mt-4 text-[10px] font-medium tracking-[0.15em] uppercase text-white/90 md:text-[11px]">
            Luxury Living. Designer Style. Exclusive Deals.
          </p>
        </header>

        {/* Hero Text */}
        <h2 className="mb-8 text-4xl font-normal tracking-tight text-white md:text-5xl">
          Members Only.
        </h2>

        {/* Authentication Buttons Group */}
        <div className="w-full space-y-3.5">
          {/* Apple Authentication Button */}
          <button className="flex w-full items-center justify-center gap-3 rounded-none bg-white px-5 py-3.5 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.99]">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z" />
            </svg>
            <span className="cursor-pointer">Continue with Apple</span>
          </button>

          {/* Google Authentication Button */}
          <button className="flex w-full items-center justify-center gap-3 rounded-none bg-white px-5 py-4 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.99]">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
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
            <span className="cursor-pointer">Continue with Google</span>
          </button>

          {/* Email Authentication Button */}
          <button className="flex w-full items-center justify-center gap-3 rounded-none bg-white px-5 py-3.5 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.99]">
            <svg
              className="h-4 w-4 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="cursor-pointe">Continue with Email</span>
          </button>

          {/* Guest Button */}
          <button className="w-full cursor-pointer border border-white bg-black/60 px-5 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-black/80 active:scale-[0.99]">
            Continue as a Guest
          </button>
        </div>
      </div>

      {/* Footer Navigation Area */}
      <footer className="relative  w-full py-6 text-center select-none">
        <p className="text-xs tracking-wide text-white/80">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="font-medium text-white   hover:text-neutral-300"
          >
            Log in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default WithoutAuth;
