import { parseEther, parseUnits } from "ethers/lib/utils";
import {
  eEthereumNetwork,
} from "./types";

const {
  version: coreVersion,
}: {
  version: string;
} = require("@pollum-io/lending-core/package.json");
const {
  version: peripheryVersion,
}: {
  _resolved: string;
  version: string;
} = require("@pollum-io/lending-core/package.json");

export const V3_CORE_VERSION = coreVersion;
export const V3_PERIPHERY_VERSION = peripheryVersion;

export const PERCENTAGE_FACTOR = "10000";
export const HALF_PERCENTAGE = "5000";
export const oneEther = parseEther("1");
export const oneRay = parseUnits("1", 27);
export const MAX_UINT_AMOUNT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";
export const AAVE_REFERRAL = "0";

export const WRAPPED_NATIVE_TOKEN_PER_NETWORK: { [network: string]: string } = {
  [eEthereumNetwork.rollux]: "0x4200000000000000000000000000000000000006",
};

export const ZERO_BYTES_32 =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export const MOCK_CHAINLINK_AGGREGATORS_PRICES: { [key: string]: string } = {
  ETH: parseUnits("4000", 8).toString(),
  SYS: parseUnits("0.25", 8).toString(),
  DAI: parseUnits("1", 8).toString(),
  USDC: parseUnits("1", 8).toString(),
  USDT: parseUnits("1", 8).toString(),
  BTC: parseUnits("72000", 8).toString(),
  USD: parseUnits("1", 8).toString(),
  WSYS: parseUnits("0.25", 8).toString(),
};

export const chainlinkAggregatorProxy: Record<string, string> = {
  rollux: "0x2B25C28A7c73CAE5353Ee7Bf724D32AC4134c2f1",
};

export const chainlinkEthUsdAggregatorProxy: Record<string, string> = {
  rollux: "0x2B25C28A7c73CAE5353Ee7Bf724D32AC4134c2f1",
};

export const ETHEREUM_SHORT_EXECUTOR =
  "0xca062B0Fd91172d89BcD4Bb084ac4e21972CC467";

export const EMPTY_STORAGE_SLOT =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export const POOL_ADMIN: Record<string, string> = {
  [eEthereumNetwork.rollux]: ETHEREUM_SHORT_EXECUTOR,
};

export const EMERGENCY_ADMIN: Record<string, string> = {
  [eEthereumNetwork.rollux]: ETHEREUM_SHORT_EXECUTOR,
};

export const DEFAULT_NAMED_ACCOUNTS = {
  deployer: {
    default: 0,
  },
  aclAdmin: {
    default: 0,
  },
  emergencyAdmin: {
    default: 0,
  },
  poolAdmin: {
    default: 0,
  },
  addressesProviderRegistryOwner: {
    default: 0,
  },
  treasuryProxyAdmin: {
    default: 1,
  },
  incentivesProxyAdmin: {
    default: 1,
  },
  incentivesEmissionManager: {
    default: 0,
  },
  incentivesRewardsVault: {
    default: 0,
  },
};

export const GOVERNANCE_BRIDGE_EXECUTOR: { [key: string]: string } = {
  // [eEthereumNetwork.rollux]: ZERO_ADDRESS,
};

export const MULTISIG_ADDRESS: { [key: string]: string } = {
  // [eEthereumNetwork.rollux]: ZERO_ADDRESS,
};
