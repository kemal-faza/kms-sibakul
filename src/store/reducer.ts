import type { Discussion, Role, Submission, SubmissionStatus } from "../types";
import { discussions as seedDiscussions, submissions as seedSubmissions } from "../data/mock";

export interface AppState {
  role: Role;
  submissions: Submission[];
  discussions: Discussion[];
}

export type Action =
  | { type: "setRole"; role: Role }
  | { type: "addSubmission"; submission: Submission }
  | { type: "setStatus"; id: string; status: SubmissionStatus }
  | { type: "addDiscussion"; discussion: Discussion };

export const initialState: AppState = {
  role: "Mitra UMKM",
  submissions: seedSubmissions,
  discussions: seedDiscussions,
};

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "setRole":
      return { ...state, role: action.role };
    case "addSubmission":
      return { ...state, submissions: [action.submission, ...state.submissions] };
    case "setStatus":
      return {
        ...state,
        submissions: state.submissions.map((s) =>
          s.id === action.id ? { ...s, status: action.status } : s
        ),
      };
    case "addDiscussion":
      return { ...state, discussions: [action.discussion, ...state.discussions] };
    default:
      return state;
  }
}
