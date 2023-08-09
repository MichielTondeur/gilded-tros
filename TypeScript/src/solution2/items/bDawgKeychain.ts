import { Item } from "./item";

type BDawgKeychainItemConstantsType = {
  DEFAULT_QUALITY: number;
  B_DAWG_KEYCHAIN: string;
};

export const CONSTANTS = {
  DEFAULT_QUALITY: 80,
  B_DAWG_KEYCHAIN: "B-DAWG Keychain",
} as const satisfies BDawgKeychainItemConstantsType;

const { B_DAWG_KEYCHAIN, DEFAULT_QUALITY } = CONSTANTS;

export class BDawgKeychainItem extends Item {
  constructor(sellIn: number) {
    super(B_DAWG_KEYCHAIN, sellIn, DEFAULT_QUALITY);
  }
}
