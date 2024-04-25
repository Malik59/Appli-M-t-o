import { Image, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlexDemo } from './components/FlexDemo';
import { Human } from './components/Human/Human'
import { AgeCounter } from './components/AgeCounter/AgeCounter';



export default function App() {
  return (
  <SafeAreaProvider>
    <SafeAreaView>
      <AgeCounter></AgeCounter>
    </SafeAreaView> 
  </SafeAreaProvider>  
)
         
}
