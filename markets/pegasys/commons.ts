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
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WSYS: ZERO_ADDRESS,
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
    // StableEMode: {
    //   id: "1",
    //   ltv: "9700",
    //   liquidationThreshold: "9750",
    //   liquidationBonus: "10100",
    //   label: "Stablecoins",
    //   assets: ["USDC", "USDT", "DAI"],
    // },
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
