import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreens';
import SearchBar from './src/components/SearchBar';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    searchToggle: SearchBar,
    ResultShowScreen: ResultsShowScreen

  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });


export default createAppContainer(navigator);
