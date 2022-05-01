import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
export default function CustomButton({ children, mode, onPress }) {
  return (
    <View>
        <Button 
        children={children}
        mode={mode}
        onPress={onPress}

        style={styles.button}
        labelStyle={styles.label}
        compact={true} 
        color="#2C91C4ff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        maxHeight: 60,
        minWidth: 250,
        maxWidth: 250,
        margin: 10,

    },

label:{
        textAlign: "center",
        fontSize: 17
    }
});