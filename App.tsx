import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/app/store';
import OpeningPage from './src/pages/OpeningPage';
import AuthStack from './src/navigator/AuthStack';


export default function App() {
  const isRegister = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isRegister === false ? (
            <AuthStack />
          ) : (
            <StackNavigator />
          )
        }
      </NavigationContainer>
    </Provider>
  );
}