import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AlphaZone from './components/AlphaZone';

export default function App() {
  return (
    <View style={styles.container}>
      <AlphaZone />
      <Text>Bienvenue sur L'app YaoB Alpha29052023</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 100,
  },
});
