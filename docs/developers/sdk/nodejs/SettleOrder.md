---
id: settle-order
---

# Settle order

Redeeming and refunding ensure the completion of swaps or the recovery of funds, depending on the swap's state.  

After creating an order (or multiple orders), you can settle them on the destination chain using the `execute` method from the Garden instance. This method automatically polls the order book for orders pending settlement on the destination chain and submits them on-chain—without requiring users to pay gas fees.  

```typescript
await garden.execute();
```

For a detailed understanding of the various and how they progress, refer to the [**Order Lifecycle**](../../core/OrderLifecycle.md) documentation.

:::info  
For detailed examples and troubleshooting tips, refer to the [Cookbook](../cookbook/Cookbook.md) or reach out to us.  
:::
