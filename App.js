import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreens';
import SearchBar from './src/components/SearchBar';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    searchToggle: SearchBar

  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });


export default createAppContainer(navigator);
