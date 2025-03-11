import { Link } from "@inertiajs/react";
import CurrencyFormatter from "../Core/CurrencyFormatter";

const ProductItem = ({ product }) => {
  return (
    <div className="relative group">
      <img
        alt={product.name}
        src="https://placehold.co/600x400"
        className="object-cover w-full bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={route("product.show", product.slug)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-blue-500">{product.category.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          <CurrencyFormatter amount={product.price} />
        </p>
      </div>
    </div>
  );
};
export default ProductItem;
