import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const Course = () => {
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>这是课程页</Text>
      <Text style={styles.info}>课程ID：{id}</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.setOptions({
            title: '课程太好了！',
          })
        }
      >
        <Text>修改标题</Text>
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
  info: {
    marginTop: 20,
    fontSize: 20,
    color: '#67c1b5',
  },
})

export default Course
