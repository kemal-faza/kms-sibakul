import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { Discussion, Profile, Role, Submission, SubmissionStatus } from "../types";
import { initialState, reducer } from "./reducer";

interface AppContextValue {
  role: Role;
  profile: Profile;
  submissions: Submission[];
  discussions: Discussion[];
  setRole: (role: Role) => void;
  addSubmission: (submission: Submission) => void;
  setStatus: (id: string, status: SubmissionStatus) => void;
  addFeedback: (discussion: Discussion) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function profileFor(role: Role): Profile {
  return role === "Admin Dinas Koperasi"
    ? { name: "Admin Dinas Koperasi", role, industry: "Dinas Koperasi" }
    : { name: "Warung Kopi Makmur", role, industry: "Kuliner" };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<AppContextValue>(
    () => ({
      role: state.role,
      profile: profileFor(state.role),
      submissions: state.submissions,
      discussions: state.discussions,
      setRole: (role) => dispatch({ type: "setRole", role }),
      addSubmission: (submission) => dispatch({ type: "addSubmission", submission }),
      setStatus: (id, status) => dispatch({ type: "setStatus", id, status }),
      addFeedback: (discussion) => dispatch({ type: "addDiscussion", discussion }),
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
