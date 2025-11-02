import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
  return <Image style={styles.logo} contentFit="contain" source={require('@/assets/zengxpang.jpg')} />
}

/**
 * 导航栏按钮组件
 */
function HeaderButton(props) {
  const { name, ...rest } = props
  return (
    <Link asChild {...rest}>
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#1f99b0" name={name} />
      </TouchableOpacity>
    </Link>
  )
}

export default function tabOptions() {
  return {
    headerTitleAlign: 'center',
    headerTitle: (props) => <LogoTitle {...props} />,
    headerLeft: () => <HeaderButton name="bell" href="/articles" style={styles.headerButton} />,
    headerRight: () => (
      <>
        <HeaderButton name="magnifier" href="/search" style={[styles.searchButton, styles.headerButton]} />
        <HeaderButton name="options" href="/settings" style={styles.headerButton} />
      </>
    ),
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 135,
    height: 35,
  },
  headerButton: {
    marginHorizontal: 8,
  },
  searchButton: {
    marginRight: 15,
  },
})
