import React from "react";

const DashboardAnalytics = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Analytics</h1>
      <p>EcoTrack Analytics Page ✅</p>

      <div style={{ marginTop: "20px", display: "grid", gap: "15px" }}>
        <div style={cardStyle}>
          <h3>Weekly CO₂ Trend</h3>
          <p>📉 Reduced by 8% this week</p>
        </div>

        <div style={cardStyle}>
          <h3>Most Used Transport</h3>
          <p>🚗 Car (62%)</p>
        </div>

        <div style={cardStyle}>
          <h3>Top Emission Source</h3>
          <p>⚡ Electricity (45%)</p>
        </div>

        <div style={cardStyle}>
          <h3>Suggested Action</h3>
          <p>✅ Use public transport 2 days/week</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  background: "#f8f8f8",
};

export default DashboardAnalytics;
