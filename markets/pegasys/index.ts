import { ZERO_ADDRESS } from "../../helpers";
import {
  IAaveConfiguration,
  eEthereumNetwork,
} from "../../helpers/types";

import { CommonsConfig } from "./commons";
import {
  strategyDAI,
  strategyUSDC,
  strategyWBTC,
  strategyWETH,
  strategyUSDT,
  strategyWSYS,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveMarket: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: "Ethereum Aave Market",
  ATokenNamePrefix: "Ethereum",
  StableDebtTokenNamePrefix: "Ethereum",
  VariableDebtTokenNamePrefix: "Ethereum",
  SymbolPrefix: "Eth",
  ProviderId: 30,
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    WSYS: strategyWSYS,
  },
  ReserveAssets: {
    [eEthereumNetwork.rollux]: {
      DAI: "0x5B0aC6194499621630ddebb30c4aBE37037b30Ec",
      USDC: "0x368433CaC2A0B8D76E64681a9835502a1f2A8A30",
      WBTC: "0x2A4DC2e946b92AB4a1f7D62844EB237788F9056c",
      WETH: "0xaA1c53AFd099E415208F47FCFA2C880f659E6904",
      USDT: "0x28c9c7Fb3fE3104d2116Af26cC8eF7905547349c",
      WSYS: "0x4200000000000000000000000000000000000006",
    },
  },
  StkAaveProxy: {
    [eEthereumNetwork.rollux]: ZERO_ADDRESS,
  },
};

export default AaveMarket;
