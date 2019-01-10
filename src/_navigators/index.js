import {ContactList, ChatList} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "ChatList"

const AppNavigator = createStackNavigator({
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
