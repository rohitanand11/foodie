import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./src/screens/searchScreen";

const navigator = createStackNavigator(
  {
    Search: searchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food search",
    },
  }
);

export default createAppContainer(navigator);
