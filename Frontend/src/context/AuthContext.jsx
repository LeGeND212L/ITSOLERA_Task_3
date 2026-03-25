import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../api/services';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getStoredToken = () => {
  try {
    return localStorage.getItem('token') || null;
  } catch (_error) {
    return null;
  }
};

const clearStoredToken = () => {
  try {
    localStorage.removeItem('token');
  } catch (_error) {
    // Ignore storage errors to avoid blocking logout/login UX.
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getStoredToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await authApi.me();
        setUser(res.data);
      } catch (_error) {
        clearStoredToken();
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    bootstrap();
  }, [token]);

  const login = async (username, password) => {
    const res = await authApi.login({ username, password });
    try {
      localStorage.setItem('token', res.data.token);
    } catch (_error) {
      // Continue with in-memory token if storage is unavailable.
    }
    setToken(res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    try {
      if (token) {
        await authApi.logout();
      }
    } catch (_error) {
      // Logout should always clear local session even if API call fails.
    } finally {
      clearStoredToken();
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {loading ? (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-medical rounded-full animate-spin mx-auto" />
            <p className="mt-3 text-sm text-gray-600">Loading CareStore...</p>
          </div>
        </div>
      ) : children}
    </AuthContext.Provider>
  );
};