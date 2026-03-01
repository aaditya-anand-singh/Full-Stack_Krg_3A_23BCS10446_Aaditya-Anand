import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";
import { fetchAdvice } from "../utils/api";

const WaterTracker = () => {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load saved count
  useEffect(() => {
    const saved = localStorage.getItem("waterCount");
    if (saved) setCount(Number(saved));
  }, []);

  // Save count
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  // Fetch API tip
  useEffect(() => {
    const getTip = async () => {
      try {
        setLoading(true);
        const advice = await fetchAdvice();
        setTip(advice);
        setError("");
      } catch (err) {
        setError("Error fetching tip");
      } finally {
        setLoading(false);
      }
    };

    getTip();
  }, []);

  const addWater = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value));
  };

  return (
    <div>
      <Navbar />

      <div className="card">
        <h2>Daily Water Tracker</h2>

        <CounterDisplay count={count} goal={goal} />

        <div className="buttons">
          <button onClick={addWater}>+</button>
          <button onClick={removeWater}>-</button>
          <button onClick={reset}>Reset</button>
        </div>

        <div className="goal">
          <label>Set Daily Goal: </label>
          <input type="number" value={goal} onChange={handleGoalChange} />
        </div>

        {loading && <p>Loading tip...</p>}
        {error && <p className="error">{error}</p>}
        {tip && <p>Today’s Health Tip: {tip}</p>}
      </div>
    </div>
  );
};

export default WaterTracker;