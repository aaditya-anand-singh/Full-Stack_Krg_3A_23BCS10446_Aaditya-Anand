// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Logs from "./pages/Logs.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import DashboardAnalytics from "./pages/DashboardAnalytics.jsx";
import DashboardSummary from "./pages/DashboardSummary.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header title="Ecotrack" />

      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected dashboard section */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          {/* Default dashboard page */}
          <Route index element={<DashboardSummary />} />

          {/* Dashboard pages */}
          <Route path="summary" element={<DashboardSummary />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Logs (still protected) */}
          <Route
            path="logs"
            element={
              <ProtectedRoutes>
                <Logs />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
