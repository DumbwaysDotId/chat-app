import React, {Component} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Icon, Thumbnail} from 'native-base'
import {connect} from 'react-redux'
import axios from 'axios'

import {allMessages} from '../_redux/actions/message'

export class ChatList extends Component {

    static navigationOptions = {
      headerTitle: "Chat List",
      headerRight: (
          <Thumbnail 
              small
              source={{uri: 'https://i2.wp.com/lawsontravel.com/wp-content/uploads/2017/07/cropped-blank-profile-picture-973460_640.png?ssl=1'}}
              style={{marginRight: 10}}
          />
      )
    }

    _refetch(){
      const channelId = this.props.navigation.getParam('channelId')
      this.props.dispatch(allMessages(channelId))
    }
  
    componentWillMount() {
      this._refetch()
    }
  
    onSend(messages = []) {
      const channel_id = this.props.navigation.getParam('channelId')
      const {text} = messages[0]

      const data = {
        text,
        channel_id
      }

      axios.post(`http://192.168.43.69:3333/message`, data).then(()=>{
        this._refetch()
      })
    }
  
    render() {
      return (
        <GiftedChat
          messages={this.props.message.results}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    }

}

const mapStateToProps = ({message})=> ({
  message
})

export default connect(mapStateToProps)(ChatList)