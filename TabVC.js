/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Image,
  View
} from 'react-native';

// import Icon from 'react-native-vector-icons'
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation'
import LocalImg from './app/images'
import HomePage from './app/pages/HomePage'
import ProductPage from './app/pages/ProductPage'
import MorePage from './app/pages/MorePage'
import MyselfPage from './app/pages/MySelfPage'
let {width, height} = Dimensions.get('window')
import px2dp from './app/util/Tools'

export TabVC = TabNavigator({
    HomePage: {
      screen: HomePage,
      navigationOptions:({navigation, screenProps}) => ({

        tabBarIcon: (({tintColor,focused}) => {
              return(
                  <Image
                      source={!focused ? LocalImg['tab_0'] : LocalImg['tab_0_selected']}
                      style={{height: px2dp(22), width: px2dp(22)}}
                  />
              )
          }),
      })
    },
    ProductPage: {
      screen: ProductPage,
      navigationOptions:({navigation, screenProps}) => ({
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  <Image
                      source={!focused ? LocalImg['tab_1'] : LocalImg['tab_1_selected']}
                      style={{height: px2dp(22), width: px2dp(22)}}
                  />
              )
          }),
      })
    },
    MyselfPage: {
      screen: MyselfPage,
      navigationOptions:({navigation, screenProps}) => ({
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  <Image
                      source={!focused ? LocalImg['tab_2'] : LocalImg['tab_2_selected']}
                      style={{height: px2dp(22), width: px2dp(22)}}
                  />
              )
          }),
      })
    },
    MorePage: {
      screen: MorePage,
      navigationOptions:({navigation, screenProps}) => ({
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  <Image
                      source={!focused ? LocalImg['tab_3'] : LocalImg['tab_3_selected']}
                      style={{height: px2dp(22), width: px2dp(22)}}
                  />
              )
          }),
      })
    }
},{

})
