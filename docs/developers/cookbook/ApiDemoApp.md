---
id: api-demo-app
---
# API Demo App

:::note
This guide accompanies the [gardenfi/api-demo-dapp](https://github.com/catalogfi/api-demo-dapp) and is intended solely for learning purposes, and not for production use.
:::

## Introduction

This guide demonstrates how to use the [Garden API](../api/garden-api) to develop a basic dApp for swapping BTC (testnet4) to WBTC (Ethereum Sepolia). The user interface looks like this:

![API Demo APP UI](./images/api-demo-ui.webp)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/catalogfi/api-demo-dapp.git
   cd api-demo-dapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Authentication

The authentication section provides a detailed walkthrough of how to securely authenticate users using Garden’s Auth API, leveraging the Sign-In with Ethereum (SIWE) protocol. This method ensures seamless and trustless authentication without compromising user security. Below, we explain the flow of the authentication process and how each step guarantees integrity and security.

### Overview

The Auth API facilitates authentication by:

1. Generating a unique, one-time-use nonce as a challenge.
2. Allowing users to sign the nonce with their Ethereum wallet.
3. Verifying the signed message to confirm the user’s identity.

### Step-by-Step Flow

### 1. Requesting a nonce

The first step in the authentication flow is to generate a unique, single-use nonce for the client. The `/auth/nonce` responds with a unique nonce

``` 
{ 
    "status": "Ok", 
    "result": "d2ea8a7ce1d18f50db51de1f7522e45706330cf3a2dcf269930b5d38b5461fcb" 
} 
```

### 2. Signing the nonce

Once the client receives the nonce, the user signs it with their Ethereum private key through their wallet. This step leverages the SIWE protocol to embed the nonce into a structured message containing metadata, such as domain and timestamp.

Example Message:

![SIWE Message](./images/auth_message.png)

The signed message ensures that:

- The nonce is unique and prevents replay attacks.
- The user’s private key remains secure as it never leaves their wallet.

### 3. Verifying the signed message

The signed message is sent back to `/auth/verify` for verification. The server validates the signature and confirms the user’s identity without ever accessing their private key.

```
{
  "status": "Ok",
  "result": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.CwQHc49-QhP9O-d78b6oAAGv1FlMY_MBOxxr06vNPSgTSOx40HpNqTTlLwFExC-U-KajJZ2izwSKVhNlD2DqTf-V2M-wQTZsG9Ucqg-QZ-V_L02ePyyJ8mn5vJUtTfxmf_WyytvjxIRkPqKkPmu3tJl00cRVt4kFiD_F_XRhPT8QNmEodf5Q9jcByq5J3eyVgfge4wZA9V5nYBz9N-i_AcDttXQmsxtzvthlwszi5Sscw4yIbw1lnz_fHxuK6-lpoIh8IbOdPfGMlg_Mc0AzVObrhMKbT0OnNfbtk9tI0vErzOnoD7A2vDdBz01XccFZ36txcxQ95JZ-_WNs7g"
}
```

## Order creation

The order creation process in Garden allows users to initiate cross-chain swaps using a seamless, secure, and trustless mechanism.

### Overview

When a user is ready to create an order, the process begins with retrieving a price quote based on the user’s selected order pair, which consists of the source chain, source asset, destination chain, destination asset, and the amount to be swapped. After receiving the quote, the user confirms the order by signing it through their wallet. The order is then attested by Garden's API and validated, followed by the final order creation via the /gasless/order endpoint.

### Step-by-Step Flow

### 1. Requesting a Quote

The first step in the order creation process is for the client to request a price quote from the /price endpoint. Based on the selected order pair (source_chain:source_asset::destination_chain:destination_asset, and amount), the API responds with the following details:

- **Input token price** 
- **Output token price**
- **Array of quotes** 

### 2. Signing the Order

Once the client has reviewed the quote, the user confirms the order by signing it using their wallet. This ensures that the order creation process is secure and the user is intentionally initiating the swap.

To confirm the order, the client signs the quote details using their private key, which guarantees the legitimacy of the action and the user's consent to the swap.

### 3. Attesting the quote

### 4. Creating the Order

## Order Progress
