import { HomeScreen } from './module'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const initialRouteName = "Home"

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      initialRouteName
    }
  );

// export default createAppContainer(RootStack)
export default RootStack