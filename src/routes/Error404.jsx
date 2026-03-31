import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute font-black text-[20rem] text-slate-50 select-none -z-10 tracking-tighter">
        404
      </div>

      <div className="max-w-md text-center p-6">
        <span className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase">
          Error
        </span>

        <h1 className="mt-4 text-4xl font-light text-slate-900 sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-slate-500 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's
          get you back to the shop.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block px-10 py-4 bg-slate-900 text-white text-sm font-semibold tracking-widest uppercase hover:bg-indigo-600 transition-colors duration-300 rounded-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
