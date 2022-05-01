import { View, StyleSheet, Image, useWindowDimensions, Text, Linking } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import TitleLogo from '../../assets/images/title.png'
//import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const {height} = useWindowDimensions();
  
  return (
    <View style={styles.root}>

      <Image 
        source={TitleLogo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <Text style={[styles.textDefault, {color: "grey"}]}>Please authenticate</Text>

      <CustomInput 
        label="E-mail"
        value={email}
        setValue={setEmail}
        left={<TextInput.Icon name="account-outline"/>}

      />

      <CustomInput
        label="Password"
        secureTextEntry={true}
        value={pass}
        setValue={setPass}
        left={<TextInput.Icon name="key-outline"/>}
        right={<TextInput.Icon name="eye"/>}
      />

      <CustomButton
        children="Sign In"
        mode="contained"
        onPress={() => {}}
      />

      <View style={styles.registerArea}>
        <Text style={[styles.textDefault, {color: "gray"}]}>Don't have an account?</Text>
        <CustomButton
          children="Sign Up"
          mode="text"
          onPress={()=>{}}
        />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 30,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    
    logo: {
        minWidth: 200,
        minHeight: 200,
        maxWidth: 200,
        maxHeight: 200,
    },

    registerArea: {
      alignItems: "center",
      flexDirection: "column",
      //backgroundColor: "#F6F6F6",
      padding: 10,
      margin: 10,
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: "#fff",
      width:"100%"
    },

    textDefault: {
      // fontFamily: "Poppins_400Regular",
      textAlign: 'center',
      fontSize: 17
    }

});


