/**
 * @author wangwei
 */
`use strict`

import React, { Component } from 'react'
import {

  View,
  BackAndroid,
  ScrollView,
  StyleSheet,
  AlertIOS,
  RefreshControl,
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
import LocalImg from '../images'
import px2dp from '../util/Tools'
import CarouselFigures from '../component/CarouselFigures'

const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get("window")
const headH = px2dp(isIOS?140:120)
const InputHeight = px2dp(28)

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
        // <View style={styles.typesView}></View>
      <View style={{backgroundColor:"#eeeeee"}}>
            <CarouselFigures {...this.props}/>
            <View style={[styles.container1, {height:px2dp(45)}]}>
                  <View style={styles.viewStyle1}>
                    <Text style={{ fontSize:13,}}> 理财会员
                      <Text style={{ color:"red"}}>3011</Text>人
                    </Text>
                  </View>
              <View style={styles.viewStyle2}>
                  <Text style={{ fontSize:13 , }}> 投资总额
                    <Text style={{ color:"red" }}>29564391</Text>元
                  </Text>
             </View>
           </View>
           <View style={[styles.container1, {height:px2dp(60)}]}>
          <TouchableWithoutFeedback style={styles.leftSection} onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('ProductPage', {'headerTitle':'产品'});
        }}>
             <Image source={LocalImg.latest_activity} style={styles.latest_activity}>
            </Image>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback >
            <View style={styles.rightSection}>
              <View style={styles.left_section_1}>
                <Text style={{marginBottom:px2dp(4),marginLeft:px2dp(5), fontSize:15, fontWeight:'bold'}}>
                   乐商贷7月份运营报告
                </Text>
                <Text style={{marginTop:px2dp(5), marginLeft:px2dp(5), fontSize:12, fontWeight:'bold', color:"#aaa"}}>
                   活动时间：2017-08-01 - 2017-12-31
                </Text>
              </View>
              <View style={styles.left_section_2}>
                <Text style={{color:"#aaa"}}>
                  详情 >
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </View>

    )
  }
}


var styles = StyleSheet.create({
        container1: {
          flexDirection: "row",

          marginTop:px2dp(5),
          marginBottom:px2dp(5),
            // justifyContent: 'center',
             alignItems: 'center',
            backgroundColor: '#ffffff',
        },

        viewStyle1: {
             marginRight:px2dp(115),
            justifyContent: 'center',
            flexWrap:'wrap'
        },
        viewStyle2: {
            height:px2dp(45),
            marginLeft:px2dp(5),
            justifyContent: 'center'
        },
        leftSection: {
           flex:2,
          backgroundColor:"#f00",
          paddingTop:px2dp(15),
          paddingBottom:px2dp(15)

        },
        rightSection: {
           flex: 2,
           flexDirection: "row",

        },
        latest_activity: {
          flex: 1,
          resizeMode:'contain',

        },

        left_section_1: {
          flex: 4,
          flexDirection: "column",
          justifyContent: 'center',
           alignItems: 'flex-start',
        },

        left_section_2:{
          flex:1,
          justifyContent: 'center',
           alignItems: 'center'

        }

    });
