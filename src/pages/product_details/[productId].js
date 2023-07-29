import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetail from "@/components/UI/ProductDetail";
import Rating from "@/components/UI/Rating";
import Head from "next/head";
import Image from "next/image";

const ProductDetails = ({ product, id }) => {
  console.log(id)
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
        <div className="w-[50%]">
          <Image
            src={product?.image}
            alt="Example Image"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold text-blue-400">
          {product?.productName}
            <div className="badge badge-secondary">{product?.category}</div>
          </h1>

          <p className="text-md">
            Description: <span className="ms-2">{product?.description}</span>
          </p>
          <p className="text-md">Key Features:</p>
          <ul className="list-disc space-y-1 text-md ms-16 ">
            {product?.keyFeature?.split(",").map((item, index) => (
              <li key={index} className="mb-2">
                {item.trim()}
              </li>
            ))}
          </ul>
          <div className="flex">
            <p className="text-md me-2">Individual Rating: </p>
            <Rating value={product?.individualRating} />
          </div>
          <div className="flex">
            <p className="text-md me-2">Average Rating: </p>
            <Rating value={product?.averageRating} />
          </div>
          <p className="text-md">
            Status:{" "}
            <span className="ms-2">{product?.status ? "In Stock" : "Out of Stock"}</span>
          </p>

          <p className="text-4xl">
            <span className="ms-2">
              <span className="flex text-blue-400">
                {product?.price}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-currency-taka"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <circle cx="16.5" cy="15.5" r="1" />{" "}
                  <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />{" "}
                  <path d="M8 11h6" />{" "}
                </svg>
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-7xl w-[80%] mx-auto">
        <h1 className="font-semibold text-3xl mb-4 ">Reviews</h1>
        {product?.review?.length > 0 &&
          product?.review.map((comment, index) => (
            <div key={index}>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src="https://www.w3schools.com/w3images/avatar2.png" alt="" width={200} height={200} layout="responsive"/>
                  </div>
                </div>
                <div className="chat-bubble">
                {comment?.body}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* <ProductDetail product={product}/> */}
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://product-management-lake.vercel.app/api/v1/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://product-management-lake.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data?.data,
      id: params.productId
    },
  };
};
