/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OnbordingPage from './SourceFile/OnbordingPage'
import Login from './SourceFile/Login'
import SignUp from './SourceFile/SignUp'
import Otp from './SourceFile/Otp'
import Dashboard from './SourceFile/Dashboard'
import CreateNavigator from "./SourceFile/CreateNavigator";


AppRegistry.registerComponent(appName, () => CreateNavigator);
