import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-iblack">Lousssss!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }}>
        home
      </Link>
    </View>
  )
}
