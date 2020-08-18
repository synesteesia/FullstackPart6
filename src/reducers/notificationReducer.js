let previousNotification = ''
const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return `you added '${action.data}'`
    case 'VOTENOTE':
      return `you voted '${action.data}'`
    case 'EMPTY':
      return ''
    default:
      return state
  }
}

export const toggleNotification = (content, timeout) => {
  return async dispatch => {
    clearTimeout(previousNotification)
    dispatch({
      type: 'ADD',
      data: content
    })
    previousNotification = setTimeout(() => dispatch(emptyNotification()), timeout * 1000)
  }
}

export const voteNotification = (content, timeout) => {
  return async dispatch => {
    clearTimeout(previousNotification)
    dispatch({
      type: 'VOTENOTE',
      data: content
    })
    previousNotification = setTimeout(() => dispatch(emptyNotification()), timeout * 1000)
  }
}

export const emptyNotification = () => {
  return {
    type: 'EMPTY',
  }
}

export default notificationReducer