"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  uid: string;
  role: string;
}

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  user: UserProfile;
}

const defaultUser: UserProfile = {
  name: "Harsh Partap Jain",
  uid: "23BAI70194",
  role: "Student",
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, user: defaultUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
}
