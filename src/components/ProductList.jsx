import { DEFAULT_ITEMS } from "../data/items.js";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { PackageSearch } from "lucide-react";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const search = searchParams.get("search");

  const filteredProducts = DEFAULT_ITEMS.filter((item) => {
    const matchCategory = category
      ? item.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchSearch = search
      ? item.name.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-360 mx-auto px-4 lg:px-10 py-10">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center text-slate-500 py-20">
          <PackageSearch size={48} className="mb-4 opacity-20" />
          <p className="text-xl font-medium">No products found</p>
          <p className="text-sm">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
