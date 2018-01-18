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
import NavStyle from './NavStyle';
import TabNavigator from 'react-native-tab-navigator'

let {width, height} = Dimensions.get('window')

export default class MorePage extends Component {

  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>我的</Text>
        ),
        gestureResponseDistance:{horizontal:300},
        header:(
            <NavStyle backgroundColor={screenProps.themeColor} leftClick={()=>navigation.state.params?navigation.state.params.navigatePress():null}/>
        )

    });
  constructor(props) {
    super(props)
    this.name={
      sex:"agaffaf"
    }
  }
  componentDidMount(){
          // 通过在componentDidMount里面设置setParams将title的值动态修改
          this.props.navigation.setParams({
              headerTitle:'更多',
              tabBarLabel:'更多'
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
      backgroundColor: '#0f0',
      height:height,
      width:width
    }
})
