import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuapp.ionic',
  appName: 'TuApp',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '676397702282-4cag6bhnp6d2es6i1k7fl1htho3udu6u.apps.googleusercontent.com', // 🔴 Reemplázalo con tu Client ID de Google
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
