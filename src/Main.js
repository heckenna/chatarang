import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'
import RoomForm from './RoomForm'

class Main extends Component {
  state = {
    room: {
      name: 's3afternoon',
      description: 'Ask questions and share code',
    },
    rooms: {
      s3afternoon: {
        name: 's3afternoon',
        description: 'Ask questions and share code',
      },

      general: {
        name: 'general',
        description: 'Chat about stuff',
      },

      random: {
        name: 'random',
        description: 'Cat GIFs, etc.',
      },
    },
  }

  componentDidMount() {
    this.roomsRef = base.syncState(
      'rooms', 
      {
        context: this,
        state: 'rooms',
        defaultValue: {
          general: {
            name: 'general',
            description: 'Talk about stuff',
          }
        }
      }
    )
  }

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }

  hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }

  addRoom =  (room) => {
    const rooms = {...this.state.rooms};
    rooms[room.name] = room;

    this.setState({rooms});
  }



  setCurrentRoom = roomName => {
    const room = this.state.rooms[roomName]
    this.setState({ room })
  }

  render() {
    if(this.state.showRoomForm) {
      return <RoomForm addRoom={this.addRoom}/>
    }

    else {
      return (
        <div className="Main" style={styles}>
          
          <Sidebar
            user={this.props.user}
            signOut={this.props.signOut}
            rooms={this.state.rooms}
            setCurrentRoom={this.setCurrentRoom}
            showRoomForm={this.showRoomForm}
            hideRoomForm={this.hideRoomForm}
          />
          <Chat
            user={this.props.user}
            room={this.state.room}
          />
        </div>
      )
    }
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main