---
id: quickstart
---

# Quickstart  

## What you’ll need before we start  

- **WBTC/BTC balance** on testnet (we’ll provide testnet funds—just ask).  
- **SepoliaETH** for gas fees on Sepolia.  
- **A BTC wallet** supporting testnet4 (we recommend Unisat).  
- **wagmi** already set up in your dApp.  
- **A bit of patience**—just in case!  

---

We’ve Got React Hooks to Make Integration Easy  

Add Supported Testnets to Your `wagmi` Config  
[Link to Wallet Config](#).  

---

### Wrap your app with `GardenProvider`  
This handles swap secrets for HTLCs and ensures transactions complete even if the user reconnects later.  

#### Example: `main.tsx`  

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GardenProvider } from '@gardenfi/react-hooks';
import { wagmiConfig } from './config/wagmi.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={new QueryClient()}>
        <GardenProvider config={{ ...yourGardenConfig }}>
          <App />
        </GardenProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
```

## Integrate swap logic into your component  

### Example Code  

```tsx 
import { useGarden } from '@gardenfi/react-hooks';

const { initializeSecretManager, swapAndInitiate, getQuote } = useGarden();

const quote = await getQuote({
  fromAsset: inputToken,
  toAsset: outputToken,
  amount: sendAmount,
});

const [_strategy, quoteAmount] = Object.entries(quote.val.quotes)[0];

const secretManager = await initializeSecretManager();

if (secretManager.ok && secretManager.val.getMasterPrivKey()) {
  const res = await swapAndInitiate({
    fromAsset: inputToken,
    toAsset: outputToken,
    sendAmount: sendAmount.toString(),
    receiveAmount: quoteAmount.toString(),
    additionalData: { btcAddress, strategyId: _strategy },
  }); //creates order and initiates the tx if source chain is EVM

}
```

#### Bitcoin as source chain

```tsx
import {isBitcoin} from "@gardenfi/orderbook"

if (isBitcoin(res.val.source_swap.chain)) {
      const bitcoinAddress = res.val.source_swap.swap_id;
        //user needs to fund the bitcoinAddress
      }
```

Once the user funds the generated Bitcoin address, our backend will detect the transaction and automatically complete the swap.

:::note  
Heads-up: The client needs to active (user needs to stay on app) during the process. If they leave, the transaction will pause and resume when they’re back.  
:::  

And that’s it! 🎉 Now, wait for the transaction to complete.  

### Common Questions

#### What’s the secret manager for?  
It simplifies the complexity of atomic swaps. By generating and managing secrets/secret hashes via a MasterKey, the `GardenProvider` takes care of everything securely, using `localStorage` to store and retrieve secrets.  

#### What if `swapAndInitiate` fails?  
No worries! Occasionally initiating on EVM testnets (fund issues, gas, etc.). 
Use the `evmInitiate` from `useGarden` hook to re-initiate the swap. 
 
```ts
evmInitiate?: (order: MatchedOrder) => AsyncResult<MatchedOrder, string>;
```

#### How can I check order status?  
You can use the `orderBook` from `useGarden` to fetch order details:  

```tsx
const { orderBook } = useGarden();

const fetchOrders = async () => {
  const res = await orderBook.fetchOrders(true, false, { per_page: 4 });
};
```

For detailed examples, check out the Cookbook. And if you ever get stuck, we’re just a message away.

Happy swapping! 🚀