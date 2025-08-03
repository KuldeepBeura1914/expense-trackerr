import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AnimatedBarGraph from "../../components/Charts/AnimatedBarGraph";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setLoading(false);
    }, 2100); // Adjust splash duration here

    return () => clearTimeout(splashTimeout);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-700 text-white">
        <div className="text-center space-y-4">
          <h1
            className="text-4xl font-bold tracking-wide"
            style={{
              background: "linear-gradient(90deg, #ccc, #fff, #ccc)",
              backgroundSize: "300% auto",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "shimmerEffect 3s linear infinite",
            }}
          >
            Expense Tracker
          </h1>

          <p className="text-white/70">Tracking your expenses smartly...</p>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 flex items-center bg-blue-950 shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Expense Tracker
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-center flex-grow px-6 sm:px-12 md:px-20 py-12 gap-10 md:gap-20 text-center md:text-left">
        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-xl space-y-6">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, #606060a1, #ffffff, #b9b9b9ff)",
              backgroundSize: "300% auto",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "shimmerEffect 6s linear infinite",
            }}
          >
            Take Control of <br className="hidden sm:block" />
            Your Finances
          </h2>

          <p className="text-white text-sm sm:text-base md:text-lg opacity-90">
            Track income, manage expenses, and gain financial clarity — all in
            one elegant dashboard.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get Started <FaArrowRight />
          </button>
        </div>

        {/* Chart Section */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="backdrop-blur-md bg-white/10 p-4 rounded-3xl border border-white/20 shadow-xl transition duration-500 hover:scale-[1.02]">
            <AnimatedBarGraph />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-950 text-center text-sm text-white/70 py-4">
        © {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </footer>

      {/* Shimmer Keyframes */}
      <style>{`
        @keyframes shimmerEffect {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
