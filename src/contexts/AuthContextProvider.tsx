"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import Login from "@/pages/Login";

interface AuthContextProps {
  session: Session | null;
  signIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [session, setSession] = useState<Session | null>(null);

  const router = useRouter();

  const supabase = createClientComponentClient();

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSession(data.session);
    router.push("/");
  }

  async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ session, signIn, signOut }}>
      {session ? children : <Login />}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
