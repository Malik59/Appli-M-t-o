import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlexDemo } from './components/FlexDemo';



export default function App() {
  return (
  <SafeAreaProvider>
    <SafeAreaView style= {{ backgroundColor: 'black', flex: 1}}>
      <FlexDemo/>
    </SafeAreaView> 
  </SafeAreaProvider>  
)
         
}
