---
id: sdk
---

import DocCardList from '@theme/DocCardList';

# Garden SDK
The **Garden SDK** is a set of typescript packages that allow you to bridge Bitcoin to EVM-based chains. It is an abstraction over the Garden APIs, allowing developers to integrate Garden components into their dApps easily.

Want to know how everything works internally? Check out [Core Concepts](./CoreConcepts.md).

## Features
- **Cross-chain Swaps**: Swap assets between Bitcoin and EVM-based chains.
- **OTAs**: Create one-time Bitcoin accounts using your Web3 providers, giving you access to all Bitcoin wallet features.
### Integrating Garden SDK v2

Integrating Garden SDK v2 into your dApp should feel as smooth as planting seeds in fertile soil (pun intended). Let’s get you up and running in no time.  

---

### The Big Picture: How It Works  

At its core, Garden swaps use atomic swaps via **HTLCs** (Hashed Timelock Contracts). This means:  
- The user starts a swap on the **source chain**.  
- The swap completes on the **destination chain**.  

---

#### What’s New in v2?  
We’ve reduced user dependencies and improved the overall experience, making it simpler and more intuitive for both developers and users alike.