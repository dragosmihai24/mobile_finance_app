import { StyleSheet, Text, View } from 'react-native';
import { userFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import SignInScreen from './screens/SignInScreen';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  else{
    return (
      <View style={styles.container}>
        <SignInScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
});
