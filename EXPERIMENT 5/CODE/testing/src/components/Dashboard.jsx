import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return loading ? <div>Loading...</div> : <div>Eco Data Loaded</div>;
}