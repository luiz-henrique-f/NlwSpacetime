import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-5xl font-bold text-gray-50">Hello</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
