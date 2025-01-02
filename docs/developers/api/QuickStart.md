---
id: quickstart
---

# Quickstart

:::note  
Users can authenticate using Garden's `Auth` endpoints or the Garden `Dev Dashboard`.
:::

## 1. Authentication

### Nonce:

```bash
curl -X 'GET' \
  'https://evm-swapper-relay.onrender.com/auth/nonce' \
  -H 'accept: application/json'
```

### Verify:

```bash
curl -X 'POST' \
  'https://evm-swapper-relay.onrender.com/auth/verify' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "message": "beta.garden.finance wants you to sign in with your Ethereum account:\n0xDda1.........007394611D789EF789a9Aae5CF5\n\nGarden.fi\n\nURI: https://beta.garden.finance\nVersion: 1\nChain ID: 11155111\nNonce: ccecfc7e76a9c1f3d60ed7d7a7f12af7522714ad6e1c3a34980118d0d7866dbb\nIssued At: 2024-12-31T12:07:23.770Z\nNot Before: 2024-12-31T12:12:23.365Z",
  "signature": "0x966de683f1b41097bf5212a0c98a4f422df76b462a81ef45225a9f13bf83c643054126472d1045537f47e26a1f0a3b166e1c46a6a64255044db502e5975cbc691c",
  "nonce": "b8bc718d6af38a0d2cac5085c53f617a52e590b0ff4ad2c4abb0825e9cc39079"
}'
```

