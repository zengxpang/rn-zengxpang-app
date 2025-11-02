import { useReducer } from 'react'

const initialState = {
  data: {},
  loading: true,
  error: false,
  refreshing: false,
}

const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'
const SET_DATA = 'SET_DATA'
const RELOAD_START = 'RELOAD_START'
const SET_REFRESH = 'SET_REFRESH'

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case RELOAD_START:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case SET_REFRESH:
      return {
        ...state,
        refreshing: action.payload,
      }
    default:
      return state
  }
}

export const useReduceFeatchData = () => {
  const { state, dispatch } = useReducer(reducer, initialState)

  const fetchData = async () => {
    try {
      const { data } = await get(url, params)
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: FETCH_ERROR,
      })
    }
  }

  const handleReload = async () => {
    dispatch({
      type: RELOAD_START,
    })
    await fetchData()
  }

  const handleRefresh = async () => {
    dispatch({
      type: SET_REFRESH,
      payload: true,
    })
    await fetchData()
  }

  const setData = (data) => {
    dispatch({
      type: SET_DATA,
      payload: data,
    })
  }

  useEffect(() => {
    fetchData()
  }, [url, JSON.stringify(params)])

  return {
    ...state,
    setData,
    onReload: handleReload,
    onRefresh: handleRefresh,
  }
}
