import {
  CONSTANTS,
  BDawgKeychainItem,
  BackstagePassItem,
  CommonItem,
  GoodWineItem,
  SmellyItem,
} from "./items";

const {
  DUPLICATE_CODE,
  LONG_METHODS,
  UGLY_VARIABLE_NAMES,
  BACKSTAGE_PASSES,
  GOOD_WINE,
  B_DAWG_KEYCHAIN,
} = CONSTANTS;

export type AllItems =
  | GoodWineItem
  | CommonItem
  | SmellyItem
  | BDawgKeychainItem
  | BackstagePassItem;

export class GildedTros {
  constructor(public items: Array<AllItems>) {}

  private isGoodWine(item: AllItems): item is GoodWineItem {
    return item.name === GOOD_WINE;
  }

  private isKeyChain(item: AllItems): item is BDawgKeychainItem {
    return item.name === B_DAWG_KEYCHAIN;
  }

  private isBackstagePass(item: AllItems): item is BackstagePassItem {
    // Match all items beginning with 'Backstage passes'
    const backStagePassesRegex = new RegExp(`^${BACKSTAGE_PASSES}.*$`);

    return backStagePassesRegex.test(item.name);
  }

  private isSmellyItem(item: AllItems): item is SmellyItem {
    return (
      item.name === DUPLICATE_CODE ||
      item.name === LONG_METHODS ||
      item.name === UGLY_VARIABLE_NAMES
    );
  }

  public updateQuality(): void {
    for (const item of this.items) {
      if (this.isGoodWine(item)) item.update();
      if (this.isBackstagePass(item)) item.update();
      if (this.isBackstagePass(item)) item.update;
      if (this.isSmellyItem(item)) item.update();
      if (this.isKeyChain(item)) {
      }

      // ugly hack, not sure how to handle this last case
      const commonItem = item as CommonItem;
      commonItem.update();
    }
  }
}
