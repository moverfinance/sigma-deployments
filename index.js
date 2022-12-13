module.exports = async (network) => {
  const networkName = network || "arbitrum";

  return {
    artifacts: {
      Amm: require("./artifacts/Amm.json"),
      AmmFactory: require("./artifacts/AmmFactory.json"),
      BaseToken: require("./artifacts/BaseToken.json"),
      ChainlinkPriceFeed: require("./artifacts/ChainlinkPriceFeed.json"),
      ClearingHouse: require("./artifacts/ClearingHouse.json"),
      ClearingHouseConfig: require("./artifacts/ClearingHouseConfig.json"),
      EmergencyPriceFeed: require("./artifacts/EmergencyPriceFeed.json"),
      ERC20Mock: require("./artifacts/ERC20Mock.json"),
      LimitOrderBook: require("./artifacts/LimitOrderBook.json"),
      LimitOrderRewardVault: require("./artifacts/LimitOrderRewardVault.json"),
      Liquidation: require("./artifacts/Liquidation.json"),
      LiquidityProvider: require("./artifacts/LiquidityProvider.json"),
      MarketTaker: require("./artifacts/MarketTaker.json"),
      PositionMgmt: require("./artifacts/PositionMgmt.json"),
      QuoteToken: require("./artifacts/QuoteToken.json"),
      SigmaReader: require("./artifacts/SigmaReader.json"),
      SigmaReferrer: require("./artifacts/SigmaReferrer.json"),
      Vault: require("./artifacts/Vault.json"),
    },
    contracts: require(`./contracts/${networkName}.json`),
  };
};
