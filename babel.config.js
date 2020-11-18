module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@themes': './src/themes',
          '@assets': './src/assets',
          '@config': './src/config',
          '@navigator': './src/navigators',
          '@shimmer': './src/shimmer',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
      },
    ],
  ],
};
