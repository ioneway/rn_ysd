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

export default class MorePage extends Component {
  constructor(props) {
    super(props)
    this.name={
      sex:"agaffaf"
    }
  }

  render(){
    return(
      <View style={styles.main}>
        <Text>abx</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#0f0',
      height:height,
      width:width
    }
})
