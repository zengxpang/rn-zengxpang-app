import { SimpleLineIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'
import { Platform } from 'react-native'

/**
 * TabBar图标组件
 */
function TabBarIcon(props) {
  return <SimpleLineIcons size={25} {...props} />
}

export default function Layout() {
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs tintColor="#1f99b0" disableTransparentOnScrollEdge>
        <NativeTabs.Trigger name="index">
          <Label>发现</Label>
          <Icon sf={{ default: 'play.house', selected: 'play.house.fill' }} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="video">
          <Label>视频课程</Label>
          <Icon sf={{ default: 'video', selected: 'video.fill' }} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="user">
          <Label>我的</Label>
          <Icon sf={{ default: 'play.house', selected: 'play.house.fill' }} />
        </NativeTabs.Trigger>
      </NativeTabs>
    )
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1f99b0',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '发现',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="compass" />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: '视频课程',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="camrecorder" />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="user" />,
        }}
      />
    </Tabs>
  )
}
