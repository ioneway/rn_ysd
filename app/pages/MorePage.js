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
import DeviceInfo from 'react-native-device-info'
import Icon from 'react-native-vector-icons/Ionicons'
import Item from '../component/item'
import { ifIphoneX } from 'react-native-iphone-x-helper'
let {width, height} = Dimensions.get('window')

export default class MorePage extends Component {

  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'更多',

        gestureResponseDistance:{horizontal:300},
    });
  constructor(props) {
    super(props)

    this.config = [
        {icon:"ic_notice", name:"消息公告",color:"red", onPress:this._goPage.bind(this, "NoticePage")},
        {icon:"ic_me", name:"关于我们", color:"red", onPress:this._goPage.bind(this, "AboutMePage")},
        {icon:"ic_help", name:"帮助中心", color:"red", onPress:this._goPage.bind(this, "HelpCenterPage")},
        {icon:"ic_service", name:"客户服务",  color:"red", subName:"工作日 09:00-20:00", onPress:this._goPage.bind(this, "CustomerServicePage")},
        {icon:"ic_feed_back", name:"意见反馈",  color:"red", onPress:this._goPage.bind(this, "FeedBackPage", {'headerTitle':'意见反馈'})}
      ]
  }
  componentDidMount(){
          // 通过在componentDidMount里面设置setParams将title的值动态修改
          this.props.navigation.setParams({
              headerTitle:'更多',
              tabBarLabel:'更多'
          });
      }
  _goPage(key, data = {}){
    const { navigate } = this.props.navigation;
    navigate(key, data);
  }
  _renderListItem(){
    return this.config.map((item, i) => {
      if(i==0 || i==1 || i==4){
        item.first = true
      }
      return (<Item key={i} {...item}/>)
    })
  }
  render(){
    return(
      <View style={styles.main}>
        <View>
            {this._renderListItem()}
        </View>
        <View style={[styles.versionText, {flex: 1}]}>
          <Text style={{color:"#aaaaaa", paddingBottom:10}}>当前版本：v{DeviceInfo.getVersion()}</Text>
        </View>
      </View>
    )
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
