import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from './CustomDrawer';
import TabsNavigation from './TabsNavigation';
import MenScreen from '../views/MenScreen';
import WomenScreen from '../views/WomenScreen';
import KidsScreen from '../views/KidsScreen';
import StoreScreen from '../views/StoreScreen';
import AddProductScreenScreen from '../views/AddProductScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 320,
        },
        headerShown: false,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontFamily: 'Inter-Medium',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={TabsNavigation}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome
              name="dashboard"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Men"
        component={MenScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="shoe-cleat"
              color={color}
              style={{
                fontSize: 26,
                top: 2,
                left: 0,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Women"
        component={WomenScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="shoe-sneaker"
              color={color}
              style={{
                fontSize: 26,
                top: 2,
                left: 0,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        drawerLabelStyle={{fontFamily: 'Poppins-SemiBold', color: 'red'}}
        drawerStyle={{fontFamily: 'Poppins-SemiBold', color: 'red'}}
        name="Kids"
        component={KidsScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="shoe-print"
              color={color}
              style={{
                fontSize: 26,
                top: 2,
                left: 0,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Store"
        component={StoreScreen}
        options={{
          drawerIcon: ({color}) => (
            <Entypo
              name="shop"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AddProductScreen"
        component={AddProductScreenScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="add-circle"
              color={color}
              style={{
                fontSize: 22,
                top: 2,
                left: 0,
                width: 22,
                height: 30,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
