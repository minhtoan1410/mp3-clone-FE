import data from "../../data.json";
import type { QuickPlayItem } from "../../types";
import { QuickPlay } from "../common/QuickPlay";
export function Home() {
  const items: QuickPlayItem[] = data.items;
  const test = items[0];
  console.log(data);
  return <QuickPlay {...test} />;
}
