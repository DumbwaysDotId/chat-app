import {Login, ContactList, ChatList, ChannelList} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "Login"

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login    
  },
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
