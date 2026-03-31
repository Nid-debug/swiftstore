import { useSelector } from "react-redux";
import { HeartCrack } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const navigate = useNavigate();

  const handelWishButton = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="relative flex flex-col items-center justify-center p-15 my-6 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-indigo-400 blur-2xl opacity-20 rounded-full"></div>
              <div className="relative bg-white p-4 rounded-full shadow-sm border border-indigo-100">
                <HeartCrack
                  size={52}
                  strokeWidth={1.2}
                  className="text-indigo-600"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Wishlist is empty
            </h3>

            <p className="text-slate-500 mt-2 max-w-xs text-center leading-relaxed text-sm">
              Save items you love here! They'll be waiting for you.
            </p>

            <button
              className="mt-8 px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-md shadow-indigo-200/50 transition-all active:scale-95 text-sm"
              onClick={handelWishButton}
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard product={item} hideCartButton />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
