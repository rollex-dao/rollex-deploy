import { ZERO_ADDRESS } from "../../helpers";
import { eEthereumNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../pegasys/index";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const EthereumV3Market: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 30,
  WrappedNativeTokenSymbol: "WSYS",
  MarketId: "Pegasys Rollux Market",
  ATokenNamePrefix: "Rollux",
  StableDebtTokenNamePrefix: "Rollux",
  VariableDebtTokenNamePrefix: "Rollux",
  SymbolPrefix: "RLX",
  ReserveAssets: {},
  ChainlinkAggregator: {},
  ReservesConfig: {},
  EModes: {},
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.rollux]: ZERO_ADDRESS,
  },
};

export default EthereumV3Market;
