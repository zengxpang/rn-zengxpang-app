import { RefreshControl, ScrollView, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { courseList } from '@/mock/home'
import Slides from '@/components/(tabs)/index/Slides'
import CoursesList from '@/components/(tabs)/index/CoursesList'
import { useState } from 'react'

const Index = () => {
  const router = useRouter()
  const {
    data: { recommendedCourses, likesCourses, introductoryCourses },
  } = courseList
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  const renderContent = () => {
    return (
      <>
        <Slides courses={recommendedCourses} />
        <CoursesList
          courses={likesCourses}
          cover={require('@/assets/infinity-3830496.jpg')}
          title="人气视频课程"
        />
        <CoursesList
          courses={introductoryCourses}
          cover={require('@/assets/infinity-11128752.jpg')}
          title="入门视频课程"
        />
      </>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} tintColor="#1f99b0" onRefresh={handleRefresh} />
      }
    >
      {renderContent()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    minHeight: '76%',
  },
})

export default Index
