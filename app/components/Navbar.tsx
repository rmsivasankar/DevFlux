import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth, signOut, signIn} from '@/auth'

const Navbar = async() => {
  const session = await auth();

  return (
    <header className='px-3 py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
            <h1 className="text-2xl font-bold">DevFlux</h1>
        </Link>

        <div className="flex items-center gap-5">
            {session && session?.user ? (
                <>
                    <Link href="/startup/create">
                        <span className='font-semibold text-sky-300'>Create</span>        
                    </Link>
                    <form action={ async() => { 
                        "use server";
                        await signOut({ redirectTo: "/" });
                    }}>
                        <button type='submit' className='font-semibold text-red-400'>
                            Logout
                        </button>
                    </form>

                    <Link href={`/user/${session?.id}`}>
                        <span>{session?.user?.name}</span>
                    </Link>
                </>
            ) : (
                <form action={ async() => { 
                    "use server";
                    await signIn('github')}}>
                    <button type='submit'>
                        Login
                    </button>
                </form>
            )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
