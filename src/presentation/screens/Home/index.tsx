import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from '../../components/Category'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Header />
        <View className="my-5">
          <SearchInput placeholder="Procure seu pet fofinho" />
        </View>
        <View>
          <Category />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
