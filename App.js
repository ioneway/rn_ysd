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
import TabNavigator from 'react-native-tab-navigator'
import LocalImg from './app/images'
import HomePage from './app/pages/HomePage'
import ProductPage from './app/pages/ProductPage'
import MorePage from './app/pages/MorePage'
import MyselfPage from './app/pages/MySelfPage'
let {width, height} = Dimensions.get('window')
import px2dp from './app/util/Tools'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  constructor(props){
    super(props)
      super(props)
      this.state = {
        currentTab: 'HomePage',
        hideTabBar: false
      }

      this.tabName = [
        ["乐商贷",  "HomePage", <HomePage {...this.props}/>],
        ["产品",  "ProductPage", <ProductPage {...this.props}/>],
        ["我的",  "MyselfPage", <MyselfPage {...this.props}/>],
        ["更多",  "MorePage", <MorePage {...this.props}/>]
      ]

    App.hideTabBar = App.hideTabBar.bind(this)
    App.showTabBar = App.showTabBar.bind(this)
  }

  static showTabBar(time){
    this.setState({hideTabBar: false})
  }

  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }

  render() {
    return (
      <TabNavigator
         hidesTabTouch={true}
         tabBarStyle={[styles.tabbar,(this.state.hideTabBar?styles.hide:{})]}
         sceneStyle={{PaddingBottom: styles.tabbar.height}}>
         {
           this.tabName.map((item, i) => {
             return (
               <TabNavigator.Item
                 key={i}
                 tabStyle={styles.tabStyle}
                 title={item[0]}
                 selected={this.state.currentTab === item[1]}
                 selectedTitleStyle={{color: "#f00"}}
                 renderIcon={() => <Image source={LocalImg[`tab_${i}`]} style={{height: px2dp(22), width: px2dp(22)}}></Image>}
                 renderSelectedIcon={() => <Image source={LocalImg[`tab_${i}_selected`]} style={{height: px2dp(22), width: px2dp(22)}}></Image>}
                 onPress={() => this.setState({currentTab: item[1]})}>
                 {item[2]}
               </TabNavigator.Item>
             )
           })
         }
       </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
    tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        { translateX: width }
      ]
    },
    tabStyle:{
      padding: px2dp(4)
    }
})
