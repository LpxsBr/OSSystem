import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoBar from './src/components/InfoBar';
import Navbar from './src/components/navbar';
import DemandBox from './src/components/DemandBox';

export default function App() {
  return (
    <>
      <InfoBar />
      <Navbar />
      <View style={styles.container}>

        <View>
          <Text style={styles.container_title}>Últimas movimentações</Text>
        </View>

        <ScrollView
          style={styles.containerView}
          contentContainerStyle={{
            rowGap: 20,
            alignItems: 'center',
          }}>
            
          <DemandBox/>
          <DemandBox/>
          <DemandBox/>
          <DemandBox/>
          <DemandBox/>

        </ScrollView>

        <StatusBar style="auto" />
      </View>
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
