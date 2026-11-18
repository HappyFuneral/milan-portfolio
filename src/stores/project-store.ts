import { create } from "zustand";
import type { ProjectCategory } from "@/lib/content";

type ProjectStore = {
  selectedCategory: ProjectCategory | "all";
  setCategory: (category: ProjectCategory | "all") => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  selectedCategory: "all",
  setCategory: (category) => set({ selectedCategory: category }),
}));
