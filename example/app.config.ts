import { ExpoConfig } from "expo/config";

export default (): ExpoConfig => {
  return {
    name: "expo-chucker-example",
    slug: "expo-chucker-example",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.chucker.example",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.chucker.example",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["../app.plugin.js"],
  };
};
