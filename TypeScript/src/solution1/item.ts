export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

  public toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }

  public increaseQuality(number: number): void {
    this.quality = this.quality + number;
  }

  public decreaseQuality(number: number): void {
    this.quality = this.quality - number;
  }

  public resetQuality(): void {
    this.quality = 0;
  }

  public decreaseSellIn(number: number): void {
    this.sellIn = this.sellIn - number;
  }
}

type ItemConstantsType = {
  MAX_QUALITY: number;
  BACKSTAGE_PASS_WAVE_1: number;
  BACKSTAGE_PASS_WAVE_2: number;
  GOOD_WINE: string;
  B_DAWG_KEYCHAIN: string;
  BACKSTAGE_PASSES: string;
  DUPLICATE_CODE: string;
  LONG_METHODS: string;
  UGLY_VARIABLE_NAMES: string;
};

export const CONSTANTS = {
  MAX_QUALITY: 50,
  BACKSTAGE_PASS_WAVE_1: 11,
  BACKSTAGE_PASS_WAVE_2: 6,
  GOOD_WINE: "Good Wine",
  B_DAWG_KEYCHAIN: "B-DAWG Keychain",
  BACKSTAGE_PASSES: "Backstage passes",
  DUPLICATE_CODE: "Duplicate Code",
  LONG_METHODS: "Long Methods",
  UGLY_VARIABLE_NAMES: "Ugly Variable Names",
} as const satisfies ItemConstantsType;
