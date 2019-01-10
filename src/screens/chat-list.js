import React, {Component} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Icon, Thumbnail} from 'native-base'
import {connect} from 'react-redux'

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
  
    componentWillMount() {
      const channelId = this.props.navigation.getParam('channelId')

      this.props.dispatch(allMessages(channelId))
    }
  
    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
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