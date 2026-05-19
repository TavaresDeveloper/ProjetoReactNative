import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  user: string | null;
  registeredTechnicians: string[];
  login: (username: string) => void;
  logout: () => void;
  registerTechnician: (username: string) => void;
  isRegistered: (username: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [registeredTechnicians, setRegisteredTechnicians] = useState<string[]>([]);

  const isRegistered = (username: string) => {
    return registeredTechnicians.includes(username.toLowerCase().trim());
  };

  const login = (username: string) => {
    const normalizedUsername = username.toLowerCase().trim();

    if (!isRegistered(normalizedUsername)) {
      throw new Error(
        'Usuário não cadastrado. Primeiro registre o técnico no sistema.'
      );
    }

    setUser(normalizedUsername);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const registerTechnician = (username: string) => {
    const normalizedUsername = username.toLowerCase().trim();

    if (isRegistered(normalizedUsername)) {
      throw new Error('Este técnico já está cadastrado.');
    }

    setRegisteredTechnicians(prev => [...prev, normalizedUsername]);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        registeredTechnicians,
        login,
        logout,
        registerTechnician,
        isRegistered,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
