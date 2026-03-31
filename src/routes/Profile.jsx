import { useSelector } from "react-redux";
import { User, ShoppingBag, Heart } from "lucide-react";

const Profile = () => {
  const bagItems = useSelector((state) => state.bag?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const totalQty = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <User className="w-8 h-8 text-indigo-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800">Guest User</h2>
            <p className="text-sm text-slate-500">Welcome to SwiftStore 👋</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition">
            <div>
              <p className="text-sm text-slate-500">Items in Bag</p>
              <h3 className="text-2xl font-bold text-slate-900">{totalQty}</h3>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition">
            <div>
              <p className="text-sm text-slate-500">Wishlist Items</p>
              <h3 className="text-2xl font-bold text-slate-900">
                {wishlistItems.length}
              </h3>
            </div>

            <div className="bg-red-100 p-3 rounded-lg">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            Account Details
          </h3>
          <p className="text-sm text-slate-500">
            This section will include user info, orders, and settings once
            backend is added.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
