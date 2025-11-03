import { articlesList } from '@/mock/articles'
import { Link } from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  RefreshControl,
  Image,
} from 'react-native'
import { useState } from 'react'
import NoData from '@/components/share/NoData'

const Index = () => {
  const {
    data: { articles },
  } = articlesList

  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  const renderSeparator = () => <View style={styles.separator} />

  const renderItem = ({ item }) => {
    const logo = require('@/assets/zengxpang.jpg')
    return (
      <Link
        asChild
        href={{
          pathname: '/articles/[id]',
          params: {
            id: item.id,
          },
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.item}>
            <Image style={styles.image} source={logo} />
            <View style={styles.titleWrapper}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.createdAt}>{item.createdAt}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Link>
    )
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={articles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#1f99b0" />
      }
      ListEmptyComponent={<NoData />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  item: {
    padding: 5,
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  image: {
    alignSelf: 'center',
    height: 70,
    width: 70,
  },
  titleWrapper: {
    flex: 1,
    paddingRight: 8,
    backgroundColor: 'transparent',
  },
  title: {
    marginTop: 18,
    fontSize: 12,
    fontWeight: '300',
    height: 40,
    lineHeight: 18,
    color: '#333',
  },
  createdAt: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '300',
    color: '#555',
  },
  separator: {
    marginLeft: 15,
    marginRight: 0,
    height: 1.2,
    backgroundColor: '#E7DFD3',
  },
})

export default Index
