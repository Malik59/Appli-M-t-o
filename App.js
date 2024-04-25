import { Image, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlexDemo } from './components/FlexDemo';
import { Human } from './components/Human/Human'



export default function App() {
  return (
  <SafeAreaProvider>
    <SafeAreaView>
      <Human firstName={'James'} lastName={'Bond'} age={42}/>
    </SafeAreaView> 
  </SafeAreaProvider>  
)
         
}
