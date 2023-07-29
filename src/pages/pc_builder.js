import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PcBuilder = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>PC Builder - Build Your Own Computer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" text-5xl text-center font-semibold mt-12">Build Your Own Computer</h1>
      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">CPU / Processor</h1>
        </div>
        <Link href="/pc_builder/Processor" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">Motherboard</h1>
        </div>
        <Link href="/pc_builder/Motherboard" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">RAM</h1>
        </div>
        <Link href="/pc_builder/RAM" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">Power Supply Unit</h1>
        </div>
        <Link href="/pc_builder/Power Supply Unit" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">Storage Device</h1>
        </div>
        <Link href="/pc_builder/Storage Device" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg shadow-md px-8 py-4 mt-5 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-xl font-semibold ml-4">Monitor</h1>
        </div>
        <Link href="/pc_builder/Monitor" className="btn btn-primary">
          Select
        </Link>
      </div>
      {/* selected items */}
      <div className="ms-24 mt-4">
        <div className="flex items-center">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/star-pc-12th-gen-i9-12900k-01-500x500.webp"
            alt=""
            height={40}
            width={40}
          />
          <h1 className="text-lg font-semibold ml-4">Intel Core i9-11900K</h1>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
