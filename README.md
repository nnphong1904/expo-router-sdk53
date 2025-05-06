The log I got from metro with the exports package enabled: 

```
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/esm/index.native.js 
        import: ./hooks/useThemeState.native.js
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/index.native.js 
        import: ./hooks/useThemeState
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/esm/hooks/useTheme.native.js 
        import: ./useThemeState.native.js
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/esm/views/Theme.native.js 
        import: ../hooks/useThemeState.native.js
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/hooks/useThemeName.native.js 
        import: ./useThemeState
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/views/Theme.native.js 
        import: ../hooks/useThemeState
```

But we expected it only the cjs be resolved: 
```
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/index.native.js 
        import: ./hooks/useThemeState
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/hooks/useThemeName.native.js 
        import: ./useThemeState
[metro] from: /Users/phongnguyen/Developer/tamaguis/expo-router/node_modules/@tamagui/web/dist/cjs/views/Theme.native.js 
        import: ../hooks/useThemeState
```
