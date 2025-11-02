import AntDesign from '@expo/vector-icons/AntDesign'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function NetworkError(props) {
  return (
    <View style={styles.container}>
      <AntDesign name="alipay-circle" size={24} color="black" />
      <Text style={styles.title}>{props.title || 'something wrong'}</Text>
      <TouchableOpacity style={styles.reload} onPress={props.onReload}>
        <Text style={styles.label}>重新加载</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#999',
  },
  reload: {
    marginTop: 10,
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    color: '#fff',
    lineHeight: 40,
  },
})
