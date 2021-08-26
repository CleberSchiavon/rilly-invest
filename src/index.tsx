import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Onboarding,
  AvaliableInvestments,
  CLBRPage,
  ClebellyTimeline,
  ClebellyMoments,
} from './screens';

const Stack = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Onboarding,
    AvaliableInvestments,
    CLBRPage,
    ClebellyTimeline,
    ClebellyMoments
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: 'none',
  }
);
export default createAppContainer(Stack) ;
