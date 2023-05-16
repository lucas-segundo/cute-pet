import { Text, View } from 'react-native'
import Header from '../../components/Header'

const HomeScreen = () => {
  return (
    <View className="flex justify-center items-center h-full">
      <Header />
      <Text>HomeScreen</Text>
      <Text>Lint and husky</Text>
    </View>
  )
}

export default HomeScreen
