module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          appConstants: './src/appConstants',
          hooks: './src/hooks',
          models: './src/models',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          styles: './src/styles',
          utils: './src/utils',
          types: './src/types',
          i18n: './src/i18n',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: ['module:@react-native/babel-preset'],
};
