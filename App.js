import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/Screens/HomeScreen';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    );
  }
}
