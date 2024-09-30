import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const OTPScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState('');
  const { confirmation } = route.params;

//   const verifyOTP = async () => {
//     try {
//       await confirmation.confirm(otp);
//       alert('OTP Verified!');
//       navigation.navigate('Home'); // Navigate to the home screen after verification
//     } catch (error) {
//       alert('Invalid OTP');
//     }
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />
      <Button title="Verify OTP"  />
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

export default OTPScreen;
