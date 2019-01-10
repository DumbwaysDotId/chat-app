import React, {Component} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Icon, Thumbnail} from 'native-base'

export default class ChatList extends Component {

    static navigationOptions = {
        headerTitle: "Chat List",
        headerLeft: (
            <Icon name="arrow-back" style={{marginLeft: 10}}/>                
        ),
        headerRight: (
            <Thumbnail 
                small
                source={{uri: 'https://i2.wp.com/lawsontravel.com/wp-content/uploads/2017/07/cropped-blank-profile-picture-973460_640.png?ssl=1'}}
                style={{marginRight: 10}}
            />
        )
    }

    state = {
      messages: [],
    }
  
    componentWillMount() {
      alert(this.props.navigation.getParam('channelId'))

      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      })
    }
  
    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }
  
    render() {
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    }

}