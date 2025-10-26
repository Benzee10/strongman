import React, { useState, useEffect } from 'react';

interface StockCounterProps {
  initialCount: number;
}

const StockCounter: React.FC<StockCounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Set a random interval duration for more realistic updates
    const randomInterval = Math.random() * (10000 - 6000) + 6000; // between 6-10 seconds

    const interval = setInterval(() => {
      setCount(prevCount => {
        // Decrease by 1 or 2 to make it look real
        const decrement = Math.floor(Math.random() * 2) + 1;
        const newCount = prevCount - decrement;
        
        // Ensure the count doesn't drop below a believable number
        return newCount < 9 ? 9 : newCount; 
      });
    }, randomInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 text-center text-sm text-red-400 animate-pulse">
      <p>Hurry! Only <strong className="font-bold text-white">{count}</strong> left at this price!</p>
    </div>
  );
};

export default StockCounter;
