import React, { useEffect, useState } from "react";

const AnimatedBarGraph = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  // Generate random financial data
  const generateData = () => {
    const newIncome = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 6000) + 4000 // Income: 4000–10000
    );
    const newExpense = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 5000) + 1000 // Expense: 1000–6000
    );
    setIncomeData(newIncome);
    setExpenseData(newExpense);
  };

  useEffect(() => {
    generateData(); // initial
    const interval = setInterval(() => {
      generateData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxBarValue = 10000; // for scaling height

  return (
    <div className="w-full h-64 sm:h-72 px-4 flex items-end justify-center gap-0 bg-gradient-to-b from-white-950 via-white-800 to-blue-700 rounded-xl shadow-lg relative overflow-hidden">
      {/* Grid lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0 flex flex-col justify-between opacity-5">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="border-t border-white w-full" />
        ))}
      </div>

      {/* Bars */}
      {incomeData.map((income, index) => {
        const expense = expenseData[index];

        const incomeHeight = (income / maxBarValue) * 100;
        const expenseHeight = (expense / maxBarValue) * 100;

        return (
          <div key={index} className="flex flex-col items-center z-10">
            {/* Bars */}
            <div className="flex items-end gap-1 h-52 sm:h-60">
              {/* Income Bar - Yellow */}
              <div
                className="w-4 sm:w-5 bg-gray-100 rounded-t transition-all duration-700"
                style={{ height: `${incomeHeight}%` }}
              />
              {/* Expense Bar - Red */}
              <div
                className="w-4 sm:w-5 bg-gray-900 rounded-t transition-all duration-700"
                style={{ height: `${expenseHeight}%` }}
              />
            </div>

            {/* Labels */}
            <div className="flex flex-col text-center mt-2 text-xs font-medium text-white">
              <span className="opacity-80">Income: ₹{income}</span>
              <span className="opacity-80">Expense: ₹{expense}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedBarGraph;
