import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NewScreen from '../Screen/Home/NewScreen';
import NewScreen2 from '../Screen/Home/NewScreen2';
import MessagesScreen from '../Screen/Chat/MessageScreen';
import SplashScreen from '../Screen/SplashScreen';
import Check from '../Screen/Check';
import Contacts from '../Screen/Home/Contacts';
import PhoneNumber from '../Screen/Auth/PhoneNumber';
import Verification from '../Screen/Auth/Verification';
import ChatScreen from '../Screen/Chat/ChatScreen';
import MessageScreen from '../Screen/Chat/MessageScreen';
import ChatHeader from '../Component/message/ChatHeader';
import ChatInput from '../Component/message/ChatInput';
import MessagesList from '../Component/message/MessagesList';

import PatientList from '../Screen/Patient/PatientList';
import InitialCreateGroup from '../Screen/Home/InitialCreateGroup';
import SelectedGroupContact from '../Screen/Home/SelectedGroupContact';
import GroupList from '../Screen/Home/GroupList';
import GroupScreen from '../Screen/Group/GroupScreen';
import GroupInfo from '../Screen/Group/GroupInfo';
import MemberList from '../Screen/Group/MemberList';
import ProfileAccount from '../Screen/Auth/ProfileAccount';
import ChatInfo from '../Screen/Chat/ChatInfo';
import DemoScreen1 from '../Screen/Home/DemoScreen1';
import DemoScreen2 from '../Screen/Home/DemoScreen2';
import DemoScreen3 from '../Screen/Home/DemoScreen3';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

// const Tabs = createMaterialTopTabNavigator();

const CustomTabBarIcon = ({focused, iconName, filledColor, emptyColor}) => {
  return (
    <MaterialIcons
      name={iconName}
      size={26}
      color={focused ? filledColor : emptyColor}
    />
  );
};
const CustomTabBarIcon1 = ({focused, iconName, filledColor, emptyColor}) => {
  return (
    <MaterialCommunityIcons
      name={iconName}
      size={26}
      color={focused ? filledColor : emptyColor}
    />
  );
};


function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyTabs">
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="PlainStack" component={PlainStack} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderRadius: 20,
          position: 'absolute',
          bottom: 17,
          height: 63,
          width: width*0.88 ,
          left: 15,
          borderTopWidth: 0,
          marginHorizontal: 10,
        },
        initialRouteName: 'HomeStack',
      })}>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                backgroundColor: focused ? 'lightblue' : 'transparent',
                borderRadius: 25,
              }}>
              <CustomTabBarIcon1
                focused={focused}
                iconName={focused ? 'home' : 'home-outline'}
                filledColor=" black" // Change to your preferred filled color
                emptyColor="black" // Change to your preferred empty color
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatListStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                backgroundColor: focused ? 'lightblue' : 'transparent',
                borderRadius: 25, // Half of the width and height to make it a circle
              }}>
              <CustomTabBarIcon1
                focused={focused}
                iconName={focused ? 'message-text' : 'message-text-outline'}
                filledColor="gray" // Change to your preferred filled color
                emptyColor="black" // Change to your preferred empty color
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Groups"
        component={GroupListStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                backgroundColor: focused ? 'lightblue' : 'transparent',
                borderRadius: 25, // Half of the width and height to make it a circle
              }}>
              <CustomTabBarIcon1
                focused={focused}
                iconName={focused ? 'account-group' : 'account-group-outline'}
                filledColor=" black" // Change to your preferred filled color
                emptyColor="black" // Change to your preferred empty color
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Patient"
        component={PatientList}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                backgroundColor: focused ? 'lightblue' : 'transparent',
                borderRadius: 25, // Half of the width and height to make it a circle
              }}>
              <CustomTabBarIcon
                focused={focused}
                iconName={focused ? 'person' : 'person-outline'}
                filledColor="gray" // Change to your preferred filled color
                emptyColor="black" // Change to your preferred empty color
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="patient"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: -20, // Adjust to position the plus icon
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 60,
                marginLeft : 200,
                backgroundColor: 'transparent', // Transparent background
              }}>
              <TouchableOpacity>
                <AntDesign
                  name="plus"
                  size={30}
                  color={focused ? 'black' : 'white'}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

function GroupListStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GroupList">
      <Stack.Screen name="GroupList" component={GroupList} />
      {/* <Stack.Screen name="GroupScreen" component={GroupScreen} /> */}
      {/* <Stack.Screen name='GroupInfo' component={GroupInfo} /> */}
    </Stack.Navigator>
  );
}

function PlainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MessageScreen">
      <Stack.Screen name="PatientList" component={PatientList} />
      <Stack.Screen name="GroupList" component={GroupList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="GroupInfo" component={GroupInfo} />
      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="ChatInfo" component={ChatInfo} />
    </Stack.Navigator>
  );
}

function ChatListStack() {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      {/* <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{tabBarVisible: routeName !== 'MessageScreen'}}
      /> */}
      {/* <Stack.Screen name="ChatInput" component={ChatInput} />
      <Stack.Screen name="MessagesList" component={MessagesList} />
      <Stack.Screen name="ChatHeader" component={ChatHeader} /> */}
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="InitialCreateGroup"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewScreen" component={NewScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="NewScreen2" component={NewScreen2} />
      {/* <Stack.Screen name="Demo" component={Demo} /> */}
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="InitialCreateGroup" component={InitialCreateGroup} />
      <Stack.Screen
        name="SelectedGroupContact"
        component={SelectedGroupContact}
      />
      <Stack.Screen name="GroupList" component={GroupList} />
      <Stack.Screen name="DemoScreen2" component={DemoScreen2} />
      <Stack.Screen name="DemoScreen1" component={DemoScreen1} />
      <Stack.Screen name="DemoScreen3" component={DemoScreen3} />
    </Stack.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Check" component={Check} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="ProfileAccount"
        component={ProfileAccount}></Stack.Screen>
      <Stack.Screen name="MainStack" component={MainStack} />
      {/* <Stack.Screen name="Demo" component={Demo} /> */}
    </Stack.Navigator>
  );
}

const MainNavigation = props => {
  debugger;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
