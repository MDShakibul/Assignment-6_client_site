import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero h-2/4 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/ryzen/ryzen-5-pro-4650g-02-500x500.webp"
            alt="Example Image"
            layout="responsive"
            width={400}
            height={400}
          />
          <div>
            <h1 className="lg:text-5xl text-3xl font-bold text-center lg:leading-normal ">Upgrade Now! <br /> 🎉 Limited Time Deal! 🎉</h1>
            <p className="py-6">
            Get ready to experience the ultimate in performance and power with our latest product lineup. 🔥 Do not miss this chance to upgrade your setup with the best-in-class components!
            </p>
            <button className="btn btn-accent">PC Build</button>
          </div>
        </div>
      </div>
      <h1 className=" text-5xl text-center font-semibold mt-12" >
      Featured Products
    </h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        <div>adas</div>
        <div>adas</div>
        <div>adas</div>
        <div>adas</div>
        <div>adas</div>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
