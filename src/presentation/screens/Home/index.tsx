import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Header />
        <Text>HomeScreen</Text>
        <Text>Lint and husky</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
