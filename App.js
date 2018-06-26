import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import DetailsScreen from './component/DetailsScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
  }, {
    initialRouteName: 'Home'
  }
)