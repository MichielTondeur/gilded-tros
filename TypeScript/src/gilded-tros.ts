import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  private updateWine(item: Item) {
    if (item.quality < 50) item.increaseQuality(1);

    item.decreaseSellIn(1);

    if (item.sellIn < 0 && item.quality < 50) item.increaseQuality(1);
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.increaseQuality(1);

      if (item.sellIn < 11 && item.quality < 50) item.increaseQuality(1);

      if (item.sellIn < 6 && item.quality < 50) item.increaseQuality(1);
    }

    item.decreaseSellIn(1);

    if (item.sellIn < 0) item.resetQuality();
  }

  private updateSmellyItems(item: Item) {
    if (item.quality > 1) item.decreaseQuality(2);
    else if (item.quality > 0) item.decreaseQuality(1);

    item.decreaseSellIn(1);

    if (item.sellIn < 0) {
      if (item.quality > 1) item.decreaseQuality(2);
      else if (item.quality > 0) item.decreaseQuality(1);
    }
  }

  private updateCommon(item: Item) {
    if (item.quality > 0) item.decreaseQuality(1);

    item.decreaseSellIn(1);

    if (item.sellIn < 0 && item.quality > 0) item.decreaseQuality(1);
  }

  private isGoodWine(name: string) {
    return name === "Good Wine";
  }

  private isKeyChain(name: string) {
    return name === "B-DAWG Keychain";
  }

  // Match all items beginning with 'Backstage passes'
  private isBackstagePass(name: string) {
    return /^Backstage passes.*$/.test(name);
  }

  private isSmellyItem(name: string) {
    return (
      name === "Duplicate Code" ||
      name === "Long Methods" ||
      name === "Ugly Variable Names"
    );
  }

  public updateQuality(): void {
    for (const item of this.items) {
      const { name } = item;

      switch (true) {
        case this.isGoodWine(name):
          this.updateWine(item);
          break;
        case this.isBackstagePass(name):
          this.updateBackstagePass(item);
          break;
        case this.isSmellyItem(name):
          this.updateSmellyItems(item);
          break;
        case this.isKeyChain(name):
          break;
        default:
          this.updateCommon(item);
          break;
      }
    }
  }
}
