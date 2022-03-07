import type { PageData } from "@vuepress/client";

function getTimeNum(page: PageData): number {
  return new Date(page.frontmatter.date as string).getTime();
}

export function compareDate(a: PageData, b: PageData): number {
  return getTimeNum(b) - getTimeNum(a);
}

export const sortPostsByDate = (posts: PageData[]): PageData[] => {
  return posts.sort((prev: PageData, next: PageData) => {
    return compareDate(prev, next);
  });
};
