import { SimpleLineIcons } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'

export default function NoData() {
  return (
    <View style={styles.notice}>
      <SimpleLineIcons name="drawer" size={160} color="#ddd" />
      <Text style={styles.noticeMsg}>暂无数据</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  notice: {
    height: 500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  noticeMsg: {
    color: '#999',
  },
})
