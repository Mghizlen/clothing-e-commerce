import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, name: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (email, _password) => set({
        user: {
          id: Math.random().toString(),
          email,
          name: email.split('@')[0]
        }
      }),
      signup: (email, name, _password) => set({
        user: {
          id: Math.random().toString(),
          email,
          name
        }
      }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-store',
    }
  )
);
