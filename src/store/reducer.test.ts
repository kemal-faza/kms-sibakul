import { describe, it, expect } from "vitest";
import { initialState, reducer } from "./reducer";
import type { Submission } from "../types";

const incoming: Submission = {
  id: "s-new",
  title: "Materi Baru",
  submitter: "Warung Kopi Makmur",
  submitterRole: "(Pendamping)",
  category: "Pemasaran",
  format: "Artikel",
  status: "Menunggu Validasi",
};

describe("reducer", () => {
  it("prepends a new submission", () => {
    const next = reducer(initialState, { type: "addSubmission", submission: incoming });
    expect(next.submissions[0].id).toBe("s-new");
    expect(next.submissions).toHaveLength(initialState.submissions.length + 1);
  });

  it("updates a submission status by id", () => {
    const target = initialState.submissions[0].id;
    const next = reducer(initialState, { type: "setStatus", id: target, status: "Disetujui" });
    expect(next.submissions.find((s) => s.id === target)?.status).toBe("Disetujui");
  });

  it("prepends a discussion", () => {
    const next = reducer(initialState, {
      type: "addDiscussion",
      discussion: {
        id: "d-new",
        author: "Warung Kopi Makmur",
        business: "Kuliner",
        rating: 5,
        createdAt: "Baru saja",
        body: "Mantap",
      },
    });
    expect(next.discussions[0].id).toBe("d-new");
  });

  it("changes the role", () => {
    const next = reducer(initialState, { type: "setRole", role: "Admin Dinas Koperasi" });
    expect(next.role).toBe("Admin Dinas Koperasi");
  });
});
