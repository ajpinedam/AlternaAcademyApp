import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FlatListBasics from './components/FlatListBasics/FlatListBasics';

export default function App() {
  return (
    <View style={styles.container}>
            <AlternaHeader />

            <FlatListBasics />

            <AlternaFooter />
      <StatusBar style="auto" />
    </View>
  );
}

export function AlternaFooter() {
  return (
  <Button title="Ir a la pagina" onPress={() => {}} />)    
}

export function AlternaHeader() {
  return (
    <View>
      <Text>Alterna Academy</Text>
      <Text>Vivimos de la excelencia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
