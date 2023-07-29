import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
const Products = () => {
  return (
    <div className="card card-normal bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/star-pc/ryzen/ryzen-5-pro-4650g-02-500x500.webp"
          alt="Example Image"
          layout="responsive"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Intel Core i9-11900K
          <div className="badge badge-secondary">Processor</div>
        </h2>
        <Rating value={5} />
        <div class="flex justify-between">
          <div class="flex-item text-orange-500 text-xl font-medium">
            <span className="flex">
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
          </div>
          <div class="flex-item">
            <div className="badge badge-secondary">{true ? 'In Stock' : 'Out of Stock'}</div>
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link href={`#`} className="btn btn-primary">
            More Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
