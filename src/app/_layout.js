import { Stack } from 'expo-router'
import tabOptions from '@/options/tabOptions'
import screenOptions from '@/options/screenOptions'
import ModalCloseButton from '@/components/share/ModalCloseButton'

export default function Layout() {
  return (
    <Stack screenOptions={screenOptions}>
      {/* Tabs */}
      {/* 不显示Stack自带的导航栏，因为在Tabs中设置了导航栏 */}
      <Stack.Screen name="(tabs)" options={tabOptions} />

      {/* Card */}
      <Stack.Screen
        name="article/index"
        options={{
          title: '通知',
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: '设置',
        }}
      />
      <Stack.Screen
        name="courses/[id]"
        options={({ route }) => ({
          title: route.params?.title || '课程详情',
        })}
      />
      <Stack.Screen
        name="search/index"
        options={{
          title: '搜索',
        }}
      />

      {/* Modal */}
      <Stack.Screen
        name="teachers/[id]"
        options={{
          presentation: 'modal',
          title: '老师详情',
          headerLeft: () => <ModalCloseButton />,
          animation: 'slide_from_bottom', // 兼容安卓
        }}
      />
    </Stack>
  )
}
