import { StyleSheet } from 'react-native';
import InfoBar from './src/components/InfoBar';
import Navbar from './src/components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          {/* some components */}
          <InfoBar />
          <Navbar />
          {/* route component */}
          <Routes />
        </NavigationContainer>
      </AuthProvider>
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
