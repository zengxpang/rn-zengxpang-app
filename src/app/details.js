import { Link, useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Details = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是详情页</Text>

      <Link style={styles.link} href="../">
        返回
      </Link>

      <TouchableOpacity onPress={() => router.navigate('./details')}>
        <Text style={styles.link}>再次跳转（navigate）</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./details')}>
        <Text style={styles.link}>强制推入（push）</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.link}>返回（back）</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f9df7',
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: '#1f99b0',
  },
})

export default Details
