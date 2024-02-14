import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MainNavigation from './src/Navigation/MainNavigation'
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// // import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Login from './Screen/Login';
// import Home from './Screen/HomeScreen';
// //import About from './Screen/About';
// //import Details from './Screen/Details';
// //import Album from './Screen/Album';
// // import Demo from './Screen/Demo';
// // import Register from './Screen/Register';
// // import Check from './Screen/Check';
// import NewScreen from './Screen/NewScreen';
// import NewScreen2 from './Screen/NewScreen2';
// import MessagesScreen from './Screen/MessageScreen';
// //import AllUser from './Screen/AllUser';
// import Singup from './Screen/Singup';
// import SignupScreen from './Screen/SignupScreen';
// import SplashScreen from './Screen/SplashScreen';
// import HomeScreen from './Screen/HomeScreen';
// import LoginScreen from './Screen/LoginScreen';
// import Check from './Screen/Check';
// import Check2 from './Screen/Check2';
// import Contacts from './Screen/Contacts';
// import PhoneNumber from './Screen/PhoneNumber';
// import Verification from './Screen/Verification';
// import ChatScreen from './Screen/ChatScreen';
// import MessageScreen from './Screen/MessageScreen';
// import ChatHeader from './Component/message/ChatHeader';
// import ChatInput from './Component/message/ChatInput';
// import MessagesList from './Component/message/MessagesList';

// import PatientList from './Screen/PatientList';
// import InitialCreateGroup from './Screen/InitialCreateGroup';
// import SelectedGroupContact from './Screen/SelectedGroupContact';
// import GroupList from './Screen/GroupList';
// // import GroupScreen from './Screen/GroupScreens';
// import GroupScreen from './Screen/GroupScreen';
// import CreateGroupScreen from './Screen/CreateGroupScreen';
// import GroupInfo from './Screen/GroupInfo';
// import Header from './Screen/Header';
// import MemberList from './Screen/MemberList';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const Tabs = createMaterialTopTabNavigator();

// const CustomTabBarIcon = ({focused, iconName, filledColor, emptyColor}) => {
//   return (
//     <MaterialIcons
//       name={iconName}
//       size={26}
//       color={focused ? filledColor : emptyColor}
//     />
//   );
// };
// const CustomTabBarIcon1 = ({focused, iconName, filledColor, emptyColor}) => {
//   return (
//     <MaterialCommunityIcons
//       name={iconName}
//       size={26}
//       color={focused ? filledColor : emptyColor}
//     />
//   );
// };

// function UserTabSatck() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: 'white',
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderRadius: 50,
//           position: 'absolute',
//           bottom: 18,
//           height: 63,
//           width: 300,
//           left: 35,
//           // paddingTop: 10,
//           // paddingBottom: 10,
//           marginHorizontal: 10,
//         },
//         initialRouteName: 'HomeStack',
//       }}>
//       {/* <Tab.Screen name="Home" component={Home} /> */}
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon1
//               focused={focused}
//               iconName={focused ? 'home' : 'home-outline'}
//               filledColor=" black" // Change to your preferred filled color
//               emptyColor="black" // Change to your preferred empty color
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Details"
//         component={ChatListStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon1
//               focused={focused}
//               iconName={focused ? 'message-text' : 'message-text-outline'}
//               filledColor="gray" // Change to your preferred filled color
//               emptyColor="black" // Change to your preferred empty color
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Groups"
//         component={GroupList}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon1
//               focused={focused}
//               iconName={focused ? 'account-group' : 'account-group-outline'}
//               filledColor=" black" // Change to your preferred filled color
//               emptyColor="black" // Change to your preferred empty color
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={PatientList}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon
//               focused={focused}
//               iconName={focused ? 'person' : 'person-outline'}
//               filledColor="gray" // Change to your preferred filled color
//               emptyColor="black" // Change to your preferred empty color
//             />
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="patient"
//         component={About}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 position: 'absolute',
//                 top: -20, // Adjust to position the plus icon
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 50,
//                 height: 60,
//                 marginLeft : 200,
//                 backgroundColor: 'transparent', // Transparent background
//               }}>
//               <TouchableOpacity>
//                 <AntDesign
//                   name="plus"
//                   size={30}
//                   color={focused ? 'black' : 'white'}
//                 />
//               </TouchableOpacity>
//             </View>
//           ),
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// }

