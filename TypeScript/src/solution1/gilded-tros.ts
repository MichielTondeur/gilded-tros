import { Item, CONSTANTS as ITEM_CONSTANTS } from "./item";

const {
  MAX_QUALITY,
  BACKSTAGE_PASS_WAVE_1,
  BACKSTAGE_PASS_WAVE_2,
  GOOD_WINE,
  B_DAWG_KEYCHAIN,
  DUPLICATE_CODE,
  LONG_METHODS,
  UGLY_VARIABLE_NAMES,
  BACKSTAGE_PASSES,
} = ITEM_CONSTANTS;
export class GildedTros {
  constructor(public items: Array<Item>) {}

  private updateWine(item: Item) {
    if (item.quality < MAX_QUALITY) item.increaseQuality(1);

    item.decreaseSellIn(1);

    if (item.sellIn < 0 && item.quality < MAX_QUALITY) item.increaseQuality(1);
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < MAX_QUALITY) {
      item.increaseQuality(1);

      if (item.sellIn < BACKSTAGE_PASS_WAVE_1 && item.quality < MAX_QUALITY)
        item.increaseQuality(1);

      if (item.sellIn < BACKSTAGE_PASS_WAVE_2 && item.quality < MAX_QUALITY)
        item.increaseQuality(1);
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
    return name === GOOD_WINE;
  }

  private isKeyChain(name: string) {
    return name === B_DAWG_KEYCHAIN;
  }

  private isBackstagePass(name: string) {
    // Match all items beginning with 'Backstage passes'
    const backStagePassesRegex = new RegExp(`^${BACKSTAGE_PASSES}.*$`);

    return backStagePassesRegex.test(name);
  }

  private isSmellyItem(name: string) {
    return (
      name === DUPLICATE_CODE ||
      name === LONG_METHODS ||
      name === UGLY_VARIABLE_NAMES
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
