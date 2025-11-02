import { View, Text, StyleSheet } from 'react-native'

const Teacher = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这是设置页</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f9df7',
  },
})

export default Teacher
