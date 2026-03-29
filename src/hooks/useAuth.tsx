import { useState, useEffect, createContext, useContext } from 'react';
// import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('mock_supabase_user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Simulated auth
    const mockUser = { id: 'test-user-id', email, user_metadata: { full_name: 'Test Sign-In' } } as User;
    setUser(mockUser);
    localStorage.setItem('mock_supabase_user', JSON.stringify(mockUser));
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    // Simulated auth
    const mockUser = { id: 'test-user-id', email, user_metadata: { full_name: fullName } } as User;
    setUser(mockUser);
    localStorage.setItem('mock_supabase_user', JSON.stringify(mockUser));
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('mock_supabase_user');
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
