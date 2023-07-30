import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { addProductInBuilder } from "@/redux/features/addProductSlice";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';

const Products = ({product, isDetailsButton}) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const productInfo = {
    category: product?.category,
    image: product?.image,
    productname: product?.productName,
    price: product?.price,
  }

  /* dispatch(addProductInBuilder(productInfo)) */
  const handleAddBuilder = () => {
    dispatch(addProductInBuilder(productInfo));
    router.push('/pc_builder');
  }
  return (
    <div className="card card-normal bg-base-100 shadow-xl">
      <figure>
        <Image
          src={product?.image}
          alt="Example Image"
          layout="responsive"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {product?.productName}
        </h2>
          <div className="badge badge-secondary">{product?.category}</div>
        <Rating value={product?.averageRating} />
        <div className="flex justify-between">
          <div className="flex-item text-orange-500 text-xl font-medium">
            <span className="flex">
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
          </div>
          <div className="flex-item">
            <div className="badge badge-secondary">{product?.status ? 'In Stock' : 'Out of Stock'}</div>
          </div>
        </div>
        <div className="card-actions justify-center">
        {
          isDetailsButton ? 
          <Link href={`/product_details/${product?.id}`} className="btn btn-primary">
            More Detail
          </Link>
          :
          <button className="btn btn-primary" onClick={() => handleAddBuilder()}>
          Add To Builder
          </button>
        }
        </div>
      </div>
    </div>
  );
};

export default Products;
