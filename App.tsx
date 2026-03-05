import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

//Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordlength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .min(16, 'Should be max of 16 characters')
    .required("Password field can't be empty"),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: String, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterindex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterindex);
    }

    return result;
  };

  // clear form data
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)

  };

  return (
    <View>
      <Text style={{ color: 'white' }}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
