import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles';
const AuthForm = ({ email, setEmail, password, setPassword, isLogin, handleAuthentication, toggleLoginMode }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      
      <Text style={styles.toggleText} onPress={toggleLoginMode}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
};

export default AuthForm;
