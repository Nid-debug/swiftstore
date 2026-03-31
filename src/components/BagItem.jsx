import { Trash2, Plus, Minus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const BagItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const totalItemPrice = item.price * item.quantity;

  return (
    <div className="flex gap-4 bg-linear-to-br from-white to-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">

      {/* Image */}
      <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col grow min-w-0 justify-between">

        <div>
          {/* Category */}
          <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">
            {item.category}
          </p>

          {/* Name */}
          <h3 className="text-sm font-semibold text-slate-800 truncate">
            {item.name}
          </h3>

          {/* Price Row */}
          <div className="flex items-center gap-2 mt-1">
            <span className="flex items-center text-sm font-bold text-indigo-600">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="text-xs mr-0.5"
              />
              {item.price.toLocaleString("en-IN")}
            </span>

            {item.originalPrice && (
              <span className="text-xs text-slate-400 line-through flex items-center">
                <FontAwesomeIcon
                  icon={faIndianRupeeSign}
                  className="text-[10px] mr-0.5"
                />
                {item.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-3">

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-2 py-1">
            <button
              onClick={() => onDecrease(item.id)}
              className="p-1 rounded-md hover:bg-slate-200 transition active:scale-90"
            >
              <Minus className="w-3 h-3" />
            </button>

            <span className="text-sm font-semibold w-6 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)}
              className="p-1 rounded-md hover:bg-slate-200 transition active:scale-90"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Total Price */}
          <div className="text-sm font-bold text-slate-900 flex items-center">
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              className="text-xs mr-0.5"
            />
            {totalItemPrice.toLocaleString("en-IN")}
          </div>

          {/* Remove */}
          <button
            onClick={() => onRemove(item.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition active:scale-90"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagItem;