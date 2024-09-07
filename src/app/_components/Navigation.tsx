import React from 'react'
import Link from "next/link";
import Image from "next/image";
function Navigation() {
  return (
    <header className="sticky top-0 shadow w-full md:w-auto px-5 py-0.5 z-40 flex justify-between md:rounded-lg bg-secondary/20 backdrop-blur-md border-gradient border-gradient-primary only-bottom">
      <div className="container flex sm:flex-row justify-between items-center mx-auto py-2 px-4">
        <div className="hidden md:flex items-center text-2xl">
          <Link href="/" className="flex justify-center items-center gap-x-2">
          <Image src="" alt="logo" width={40} height={40} />
          <div className="no-underline hover:no-underline bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-2xl font-extrabold text-transparent lg:text-2xl">
            PolyGlotter
          </div>
          </Link>
        </div>
        <div className="md:block hidden">
          <Link href="/">
          <button className="bg-sky-400a mr-6 inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-6 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
              Explore
          </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation
