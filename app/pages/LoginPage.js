import React, {Component} from 'react'
import {
  View,
  BackAndroid,
  StyleSheet,
  AlertIOS,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
  Animated
} from 'react-native';
import YSInput from '../component/YSInputComponent'
import { Input, Button} from 'react-native-elements'
import CheckBox from 'react-native-check-box'
import Icon from 'react-native-vector-icons/Ionicons'
const isIOS = Platform.OS == "ios"
const {width, height} = Dimensions.get("window")
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default class LoginPage extends Component {
  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'登录',
        headerTitleStyle:{
                color:'#555555'
        },
        // gestureResponseDistance:{horizontal:300},
    });

  constructor(props) {
    super(props)
    this.state = {
      checked:true
    }
  }

  render() {
    return (
      <View  style={styles.main} style={{paddingTop: 10}}>
        <YSInput txtHide={"请输入手机号码"} />
        <YSInput txtHide={"请输入手机验证码"} />

<CheckBox
style={{flex: 1, padding: 10}}
onClick={()=>this.onClick()}
isChecked={this.state.checked}
style={{fontSize:12, color:"#999999"}}
rightText="已阅读并同意"
rightTextStyle={{fontSize:12, color:"#999999"}}
/>
      </View>

    )
  }

  onClick() {
    this.setState({
      checked:!this.state.checked
    })
  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#eeeeee',
      width:width,
      ...ifIphoneX({
            height: height-83-88
        }, {
            height: height-49-64
        })
    }
})
