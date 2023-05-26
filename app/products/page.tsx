import { FC } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductsProps {}

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  return response.json();
};

// This error form TypeScript
/* @ts-expect-error Server Component */
const Products: FC<ProductsProps> = async () => {
  const products: any = await getProducts();

  if (!products) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {products?.products?.map((product: any) => (
        <div className="flex w-full h-28" key={product?.id}>
          <div className="w-28 h-28 relative">
            <Image
              fill
              className="rounded-lg object-cover"
              src={product?.thumbnail}
              blurDataURL={product?.thumbnail}
              loading="lazy"
              placeholder="blur"
              alt="product"
            />
          </div>
          <div className="flex flex-col justify-around py-2 pl-4">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">
              {product?.title}
            </h5>
            <div className="text-gray-400 line-clamp-2">
              {product?.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
