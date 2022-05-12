import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../services/Firebase';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);


  // Logar o Usuário
  
  async function signIn(email, password) {
    setLoadingAuth(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async(value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: value.user.email
        }
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error) => {
      alert(error.code)
      setLoadingAuth(false);
    })
  }

  // Cadastrar Usuário
  
  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        saldo: 0,
        nome: nome
      })
      .then(() => {
        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email,
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
      .catch((error) => {
        alert(error.code)
        setLoadingAuth(false);
      })  
    })
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  // Deslogar Usuário

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider> 
  )
}

export default AuthProvider;