import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { TextInput } from 'react-native-paper';

export default function CustomInput({ label, secureTextEntry, setValue, value, left, right}) {
  return (
    <View>
        <TextInput
        mode="outlined"
        style={styles.input}
        underlineColor='#2C91C4ff'
        activeUnderlineColor='#2DA8BFff'
        outlineColor='#2C91C4ff'
        activeOutlineColor='#2DA8BFff'
        label={label}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
        left={left}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        minWidth: 250,
        maxWidth: 250,
        margin: 10,
    },
})