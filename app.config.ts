import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-boilerplate",
  slug: "expo-boilerplate",
  version: "1.0.0",
  scheme: "expo-boilerplate",
  newArchEnabled: true,
  plugins: [
    [
      "expo-router",
      {
        root: "./src/app",
      },
    ],
    "expo-localization",
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
    reactCompiler: true,
    reactCanary: true,
  },
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
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
});
