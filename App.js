import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlexDemo } from './components/FlexDemo';
import { Human } from './components/Human/Human'
import { AgeCounter } from './components/AgeCounter/AgeCounter';
import { Child } from './components/Child/Child';


export default function App() {
  function hello(name) {
    Alert.alert("Hello " + name);
  }

  return (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1}}>
      <Child onPress={hello} />
    </SafeAreaView> 
  </SafeAreaProvider>  
)
         
}
