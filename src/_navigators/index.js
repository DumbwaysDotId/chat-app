import {ContactList} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "ContactList"

const AppNavigator = createStackNavigator({
  ContactList: {
    screen: ContactList    
  },
}, {
  initialRouteName
});

export default AppNavigator
