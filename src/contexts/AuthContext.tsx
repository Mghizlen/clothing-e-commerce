import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('auth-user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('auth-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth-user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, call API
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
    };

    setUser(mockUser);
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in real app, call API
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    };

    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
