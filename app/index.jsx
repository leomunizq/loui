import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-pblack">Lousssss!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        proifle
      </Link>
    </View>
  )
}
