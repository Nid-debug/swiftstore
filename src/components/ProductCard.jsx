import { Heart, Star, ShoppingBag, Trash2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { useMemo } from "react";
import { wishlistActions } from "../store/wishlistSlice";

const ProductCard = ({ product, hideCartButton = false }) => {
  if (!product) return null;

  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag?.items || []);

  const elementFound = useMemo(
    () => bagItems.some((item) => item.id === product.id),
    [bagItems, product.id],
  );

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(product));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(product.id));
  };

  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleWishlist = () => {
    dispatch(wishlistActions.toggleWishlist(product));
  };

  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={handleWishlist}
          className="absolute top-1 right-1 p-2 bg-white rounded-full shadow transition-all duration-200 active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-all duration-200 ${
              isWishlisted
                ? "text-red-500 fill-red-500"
                : "text-slate-400 fill-transparent hover:text-red-500 hover:fill-red-500"
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col grow space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] text-slate-400 font-semibold uppercase truncate min-w-0 flex-1">
            {product.category}
          </p>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 shrink-0">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span className="text-[10px] font-semibold text-slate-700">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-slate-800 truncate leading-tight">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-1">
          {/* Current Price */}
          <span className="text-lg font-bold text-slate-900 flex items-center -space-x-0.5">
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              className="text-sm mt-0.5"
            />
            <span>{product.price.toLocaleString("en-IN")}</span>
          </span>

          {/* Original Price */}
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through flex items-center -space-x-1">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="text-sm mt-0.5"
              />
              {product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}

          {/* Discount % */}
          {product.originalPrice && (
            <span className="text-xs font-semibold text-green-600">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              % OFF
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex grow" />

        {/* Add to Cart Button */}
        {!hideCartButton &&
          (elementFound ? (
            <button
              className="w-full mt-2 py-2.5 rounded-xl border border-red-500 text-red-500 text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-red-100 transition-all duration-200 active:scale-95 hover:cursor-pointer"
              onClick={handleRemoveFromBag}
            >
              <Trash2 className="w-4 h-4" />
              Remove from Bag
            </button>
          ) : (
            <button
              className="w-full mt-2 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all duration-200 active:scale-95 shadow-md hover:cursor-pointer"
              onClick={handleAddToBag}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
