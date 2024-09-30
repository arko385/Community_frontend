import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import firebase from '../firebaseConfig';

const SignupScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

//   const sendOTP = async () => {
//     try {
//       const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
//       navigation.navigate('OTP', { confirmation });
//     } catch (error) {
//       alert('Failed to send OTP. Please try again.');
//     }
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Send OTP"  />
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
});

export default SignupScreen;
