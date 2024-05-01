import { parseUnits } from "ethers/lib/utils";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  ICommonConfiguration,
  eEthereumNetwork,
  TransferStrategy,
  AssetType,
} from "../../helpers/types";
import {
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./rateStrategies";
// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: "Testnet Pegasys Market",
  ATokenNamePrefix: "Testnet",
  StableDebtTokenNamePrefix: "Testnet",
  VariableDebtTokenNamePrefix: "Testnet",
  SymbolPrefix: "Test",
  ProviderId: 0,
  OracleQuoteCurrencyAddress: ZERO_ADDRESS,
  OracleQuoteCurrency: "USD",
  OracleQuoteUnit: "8",
  WrappedNativeTokenSymbol: "WSYS",
  ChainlinkAggregator: {
    [eEthereumNetwork.rollux]: {
      DAI: '0x18ABcCA40dd4e234bDA4fa230673C2A0A3be4372',
      USDC: '0x4202D0EfeA0AEC3d9582d499e340dF73cF428eB2',
      BTC: '0x6386dDfaF09f0e0517D9861BA5680CB6a0c18Dc3',
      ETH: '0x5668E903ae1bED9b719CDf259C905103d60EAEaA',
      USDT: '0x09C3FEBc4b3e6bF01472aF47bc87a2c3301789c5',
      WSYS: '0x93fFce52f5776ad8465669b5C52548b92ed6678F',
    },
  },
  ReserveFactorTreasuryAddress: {
  },
  FallbackOracle: {
    [eEthereumNetwork.rollux]: ZERO_ADDRESS,
  },
  ReservesConfig: {},
  IncentivesConfig: {
    enabled: {
      [eEthereumNetwork.hardhat]: false,
    },
    rewards: {
      [eEthereumNetwork.hardhat]: {
        CRV: ZERO_ADDRESS,
        REW: ZERO_ADDRESS,
        BAL: ZERO_ADDRESS,
        StkAave: ZERO_ADDRESS,
      },
    },
    rewardsOracle: {
      [eEthereumNetwork.hardhat]: {
        CRV: ZERO_ADDRESS,
        REW: ZERO_ADDRESS,
        BAL: ZERO_ADDRESS,
        StkAave: ZERO_ADDRESS,
      },
    },
    incentivesInput: {
    },
  },
  EModes: {
  },
  FlashLoanPremiums: {
    total: 0.0009e4,
    protocol: 0,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
};