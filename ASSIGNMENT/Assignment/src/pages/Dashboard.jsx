import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <p>Welcome to EcoTrack</p>
      </div>
    </div>
  );
};

export default Dashboard;