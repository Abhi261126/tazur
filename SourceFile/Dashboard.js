import * as React from 'react';
import {Text, View, TouchableOpacity,StyleSheet,Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from "./SettingsScreen";
import Icon from './Icon';
import HomeScreen from "./HomeScreen";
import Search from './Search';

function TestScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Test!</Text>
    </View>
  );
}


function demoLogin() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login!</Text>
      </View>
    );
  }

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
        width:'80%',
        alignSelf:'center'
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center',}}>
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
            <Icon
              icon= {label == 'Search'? "SearchIcon": label == 'Settings' ? "setting": label == 'Home' ? "Dashboard":"Chat"}
              width={22}
              height={22}
              color={isFocused ? '#673ab7' : '#222'}
            />
          </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} options={{headerShown: false}} />} >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="HealthCard" component={SettingsScreen} options={{headerShown: false,tabBarVisible: false}}/>
      <Tab.Screen name="Search" component={Search} options={{headerShown: false,tabBarVisible: false}}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeTabStyle: {
    width: '100%',
    alignItems: 'center',
  },
  TabStyle: {
    alignItems: 'center',
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#DBDBDB',
    backgroundColor: '#FFFFFF',
  },
  activeTabText: {
    color: '#4267B2',
    fontSize: 12,
    letterSpacing: 0.4,

  },
  tabText: {
    color: '#999999',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  
});

const Stack = createStackNavigator();

export default function Dashboard() {
  return (
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Test" component={TestScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={MyTabs} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}
