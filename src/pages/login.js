import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import RootLayout from '@/components/Layouts/RootLayout';
import { signIn } from 'next-auth/react';
import Head from 'next/head';

const Login = () => {
  return (
    <>
<Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <button className="btn btn-primary mb-4" onClick={() => signIn("google",{
            callbackUrl:"https://pc-shop-tau.vercel.app/"
          })}>
        <FcGoogle className="w-6 h-6 mr-2" />
        Sign in with Google
      </button>
      <button className="btn btn-primary" onClick={() => signIn("github",{
            callbackUrl:"https://pc-shop-tau.vercel.app/"
          })}>
        <FaGithub className="w-6 h-6 mr-2"/>
        Sign in with GitHub
      </button>
    </div>
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  
