import Image from "next/image";
import Rating from "./Rating";

const ProductDetails = () => {
  const details = "8 cores, 16 threads, 3.50 GHz base clock";
  const review = [
    {
        "body":"This processor is a beast!" 
    },
    {
        "body":"This processor is a sdfsdfsd!" 
    }
  ]
  return (
    <>

    
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <div className="w-[50%]">
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/star-pc/ryzen/ryzen-5-pro-4650g-02-500x500.webp"
          alt="Example Image"
          layout="responsive"
          width={300}
          height={300}
        />
      </div>
      <div className="w-[50%] space-y-3">
        <h1 className="text-3xl font-semibold text-blue-400">
          Intel Core i9-11900K
          <div className="badge badge-secondary">Processor</div>
        </h1>

        <p className="text-md">
          Description: <span className="ms-2">dfsdfsd</span>
        </p>
        <p className="text-md">
          Key Features:
        </p>
        <ul className="list-disc space-y-1 text-md ms-16 ">
          {details.split(",").map((item, index) => (
            <li key={index} className="mb-2">
              {item.trim()}
            </li>
          ))}
        </ul>
        <div className="flex">
          <p className="text-md me-2">Individual Rating: </p>
          <Rating value={3} />
        </div>
        <div className="flex">
          <p className="text-md me-2">Average Rating: </p>
          <Rating value={3} />
        </div>
        <p className="text-md">
        Status: <span className="ms-2">{true ? 'In Stock' : 'Out of Stock'}</span>
        </p>

        <p className="text-4xl"><span className="ms-2">

          <span className="flex text-blue-400">
              1500
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-taka"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        {review?.length > 0 && review.map((comment, index) => (
          <div key={index} className="gap-3 items-center mb-5">
            <p>#{index+1}: {comment?.body}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default ProductDetails;
