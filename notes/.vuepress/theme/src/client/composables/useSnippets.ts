import type { PageData } from "@vuepress/client";
import { ref } from "vue";
import { sortPostsByDate } from "../utils";
import { usePages } from ".";

export async function fetchSnippets(): Promise<PageData[]> {
  const pages = await usePages();
  return pages.filter(
    (page) => page.path !== "/snippets/" && page.path.includes("/snippets/")
  );
}

export const useSnippets = () => {
  const snippets = ref<PageData[]>([]);

  fetchSnippets().then((allSnippets) => {
    snippets.value = sortPostsByDate(allSnippets);
  });

  return snippets;
};
