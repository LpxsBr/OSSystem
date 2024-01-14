import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoBar from './src/components/InfoBar';
import Navbar from './src/components/navbar';
import DemandBox from './src/components/DemandBox';
import Demands from './src/Screens/Demands';

export default function App() {
  return (
    <>
      {/* <InfoBar /> */}
      <Navbar />
      <Demands />
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  containerView: {
    flex: 1,
    paddingVertical: 20,
    height: 200
  },

  container_title: {
    fontSize: 15
  },

});
