import {
  IAaveConfiguration,
  eEthereumNetwork,
} from "../../helpers/types";

import { CommonsConfig } from "./commons";
import {
  strategyDAI,
  strategyUSDC,
  strategyBTC,
  strategyETH,
  strategyUSDT,
  strategyWSYS,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveMarket: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: "Testnet Aave Market",
  ProviderId: 8080,
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    BTC: strategyBTC,
    ETH: strategyETH,
    USDT: strategyUSDT,
    WSYS: strategyWSYS,
  },
  ReserveAssets: {
    [eEthereumNetwork.rollux]: {
      DAI: "0x5B0aC6194499621630ddebb30c4aBE37037b30Ec",
      USDC: "0x368433CaC2A0B8D76E64681a9835502a1f2A8A30",
      BTC: "0x2A4DC2e946b92AB4a1f7D62844EB237788F9056c",
      ETH: "0xaA1c53AFd099E415208F47FCFA2C880f659E6904",
      USDT: "0x28c9c7Fb3fE3104d2116Af26cC8eF7905547349c",
      WSYS: "0x4200000000000000000000000000000000000006",
    },
  },
};

export default AaveMarket;
