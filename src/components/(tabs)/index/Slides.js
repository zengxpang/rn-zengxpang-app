import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Image, Text } from 'react-native'
import { Link } from 'expo-router'

export default function Slides(props) {
  const { courses } = props

  const renderItem = ({ item, index }) => {
    return (
      <Link
        asChild
        href={{
          pathname: '/courses/[id]',
          params: {
            id: item.id,
          },
        }}
      >
        <TouchableWithoutFeedback>
          <View
            style={[
              styles.course,
              index === 0 ? styles.first : null,
              index === courses.length - 1 ? styles.last : null,
            ]}
          >
            <Image source={require('@/assets/infinity-8892245.jpg')} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.category}>{item.category.name}</Text>
              <View style={styles.userWrapper}>
                <Image source={require('@/assets/zengxpang.jpg')} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.nickName}>{item.user.nickName}</Text>
                  <Text style={styles.company} numberOfLines={2}>
                    {item.user.company}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Link>
    )
  }

  return (
    <View style={styles.slides}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  slides: {
    marginTop: 10,
    marginBottom: 16,
  },
  course: {
    marginRight: 8,
  },
  image: {
    width: 320,
    height: 145,
    borderRadius: 10,
  },
  content: {
    paddingLeft: 10,
  },
  name: {
    width: 305,
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 13,
  },
  category: {
    marginTop: 6,
    fontSize: 8,
  },
  userWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 10,
  },
  nickName: {
    fontSize: 11,
  },
  company: {
    width: 100,
    marginTop: 2,
    fontSize: 10,
    color: '#777',
  },
  first: {
    marginLeft: 10,
  },
  last: {
    marginRight: 10,
  },
})
