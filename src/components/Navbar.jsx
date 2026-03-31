import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Heart, User, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const bagItems = useSelector((state) => state.bag?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const totalQty = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (cat) => activeCategory?.toLowerCase() === cat.toLowerCase();

  const categories = ["Men", "Accessories", "Home", "Tech"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-360 mx-auto px-4 lg:px-10">
        <div className="flex items-center h-18 gap-4 lg:gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-700 transition-colors">
              <ShoppingBag className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 hidden xl:block">
              SwiftStore
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 shrink-0">
            <Link
              to="/"
              className={`text-xs font-bold uppercase tracking-widest py-7 border-b-2 transition-colors ${
                !activeCategory
                  ? "text-indigo-600 border-indigo-600"
                  : "text-slate-700 border-transparent hover:text-indigo-600 hover:border-indigo-600"
              }`}
            >
              All
            </Link>

            {categories.map((item) => (
              <Link
                key={item}
                to={`/?category=${item.toLowerCase()}`}
                className={`text-xs font-bold uppercase tracking-widest py-7 border-b-2 transition-colors ${
                  isActive(item)
                    ? "text-indigo-600 border-indigo-600"
                    : "text-slate-700 border-transparent hover:text-indigo-600 hover:border-indigo-600"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="grow hidden md:block">
            <div className="relative group max-w-2xl mx-auto w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchQuery(value);

                  const params = new URLSearchParams();

                  if (activeCategory) {
                    params.set("category", activeCategory);
                  }

                  if (value) {
                    params.set("search", value);
                  }

                  navigate(`/?${params.toString()}`);
                }}
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg bg-slate-50 text-sm placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            {/* Profile */}
            <Link to="/profile" className="flex flex-col items-center group">
              <User className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-indigo-600 mt-1 uppercase hidden sm:block">
                Profile
              </span>
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="flex flex-col items-center group relative"
            >
              <Heart className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />

              {wishlistItems.length > 0 && (
                <span className="absolute -top-1.5 right-0.5 bg-red-500 text-white text-[10px] font-bold min-w-4.5 h-4.5 flex items-center justify-center rounded-full border border-white shadow-sm">
                  {wishlistItems.length}
                </span>
              )}

              <span className="text-[10px] font-bold text-slate-500 group-hover:text-indigo-600 mt-1 uppercase hidden sm:block">
                Wishlist
              </span>
            </Link>

            {/* Bag */}
            <Link
              to="/bag"
              className="flex flex-col items-center group relative"
            >
              <ShoppingBag className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />

              {totalQty > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[10px] font-bold min-w-4.5 h-4.5 flex items-center justify-center rounded-full border border-white shadow-sm">
                  {totalQty}
                </span>
              )}

              <span className="text-[10px] font-bold text-slate-500 group-hover:text-indigo-600 mt-1 uppercase hidden sm:block">
                Bag
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
