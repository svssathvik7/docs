---
id: quickstart
title: Quickstart
---

- OrderbookAPI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InstallAlert from "./\_install-alert.mdx";

## 1. Installation

<InstallAlert/>

<Tabs>  

<TabItem value="npm" label="npm">  

```bash
npm install @gardenfi/core @gardenfi/utils
```  

</TabItem>  

<TabItem value="yarn" label="yarn">  

```bash
yarn add @gardenfi/core @gardenfi/utils
```  

</TabItem>  

<TabItem value="pnpm" label="pnpm">  

```bash
pnpm add @gardenfi/core @gardenfi/utils
```  

</TabItem>  

</Tabs>  

**Additional dependencies**

<Tabs>  

<TabItem value="npm" label="npm">  

```bash
npm install viem @catalogfi/wallets
```  

</TabItem>  

<TabItem value="yarn" label="yarn">  

```bash
yarn add viem @catalogfi/wallets
```  

</TabItem>  

<TabItem value="pnpm" label="pnpm">  

```bash
pnpm add viem @catalogfi/wallets
```  

</TabItem>  

</Tabs>  

## 2. Initialize dependencies

```typescript
import { Siwe } from "@gardenfi/core";
import { BitcoinProvider, BitcoinNetwork } from "@catalogfi/wallets";
import { privateKeyToAccount, createWalletClient, http, sepolia } from "viem";

// Ethereum Wallet Setup
const account = privateKeyToAccount(privateKey());
const ethereumWalletClient = createWalletClient({
  account,
  chain: sepolia,
  transport: http(),
});

// Garden API Clients
// 
const ORDERBOOK_API = https://orderbookv2.garden.finance/

const auth = new Siwe(new URL(ORDERBOOK_API), ethereumWalletClient, {
  store: new MemoryStorage(),
});

// 
const QUOTE_API = https://pricev2.garden.finance/
const quote = new Quote(QUOTE_API);

const bitcoinProvider = new BitcoinProvider(
  BitcoinNetwork.Testnet,
  bitcoinProviderApi
);
```

---

## 3. Set up wallets and secret manager

```typescript
import { BitcoinWallet } from "@catalogfi/wallets";

// initialize secret manager for handling atomic swap secrets and hashes
const result = await SecretManager.fromWalletClient(ethereumWalletClient);

if (result.error) {
  throw new Error(result.error);
}
const secretManager = result.val;

// create an in-memory Bitcoin wallet for handling Bitcoin operations
const btcWallet = BitcoinWallet.fromPrivateKey(
  secretManager.getMasterPrivKey(),
  bitcoinProvider
);
```

---

## 4. Configure Garden core  

Initialize the **Garden** instance with the required components.  

```typescript
import { Garden } from "@gardenfi/core";

const garden = new Garden({
    environment: Environment.TESTNET,
    evmWallet: arbitrumWalletClient,
  });
```

## 5. Create a swap

```typescript

// Try printing out the SupportedAssets object to see the other assets you can use
const orderConfig = {
  fromAsset:
    SupportedAssets.testnet
      .ethereum_sepolia_WBTC,
  toAsset: SupportedAssets.testnet.bitcoin_BTC,
  sendAmount: "1000000", // 0.01 Bitcoin
};

// helper function to create the order pair
const orderPair = constructOrderpair(
  orderConfig.fromAsset,
  orderConfig.toAsset
);

// Get the quote for the send amount and order pair
const quoteResult = await quote.getQuote(orderPair, +orderConfig.sendAmount);
if (quoteResult.error) {
  throw new Error(quoteResult.error);
}

// choose a quote
const firstQuote = Object.entries(quoteResult.val.quotes)[0];

const [_strategyId, quoteAmount] = firstQuote;

let swapParams: SwapParams = {
  ...orderConfig,
  receiveAmount: quoteAmount,
  additionalData: {
    strategyId: _strategyId,
    // this is where the btc will be sent to
    btcAddress: await btcWallet.getAddress(),
  },
};

console.log("Creating an order...\n");

// This creates the order on chain and then returns the matched order
const swapResult = await garden.swap(swapParams);

if (swapResult.error) {
  throw new Error(swapResult.error);
}

console.log("Order created with id", swapResult.val.create_order.create_id);
```

## 6. 