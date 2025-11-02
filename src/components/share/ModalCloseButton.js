import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

/**
 * 模态页关闭按钮组件
 */
export default function ModalCloseButton() {
  const router = useRouter()
  return (
    <View style={styles.headerButton}>
      <TouchableOpacity onPress={() => router.dismiss()}>
        <MaterialCommunityIcons name="close" size={30} color="#1f99b0" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    width: 30,
    marginLeft: 3,
  },
})
