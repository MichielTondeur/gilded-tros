import {
  BDawgKeychainItem,
  BackstagePassItem,
  CommonItem,
  GoodWineItem,
  SmellyItem,
} from "../items";
import { AllItems, GildedTros } from "../gilded-tros";

console.log("AXXES CODE KATA - GILDED TROS");

const items: AllItems[] = [
  new CommonItem("Ring of Cleansening Code", 10, 20),
  new GoodWineItem(2, 0),
  new CommonItem("Elixir of the SOLID", 5, 7),
  new BDawgKeychainItem(0),
  new BDawgKeychainItem(-1),
  new BackstagePassItem("Backstage passes for Re:Factor", 15, 20),
  new BackstagePassItem("Backstage passes for Re:Factor", 10, 49),
  new BackstagePassItem("Backstage passes for HAXX", 5, 49),
  new SmellyItem("Duplicate Code", 3, 6),
  new SmellyItem("Long Methods", 3, 6),
  new SmellyItem("Ugly Variable Names", 3, 6),
];

const app: GildedTros = new GildedTros(items);

let days = 4;
const args = process.argv.slice(2);
if (args.length > 0) {
  days = +args[0] + 1;
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.map((item) => item.toString()).forEach((item) => console.log(item));
  console.log();
  app.updateQuality();
}
