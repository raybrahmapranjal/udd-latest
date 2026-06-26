'use client';

import React, { createContext, useContext } from 'react';

interface UserContextProps {
  email: string;
  name: string;
  role: string;
  avatar_url?: string | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children, value }: { children: React.ReactNode; value: UserContextProps }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useAdminUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAdminUser must be used within a UserProvider');
  }
  return context;
}