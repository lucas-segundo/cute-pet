import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Header />
        <View className="mt-5">
          <SearchInput placeholder="Procure seu pet fofinho" />
        </View>
        <Text>Lint and husky</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
