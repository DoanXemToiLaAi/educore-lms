import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/common/ScrollToTop";
import { NavigationProvider } from "./context/NavigationContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ComponentsShowcase from "./pages/ComponentsShowcase";
import FeaturesPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-gray-50">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/components" element={<ComponentsShowcase />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </Router>
        </NavigationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
