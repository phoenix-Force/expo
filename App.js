import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView} from 'react-native';
import CarItem from './components/CarItem'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarItem />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
