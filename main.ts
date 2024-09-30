import "jsr:@std/dotenv/load";
import { apiClient } from "./src/api.ts";
import { MetadataApi } from "./gen/api/apis/MetadataApi.ts";
import { StandardsApi } from "./gen/api/apis/StandardsApi.ts";
import { WalletApi } from "./gen/api/apis/WalletApi.ts";
import {fixNumber, getTokenInfo} from "./src/utils.ts";
import { ShortcutsApi } from "./gen/api/index.ts";
import { ethers } from "ethers";

const metaClient = apiClient(MetadataApi);

// const networks = await metaClient.networksControllerNetworks();
// console.log({ networks })

// const protocols = await metaClient.protocolsControllerFindAll();
// console.log({ protocols });

/*const tokens = await metaClient.tokensControllerTokens({
  protocolSlug: "aave-v2",
  underlyingTokens:
    ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"],
  primaryAddress: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
  address: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
  chainId: 1,
  type: "defi",
  page: 1,
});
console.log({tokens});*/

/*const aaveTokens = await metaClient.tokensControllerTokens({
  type: 'defi',
  page: 1
})
console.log({aaveTokens})*/

/*
const findtoken = await metaClient.tokensControllerTokens({
  type: "defi",
  chainId: 1,
  address: "0x02246583870b36be0fef2819e1d3a771d6c07546"
})

console.log({findtoken})*/

// console.log(await getTokenInfo("0x601eb48Eeb8BAabd197D279919D55303f49f319D"));
//console.log(await getTokenInfo("0x06325440d014e39736583c165c2963ba99faf14e"));
// console.log(await getTokenInfo("0x6b175474e89094c44da98b954eedeac495271d0f"));

/*const shortcutsClient = apiClient(ShortcutsApi);

const amountIn = ethers.parseEther("1.0");
console.log({ amountIn });

const daiToEth = await shortcutsClient.quoteControllerQuote({
  chainId: 1,
  fromAddress: "0xBbebEa9812971a5C2B7d99a99E7d8b4d5Fda7091",
  tokenOut: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // ETH
  tokenIn: "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI
  amountIn: "1000000000000000000",
  fee: 100,
  feeReceiver: "0x220866B1A2219f40e72f5c628B65D54268cA3A9D",
  disableRFQs: false,
});

console.log(daiToEth);*/


const walletClient = apiClient(WalletApi);
const balances = await walletClient.walletControllerWalletBalances({
  chainId: 1,
  eoaAddress: "0xBbebEa9812971a5C2B7d99a99E7d8b4d5Fda7091",
  useEoa: true,
});
 console.log({balances})



for (let i = 0; i < balances.length; i++) {
  const balance = balances[i];
/*  if(balance.symbol !== "SDP"){
    continue;
  }*/

  if (balance.token === "eth") {
    balance.symbol = "ETH";
    balance.decimals = 18;
  } else {
    console.log(`Fetching info for token with address ${balance.token}`);
    const info = await getTokenInfo(balance.token);
    if (info) {
      balance.decimals = 18;
      balance.symbol = info.symbol || `Unknown: ${balance.token}`;
    }
  }
}

console.log("Account balances:")
for (let i = 0; i < balances.length; i++) {
  const balance = balances[i]
  let formatted = fixNumber(balance.amount);
  try {
    formatted = ethers.formatUnits(formatted, 18);
  } catch (e) {
    console.log(e);
  }
  console.log(`${balance.symbol}: ${formatted}`);
}

