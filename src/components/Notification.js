import React from 'react'
import { connect } from 'react-redux'


const Notification = ({ notification }) => {
  const style = notification ? {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  } : { display: 'none' }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification