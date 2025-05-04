// metro.config.js
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { resolve: defaultResolve } = require("metro-resolver");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true,
});

// allow .mjs files
config.resolver.sourceExts.push("mjs");

// config.resolver.unstable_enablePackageExports = false

// // grab Metro’s resolver (custom or default)
// const originalResolve = config.resolver.resolveRequest || defaultResolve

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // 1) Let Metro do its normal resolution
  const resolution = context.resolveRequest(context, moduleName, platform);
  let finalPath = resolution?.filePath;

  // 2) If it pointed into the CJS build of @tamagui/web, rewrite to ESM
  const cjsMarker = path.join("node_modules", "@tamagui", "web", "dist", "cjs");
  if (finalPath && finalPath.includes(cjsMarker)) {
    finalPath = finalPath.replace(
      path.join("dist", "cjs"),
      path.join("dist", "esm")
    );
    // resolution.filePath = finalPath;
  }

  // 3) (Optional) Log only when resolving the theme hook
  if (moduleName.includes("useThemeState")) {
    console.log(
      `[metro] from:`.padEnd(12),
      context.originModulePath,
      `\n        import:`.padEnd(11),
      moduleName,
    );
  }

  return resolution;
};


module.exports = config;
