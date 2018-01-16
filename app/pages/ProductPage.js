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
  constructor(props) {
    super(props)
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
