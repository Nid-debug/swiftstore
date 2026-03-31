import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const BagSummary = () => {
  const items = useSelector((state) => state.bag?.items || []);

  const totalMRP = items.reduce(
    (total, item) => total + item.originalPrice * item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = totalMRP - totalPrice;
  const shipping = totalPrice > 499 ? 0 : 100;
  const finalAmount = totalPrice + shipping;

  return (
    <div className="w-full max-w-sm rounded-3xl p-6 bg-linear-to-br from-white to-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
        Order Summary
      </h2>

      {/* Content */}
      <div className="space-y-4">

        {/* Total MRP */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Total MRP</span>
          <span className="font-semibold text-slate-800 flex items-center">
            <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-0.5 text-xs" />
            {totalMRP.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Discount */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Discount</span>
          <span className="font-bold text-emerald-500 flex items-center">
            - <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-0.5 text-xs" />
            {discount.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Coupon */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Coupon</span>
          <button className="text-indigo-600 font-bold hover:text-indigo-700 transition">
            Apply
          </button>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm pb-4">
          <span className="text-slate-500">Shipping</span>
          <div className="flex items-center gap-2">
            {shipping === 0 ? (
              <>
                <span className="text-slate-400 line-through flex items-center">
                  <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-0.5 text-xs" />
                  100
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  FREE
                </span>
              </>
            ) : (
              <span className="flex items-center font-medium text-slate-700">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-0.5 text-xs" />
                {shipping}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>

        {/* Final Total */}
        <div className="flex justify-between items-center py-2">
          <span className="text-base font-bold text-slate-900">
            Total Amount
          </span>
          <span className="text-xl font-black text-indigo-600 flex items-center">
            <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-0.5 text-sm" />
            {finalAmount.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Savings Highlight */}
        {discount > 0 && (
          <div className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-2 rounded-lg text-center">
            🎉 You saved ₹{discount.toLocaleString("en-IN")} on this order!
          </div>
        )}
      </div>

      {/* CTA */}
      <button className="w-full mt-6 py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-sm font-bold uppercase tracking-widest hover:from-indigo-700 hover:to-indigo-800 active:scale-[0.98] transition-all shadow-lg">
        Place Order
      </button>

      {/* Footer */}
      <p className="text-center text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
        🔒 100% Secure Payments
      </p>
    </div>
  );
};

export default BagSummary;