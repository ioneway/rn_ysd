'use strict'
import React, { Component } from 'react'
import {
  Text,
  Dimensions, //获取屏幕尺寸
  StyleSheet,
  Animated,
  Image,
  View,
  TextInput
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Button from '../component/Button'
import px2dp from '../util/Tools'

let {width, height} = Dimensions.get('window')

export default class FeedBackPage extends Component {

  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'意见反馈',
        gestureResponseDistance:{horizontal:300},
    });
  constructor(props) {
    super(props)
  }
  _btnClick(data = {}){
    //提交数据
  }

  render(){
    return(
      <View style={styles.main}>
        {/* <View style={styles.container}> */}
          <TextInput placeholder={"欢迎您向我们发送反馈意见。"} multiline maxLength={512} style={[styles.textInputStyle, styles.marginLR, {height:px2dp(200)}]}/>
          <TextInput placeholder={"留下您的手机号或者邮箱以便给您回复。"} style={[styles.textInputStyle, styles.marginLR, {height:px2dp(37)}]}/>
            <View style={styles.container}>
           <Button style={[styles.button,  {marginTop:px2dp(30)}]} onPress:this._btnClick.bind(this, {})>
            <Text style={{color:"white", fontWeight:'bold'}}>提交</Text>
          </Button>
          </View>
        {/* </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#eeeeee',
      height:height,
      width:width,

    },
    container: {
      justifyContent:"center",
      alignItems:"center",
    },
    textInputStyle: {
      fontSize:px2dp(12),
      backgroundColor:'white',
      paddingLeft:px2dp(10),
      marginBottom:px2dp(10),
      marginTop:px2dp(10)
  },
    button: {
      fontSize:px2dp(12),
      width:px2dp(width-20),
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red",
      borderRadius:px2dp(5),
      height:px2dp(35)

  },
  marginLR:{
    marginLeft:px2dp(10),
    marginRight:px2dp(10),
  }
})
