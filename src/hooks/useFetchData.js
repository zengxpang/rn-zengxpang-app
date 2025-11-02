import { useEffect, useState } from 'react'
import { get } from '@/utils/request'

export const useFetchData = (url, params = {}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const fetchData = async () => {
    try {
      const { data } = await get(url, params)
      setData(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleReload = async () => {
    setLoading(true)
    setError(false)
    await fetchData()
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [url, JSON.stringify(params)])

  return {
    data,
    setData,
    error,
    loading,
    refreshing,
    onReload: handleReload,
    onRefresh: handleRefresh,
  }
}
