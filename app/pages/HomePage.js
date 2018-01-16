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

import Swiper from 'react-native-swiper';

let {width, height} = Dimensions.get('window')

export default class HomePage extends Component {
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
      backgroundColor: '#f00',
      height:height,
      width:width
    }
})
