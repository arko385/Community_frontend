import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import firebase from '../firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const loginUser = async () => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       alert('Logged in!');
//       navigation.navigate('Home');
//     } catch (error) {
//       alert('Login failed. Please check your credentials.');
//     }
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login"  />
      <Text style={styles.text}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
