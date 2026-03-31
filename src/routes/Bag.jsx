import { useSelector, useDispatch } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.bag?.items || []);

  const navigate = useNavigate();

  const handleBagButton = () => {
    navigate("/");
  };

  const handleIncrease = (id) => {
    dispatch({ type: "bag/increaseQuantity", payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: "bag/decreaseQuantity", payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "bag/removeFromBag", payload: id });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Your Bag</h1>

        {cartItems.length === 0 ? (
          <div className="relative flex flex-col items-center justify-center p-14 my-8 bg-purple-50 rounded-3xl border border-purple-100">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-25 rounded-full"></div>

              <div className="relative bg-white p-5 rounded-3xl shadow-sm border border-purple-100/50">
                <ShoppingBag
                  size={64}
                  strokeWidth={1}
                  className="text-purple-700"
                />
              </div>

              <Sparkles
                size={20}
                className="absolute -top-3 -right-3 text-purple-400 opacity-70"
              />
            </div>

            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Your bag is empty
            </h2>

            <p className="text-slate-600 mt-3 max-w-sm text-center leading-relaxed text-sm">
              Fill it up with amazing finds! Need some inspiration?
            </p>

            <button
              className="mt-9 px-10 py-3 bg-purple-800 hover:bg-purple-900 text-white font-semibold rounded-xl shadow-lg shadow-purple-200/70 transition-all active:scale-95 text-base"
              onClick={handleBagButton}
            >
              Shop New Arrivals
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <BagItem
                  key={item.id}
                  item={item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="w-full lg:w-87.5">
              <div className="lg:sticky lg:top-24">
                <BagSummary />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
