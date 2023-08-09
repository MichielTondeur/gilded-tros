import { Item } from "./item";

type SmellyItemConstantsType = {
  DUPLICATE_CODE: string;
  LONG_METHODS: string;
  UGLY_VARIABLE_NAMES: string;
};

export const CONSTANTS = {
  DUPLICATE_CODE: "Duplicate Code",
  LONG_METHODS: "Long Methods",
  UGLY_VARIABLE_NAMES: "Ugly Variable Names",
} as const satisfies SmellyItemConstantsType;

type SmellyNames = (typeof CONSTANTS)[keyof typeof CONSTANTS];

export class SmellyItem extends Item {
  constructor(name: SmellyNames, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  private decreaseQuality(number: number): void {
    this.quality = this.quality - number;
  }

  private decreaseSellIn(): void {
    this.sellIn = this.sellIn - 1;
  }

  public update(): void {
    if (this.quality > 1) this.decreaseQuality(2);
    else if (this.quality > 0) this.decreaseQuality(1);

    this.decreaseSellIn();

    if (this.sellIn < 0) {
      if (this.quality > 1) this.decreaseQuality(2);
      else if (this.quality > 0) this.decreaseQuality(1);
    }
  }
}