// function MainStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="MyTabs">
//       <Stack.Screen name="MyTabs" component={MyTabs} />
//       <Stack.Screen name="PlainStack" component={PlainStack} />
//     </Stack.Navigator>
//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: 'white',
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderRadius: 50,
//           position: 'absolute',
//           bottom: 18,
//           height: 63,
//           width: 300,
//           left: 35,
//           shadowColor: '#000',
//           shadowOpacity: 2.25,
//           shadowRadius: 7.84,
//           elevation: 5,
//           borderTopWidth: 0,
//           // paddingTop: 10,
//           // paddingBottom: 10,
//           marginHorizontal: 10,
//         },
//         initialRouteName: 'HomeStack',
//       })}>
//       {/* <Tab.Screen name="Home" component={Home} /> */}
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: 50,
//                 height: 50,
//                 backgroundColor: focused ? 'lightblue' : 'transparent',
//                 borderRadius: 25,
//               }}>
//               <CustomTabBarIcon1
//                 focused={focused}
//                 iconName={focused ? 'home' : 'home-outline'}
//                 filledColor=" black" // Change to your preferred filled color
//                 emptyColor="black" // Change to your preferred empty color
//               />
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Details"
//         component={ChatListStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: 50,
//                 height: 50,
//                 backgroundColor: focused ? 'lightblue' : 'transparent',
//                 borderRadius: 25, // Half of the width and height to make it a circle
//               }}>
//               <CustomTabBarIcon1
//                 focused={focused}
//                 iconName={focused ? 'message-text' : 'message-text-outline'}
//                 filledColor="gray" // Change to your preferred filled color
//                 emptyColor="black" // Change to your preferred empty color
//               />
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Groups"
//         component={GroupListStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: 50,
//                 height: 50,
//                 backgroundColor: focused ? 'lightblue' : 'transparent',
//                 borderRadius: 25, // Half of the width and height to make it a circle
//               }}>
//               <CustomTabBarIcon1
//                 focused={focused}
//                 iconName={focused ? 'account-group' : 'account-group-outline'}
//                 filledColor=" black" // Change to your preferred filled color
//                 emptyColor="black" // Change to your preferred empty color
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={PatientList}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: 50,
//                 height: 50,
//                 backgroundColor: focused ? 'lightblue' : 'transparent',
//                 borderRadius: 25, // Half of the width and height to make it a circle
//               }}>
//               <CustomTabBarIcon
//                 focused={focused}
//                 iconName={focused ? 'person' : 'person-outline'}
//                 filledColor="gray" // Change to your preferred filled color
//                 emptyColor="black" // Change to your preferred empty color
//               />
//             </View>
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="patient"
//         component={About}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 position: 'absolute',
//                 top: -20, // Adjust to position the plus icon
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 50,
//                 height: 60,
//                 marginLeft : 200,
//                 backgroundColor: 'transparent', // Transparent background
//               }}>
//               <TouchableOpacity>
//                 <AntDesign
//                   name="plus"
//                   size={30}
//                   color={focused ? 'black' : 'white'}
//                 />
//               </TouchableOpacity>
//             </View>
//           ),
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// }

// function GroupListStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="GroupList">
//       <Stack.Screen name="GroupList" component={GroupList} />
//       {/* <Stack.Screen name="GroupScreen" component={GroupScreen} /> */}
//       {/* <Stack.Screen name='Header' component={Header}/> */}
//       {/* <Stack.Screen name='GroupInfo' component={GroupInfo} /> */}
//     </Stack.Navigator>
//   );
// }

// function PlainStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="MessageScreen">
//       <Stack.Screen name="PatientList" component={PatientList} />
//       <Stack.Screen name="GroupList" component={GroupList} />
//       <Stack.Screen name="ChatScreen" component={ChatScreen} />
//       <Stack.Screen name="GroupScreen" component={GroupScreen} />
//       {/* <Stack.Screen name='Header' component={Header}/> */}
//       <Stack.Screen name="MessageScreen" component={MessageScreen} />
//       <Stack.Screen name="GroupInfo" component={GroupInfo} />
//       <Stack.Screen name="MemberList" component={MemberList} />
//     </Stack.Navigator>
//   );
// }

// function ChatListStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="ChatScreen"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="ChatScreen" component={ChatScreen} />
//       {/* <Stack.Screen
//         name="MessageScreen"
//         component={MessageScreen}
//         options={{tabBarVisible: routeName !== 'MessageScreen'}}
//       /> */}
//       {/* <Stack.Screen name="ChatInput" component={ChatInput} />
//       <Stack.Screen name="MessagesList" component={MessagesList} />
//       <Stack.Screen name="ChatHeader" component={ChatHeader} /> */}
//     </Stack.Navigator>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="InitialCreateGroup"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="NewScreen" component={NewScreen} />
//       <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
//       <Stack.Screen name="NewScreen2" component={NewScreen2} />
//       {/* <Stack.Screen name="Demo" component={Demo} /> */}
//       <Stack.Screen name="Contacts" component={Contacts} />
//       <Stack.Screen name="InitialCreateGroup" component={InitialCreateGroup} />
//       <Stack.Screen
//         name="SelectedGroupContact"
//         component={SelectedGroupContact}
//       />
//       <Stack.Screen name="GroupList" component={GroupList} />
//     </Stack.Navigator>
//   );
// }

// const App = props => {
//   debugger;
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName="Check">
//         <Stack.Screen name="Check" component={Check} />
//         {/* <Stack.Screen name="TestComponent" component={TestComponent} /> */}
//         <Stack.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
//         <Stack.Screen name="Check2" component={Check2} />
//         <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
//         <Stack.Screen name="Verification" component={Verification} />
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />
//         <Stack.Screen name="Singup" component={Singup} />
//         {/* <Stack.Screen name="Demo" component={Demo} /> */}
//         <Stack.Screen name="MainStack" component={MainStack}></Stack.Screen>

//         {/* <Stack.Screen name="TopScreen" component={TopScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const App = () => {
  return <MainNavigation />;
};

export default App;
