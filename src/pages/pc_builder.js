import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PcBuilder = () => {
  const product = useSelector((state) => state.addProduct);
  const handleConfirm = () => {
    //console.log(product);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Computer Build Complted',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <div className="container mx-auto">
      <Head>
        <title>PC Builder - Build Your Own Computer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" text-5xl text-center font-semibold mt-12">
        Build Your Own Computer
      </h1>
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
      {Object.keys(product?.Processor).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={product?.Processor?.image}
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-semibold ml-4">
                {product?.Processor?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.Processor?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

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
      {Object.keys(product?.Motherboard).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={product?.Motherboard?.image}
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-semibold ml-4">
                {product?.Motherboard?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.Motherboard?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

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
      {Object.keys(product?.RAM).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={product?.RAM?.image} alt="" height={40} width={40} />
              <h1 className="text-lg font-semibold ml-4">
                {product?.RAM?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.RAM?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

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

      {Object.keys(product?.Power_Supply_Unit).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={product?.Power_Supply_Unit?.image}
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-semibold ml-4">
                {product?.Power_Supply_Unit?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.Power_Supply_Unit?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

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
      {Object.keys(product?.Storage_Device).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={product?.Storage_Device?.image}
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-semibold ml-4">
                {product?.Storage_Device?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.Storage_Device?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

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
      {Object.keys(product?.Monitor).length ? (
        <div className="mx-24 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={product?.Monitor?.image}
                alt=""
                height={40}
                width={40}
              />
              <h1 className="text-lg font-semibold ml-4">
                {product?.Monitor?.name}
              </h1>
            </div>
            <h1 className="text-lg font-semibold ml-4 text-orange-500">
              BDT: {product?.Monitor?.price}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="card-actions justify-center my-8">
        <button
          className="btn btn-primary"
          disabled={
            !(
              Object.keys(product || {}).length === 6 &&
              Object.values(product || {}).every(
                (value) => Object.keys(value).length > 0
              )
            )
          }
          onClick={() => handleConfirm()}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
