import {ContactList, ChatList, ChannelList} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "ChannelList"

const AppNavigator = createStackNavigator({
  ChannelList: {
    screen: ChannelList    
  },
  ContactList: {
    screen: ContactList    
  },
  ChatList: {
    screen: ChatList    
  },
}, {
  initialRouteName
});

export default AppNavigator
