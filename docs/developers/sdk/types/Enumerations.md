---
id: Enumerations
title: Enumerations
---

# Enumerations

## Chains

The `Chains` enumeration represents a set of predefined blockchain networks used within the system. Each network is associated with a string value, which is the name of the blockchain or test network.

| **Name**            | **Value**             |
| ------------------- | --------------------- |
| `bitcoin`           | `'bitcoin'`           |
| `bitcoin_testnet`   | `'bitcoin_testnet'`   |
| `bitcoin_regtest`   | `'bitcoin_regtest'`   |
| `ethereum`          | `'ethereum'`          |
| `base`              | `'base'`              |
| `arbitrum`          | `'arbitrum'`          |
| `ethereum_sepolia`  | `'ethereum_sepolia'`  |
| `arbitrum_localnet` | `'arbitrum_localnet'` |
| `arbitrum_sepolia`  | `'arbitrum_sepolia'`  |
| `ethereum_localnet` | `'ethereum_localnet'` |
| `base_sepolia`      | `'base_sepolia'`      |
| `bera_testnet`      | `'bera_testnet'`      |
| `citrea_testnet`    | `'citrea_testnet'`    |

### Type: `Chain`

Chain is a type that represents the possible values of the `Chains` enumeration. Chain can have the above values defined in the `Chains` enumeration.

```ts
type Chain = keyof typeof Chains;
```
