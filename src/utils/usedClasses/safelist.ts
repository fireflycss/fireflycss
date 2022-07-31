import { Data } from "../data/data";

export function getSafelistClasses(
  data: Data,
  stringClasses: string[]
): string[] {
  const safelist = data.safelist;
  for (const classesString in safelist) {
    const classes = classesString.split(" ");
    for (const className in classes) {
      stringClasses.push(className);
    }
  }
  return stringClasses;
}
