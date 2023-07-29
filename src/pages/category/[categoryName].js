import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";
import Head from "next/head";

const CategoryProducts = ({ product, category }) => {
  return (
    <div>
    <Head>
        <title>{category} Price</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=" text-5xl text-center font-semibold mt-12">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 w-full sm:w-3/4 md:w-[80%] mx-auto">
        {product?.map((item, index) => (
          <Product key={index} product={item} isDetailsButton = {true}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];

  const paths = categories.map((category) => ({
    params: { categoryName: category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { categoryName } = params;
  const res = await fetch(
    `https://product-management-lake.vercel.app/api/v1/products?category=${categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
      category: categoryName,
    },
  };
};
