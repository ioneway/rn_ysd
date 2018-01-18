'use strict'
import React, { Component } from 'react'
import {
  Text,
  Dimensions, //获取屏幕尺寸
  StyleSheet,
  Animated,
  Image,
  View
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'

let {width, height} = Dimensions.get('window')

export default class ProductPage extends Component {
  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'产品555列表',
        headerTitleStyle:{
                color:'#555555'
        },
        // gestureResponseDistance:{horizontal:300},

    });
  constructor(props) {
    super(props)
  }
  componentDidMount(){
          // 通过在componentDidMount里面设置setParams将title的值动态修改
          this.props.navigation.setParams({
              headerTitle:'产品列表',
              tabBarLabel:'产品'
          });
      }
  render(){
    return(
      <View style={styles.main}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#00f',
      height: height,
      width: width
    }
})
