export default function screenOptions() {
  return {
    title: '',
    headerTitleAlign: 'center', // 安卓标题居中
    animation: 'slide_from_right', // 安卓左右切屏
    headerTintColor: '#1f99b0', // 导航栏中文字、按钮、图标的颜色
    headerTitleStyle: {
      // 导航栏标题样式
      fontWeight: '400',
      fontSize: 16,
      color: '#2A2929',
    },
    headerBackButtonDisplayMode: 'minimal', // 设置返回按钮只显示箭头，不显示文字
  }
}
