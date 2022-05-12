## implementar em src/services/Firebase.js

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env';

let firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

## criar e testar arquivo .env (pasta raiz)

// opção A: instanciando variável por variável

API_KEY=myApiKey
AUTH_DOMAIN=myAuthDomain
DATABASE_URL=myDatabaseURL
PROJECT_ID=myProjectId
STORAGE_BUCKET=myStorageBucket
MESSAGING_SENDER_ID=myMessagingSenderId
APP_ID=my-myAppId
MEASUREMENT_ID=myMeasurementId

// opção B: instanciando uma variável tipo Array

FIREBASE_CONFIG={
  apiKey: "myApiKey",
  authDomain: "myAuthDomain",
  databaseURL: "myDatabaseURL",
  projectId: "myProjectId",
  storageBucket: "myStorageBucket",
  messagingSenderId: "myMessagingSenderId",
  appId: "myAppId",
  measurementId: "myMeasurementId"
}

## instalando e configurando o recurso do dotEnv:

yarn add react-native-dotenv

// incluindo o plugin no arquivo babel.config.js (pasta raiz)

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
      'react-native-reanimated/plugin',
    ],
  };
};
