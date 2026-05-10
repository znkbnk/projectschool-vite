const solutionCode1 = `
//client/src/config/api.js

export const API_URL = process.env.API_URL || 'http://localhost:5001';

`;

const solutionCode2 = `
//client/netlify.toml (remove this line)

[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;
const solutionCode3 = `
//client/src/context/AuthContext.js

import { createContext, useContext, useState, useEffect } from 'react';
import { API_URL } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      // No refresh token available (user didn't check "remember me")
      if (!refreshToken) {
        return null;
      }

      const res = await fetch(\`\${API_URL}/api/auth/refresh\`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('accessToken', data.accessToken);
        setUser(data.user);
        return data.accessToken;
      }
      return null;
    } catch (err) {
      console.error('Token refresh failed:', err);
      return null;
    }
  };

  const fetchWithAuth = async (url, options = {}) => {
    let token = localStorage.getItem('accessToken');

    let res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: \`Bearer \${token}\`,
      },
    });

    if (res.status === 401) {
      console.log('Access token expired, attempting refresh...');
      const newToken = await refreshAccessToken();

      if (newToken) {
        console.log('Token refreshed successfully, retrying request...');
        res = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: \`Bearer \${newToken}\`,
          },
        });
      } else {
        console.log('Refresh failed, logging out...');
        logout();
      }
    }

    return res;
  };

  const fetchCartCount = async (token) => {
    try {
      const res = await fetch(\`\${API_URL}/api/cart\`, {
        headers: { Authorization: \`Bearer \${token}\` },
      });
      if (res.ok) {
        const data = await res.json();
        const count =
          data.cart?.items?.reduce((sum, i) => sum + i.quantity, 0) || 0;
        setCartCount(count);
      }
    } catch (err) {
      console.error('Cart count fetch failed');
    }
  };

  const updateCartCount = async () => {
    const token = localStorage.getItem('accessToken');
    if (token) await fetchCartCount(token);
  };

  useEffect(() => {
    const loadAuth = async () => {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        let res = await fetch(\`\${API_URL}/api/auth/me\`, {
          headers: { Authorization: \`Bearer \${token}\` },
        });

        if (res.status === 401) {
          console.log('Access token expired on load, attempting refresh...');
          const newToken = await refreshAccessToken();

          if (newToken) {
            res = await fetch(\`\${API_URL}/api/auth/me\`, {
              headers: { Authorization: \`Bearer \${newToken}\` },
            });
          } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setLoading(false);
            return;
          }
        }

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          await fetchCartCount(localStorage.getItem('accessToken'));
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (err) {
        console.error('Auth load failed:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  const login = async (authData, accessToken, remember = false) => {
    localStorage.setItem('accessToken', accessToken);
    if (remember && authData.refreshToken) {
      localStorage.setItem('refreshToken', authData.refreshToken);
    }
    setUser(authData.user || authData);
    await fetchCartCount(accessToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    setCartCount(0);
  };

  const value = {
    user,
    cartCount,
    loading,
    isLoggedIn: !!user,
    isAdmin: user?.role === 'admin',
    login,
    logout,
    updateCartCount,
    fetchWithAuth,
    API_URL,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
];


