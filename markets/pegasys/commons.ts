import {
  AssetType,
  TransferStrategy,
  ICommonConfiguration,
  eEthereumNetwork,
} from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./rateStrategies";
// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: "Commons Pegasys Market",
  ATokenNamePrefix: "Rollux",
  StableDebtTokenNamePrefix: "Rollux",
  VariableDebtTokenNamePrefix: "Rollux",
  SymbolPrefix: "Rlx",
  ProviderId: 8080,
  OracleQuoteCurrencyAddress: ZERO_ADDRESS,
  OracleQuoteCurrency: "USD",
  OracleQuoteUnit: "8",
  WrappedNativeTokenSymbol: "WSYS",
  ChainlinkAggregator: {
    [eEthereumNetwork.rollux]: {
      DAI: '0x2447bB5fA1d88c78C7AF6395d66f66647D75F7FB',
      USDC: '0xDA4D8389aAa08dd8151303142020c3a275fC6617',
      BTC: '0xCA6f906303e5B647bA60fe70861A7Dc298A1B6B8',
      ETH: '0x98df30b3EB9A99E5aFa41f07182105Bdf9c99954',
      USDT: '0xEAb74ed76cE0CbF38e90173A5d4aa104a1e3e064',
      WSYS: '0x2B25C28A7c73CAE5353Ee7Bf724D32AC4134c2f1',
    },
  },
  ReserveFactorTreasuryAddress: {
    // [eEthereumNetwork.rollux]: ZERO_ADDRESS,
  },
  FallbackOracle: {
    [eEthereumNetwork.rollux]: ZERO_ADDRESS,
  },
  ReservesConfig: {},
  IncentivesConfig: {
    enabled: {
      // [eEthereumNetwork.rollux]: true,
    },
    rewards: {

      // [eEthereumNetwork.rollux]: {
      //   StkAave: ZERO_ADDRESS,
      // }
    },
    rewardsOracle: {
      // [eEthereumNetwork.rollux]: {
      //   StkAave: ZERO_ADDRESS,
      // },

    },
    incentivesInput: {
      // [eArbitrumNetwork.arbitrumTestnet]: [
      //   {
      //     emissionPerSecond: "34629756533",
      //     duration: 7890000,
      //     asset: "DAI",
      //     assetType: AssetType.AToken,
      //     reward: "CRV",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      //   {
      //     emissionPerSecond: "300801036720127500",
      //     duration: 7890000,
      //     asset: "USDC",
      //     assetType: AssetType.AToken,
      //     reward: "REW",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      //   {
      //     emissionPerSecond: "300801036720127500",
      //     duration: 7890000,
      //     asset: "LINK",
      //     assetType: AssetType.AToken,
      //     reward: "REW",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      // ],
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT", "DAI"],
    },
  },
  L2PoolEnabled: {
    // [eEthereumNetwork.rollux]: true,
  },
  ParaswapRegistry: {
    // [eEthereumNetwork.rollux]: ZERO_ADDRESS
  },
  FlashLoanPremiums: {
    total: 0.0005e4,
    protocol: 0.0004e4,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
};
