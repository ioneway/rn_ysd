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
  View,
  SafeAreaView
} from 'react-native';

// import Icon from 'react-native-vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import LocalImg from './app/images'
import HomePage from './app/pages/HomePage'
import ProductPage from './app/pages/ProductPage'
import MorePage from './app/pages/MorePage'
import MyselfPage from './app/pages/MySelfPage'
let {width, height} = Dimensions.get('window')
import px2dp from './app/util/Tools'
import NavStyle from './app/pages/NavStyle'
import FeedBackPage from './app/pages/FeedBackPage'
import YSWebView from './app/component/YSWebView'
import Icon from 'react-native-vector-icons/iconfont'


export default class App extends Component{

  constructor(props){
    super(props)
      super(props)
      this.state = {
        currentTab: 'HomePage',
        hideTabBar: false
      }
    App.hideTabBar = App.hideTabBar.bind(this)
    App.showTabBar = App.showTabBar.bind(this)
    App.funct = App.funct.bind(this)
  }

  static showTabBar(time){
    this.setState({hideTabBar: false})
  }

  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }

  render() {
    return (
      <View style={{flex:1}}>
        <MyApp />
      </View>
    );
  }

  static funct() {

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
      height: px2dp(22),
      width: px2dp(22)
    }
})

const TabVC = TabNavigator({
    "乐商贷": {
      screen: HomePage,
      navigationOptions:({navigation, screenProps}) => ({
        header: null,
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  // <Image
                  //     source={!focused ? LocalImg['tab_0'] : LocalImg['tab_0_selected']}
                  //     style={styles.tabStyle}
                  // />
                  <Icon name={"ic_money"} size={px2dp(23)} color={focused ? '#ff0000' : '#555555'} />
              )
          }),
      })
    },
    产品: {
      screen: ProductPage,
      navigationOptions:({navigation, screenProps}) => ({
        header: null,
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  // <Image
                  //     source={!focused ? LocalImg['tab_1'] : LocalImg['tab_1_selected']}
                  //     style={styles.tabStyle}
                  // />
                  <Icon name={"ic_list"} size={px2dp(23)} color={focused ? '#ff0000' : '#555555'} />
              )
          }),
      })
    },
    我的: {
      screen: MyselfPage,
      navigationOptions:({navigation, screenProps}) => ({
        header: null,
        tabBarIcon: (({tintColor,focused}) => {
              return(
                  // <Image
                  //     source={!focused ? LocalImg['tab_2'] : LocalImg['tab_2_selected']}
                  //     style={styles.tabStyle}
                  // />
                  <Icon name={"ic_my"} size={px2dp(23)} color={focused ? '#ff0000' : '#555555'} />
              )
          }),
      })
    },
    更多: {
      screen: MorePage,
      navigationOptions:({navigation, screenProps}) => ({

        tabBarIcon: (({tintColor,focused}) => {
              return(
                  // <Image
                  //     source={!focused ? LocalImg['tab_3'] : LocalImg['tab_3_selected']}
                  //     style={styles.tabStyle}
                  // />
                  <Icon name={"ic_more"} size={px2dp(23)}  color={focused ? '#ff0000' : '#555555'} />
              )
          }),
      })
    }
}, {
        // animationEnabled: true,//点击切换时标签页下的指示器是否有动画效果
        // tabBarComponent:TabBarBottom, //具体由内部实现
        tabBarPosition: 'bottom',//标签页的具体放置位置 android 默认为'top' iOS为'bottom'
        lazy: false,//是否懒加载标签页  true时首次点击跳转页面的时候会有空白过度页面显示
        // swipeEnabled:true,//是否可以滑动左右拖动切换
        tabBarOptions: {
            // initialRouteName:  //不明白什么用
            // order:
            // paths:
            // backBehavior:'none'
            activeTintColor: 'red',//设置选中字体和图片颜色
            // activeBackgroundColor:'#f00',//选中的标签页背景颜色   没有什么效果
            inactiveTintColor: '#999999',//未选中字体颜色
            // inactiveBackgroundColor:'#00f',  //未选中的标签页背景颜色   没有什么效果
            showLabel:true,//是否显示 标签页
            showIcon:true,//是否显示图片
            upperCaseLabel:false,//标签（英文）文字是否大写
            scrollEnabled:true, //多个时（超出屏幕）标签页是否可以左右滑动
            // pressOpacity: ios 有用
            //标签页文字区域样式
            labelStyle:{
                fontSize:px2dp(12),//字体大小
                margin:0
                // backgroundColor:'red',  //文字的背景颜色
            },
            //整个标签页的样式
            style:{
                backgroundColor:'#fff',
            },
            //标签页图片显示区域样式
            iconStyle:{
                // backgroundColor:'blue',

            },
            //单个标签页选项的样式
            tabStyle:{
                // backgroundColor:'#ddd',
                // padding:0,//取消默认高度
            },
            //指示器样式
            indicatorStyle:{
                backgroundColor:'#53a8eF',
                height:3,

            }
        }
    })

const MyApp = StackNavigator({
  TabVC:{
    screen: TabVC
  },
  ProductPage:{
    screen:ProductPage,
    navigationOptions:() => ({
      headerTintColor:'#999999'
    })
  },
  YSWebView:{
    screen: YSWebView,
    navigationOptions:() => ({
      headerTintColor:'#999999'
    })
  },
  FeedBackPage:{
    screen: FeedBackPage,
    navigationOptions:() => ({
      headerTintColor:'#999999'
    })
  }

})
