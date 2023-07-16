import { config } from "@onflow/fcl";

config()
  .put("accessNode.api", "http://localhost:8888") // This connects us to Flow TestNet
  .put('accessNode.api', 'https://rest-testnet.onflow.org') // This connects us to Flow TestNet
  // .put("discovery.wallet", "http://localhost:8701/fcl/authn/") // Allows us to connect to Blocto & Lilico Wallet
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn/') // Allows us to connect to Blocto & Lilico Wallet
  .put("app.detail.title", "Quill") // Will be the title when user clicks on wallet
  .put("app.detail.icon", "https://imgur.com/GsA9Y0W.png") // Will be the icon when user clicks on wallet
  .put("0xFungibleToken", "0x9a0766d93b6608b7") // Fungible Token Contract Address
  // .put("0xFungibleToken", "0xee82856bf20e2aa6") // Fungible Token Contract Address
  .put("0xFlowToken", "0x7e60df042a9c0868"); // Flow Token Contract Address
  // .put("0xFlowToken", "0x0ae53cb6e3f42a79"); // Flow Token Contract Address
