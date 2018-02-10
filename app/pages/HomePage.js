/**
 * @author wangwei
 */
`use strict`

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
  Animated,
  SafeAreaView,
  RefreshControl,
  ScrollView
} from 'react-native';
import LocalImg from '../images'
import Swiper from 'react-native-swiper'
import API from '../api/api'
import px2dp from '../util/Tools'
import CarouselFigures from '../component/CarouselFigures'
const isIOS = Platform.OS == "ios"
const {width, height} = Dimensions.get("window")
const headH = px2dp(
  isIOS
  ? 140
  : 120)
const InputHeight = px2dp(28)

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userNum: '0',
      totalInvestment: '0',
      isRefreshing: false
    }
    this.onScrollDown = this.onScrollDown.bind(this)
  }

  render() {
    return (<ScrollView style={{
        flex: 1
      }} refreshControl={<RefreshControl
      refreshing = {
        this.state.isRefreshing
      }
      onRefresh = {
        () => this.onScrollDown()
      }
      title = "正在加载中……"
      color = "#ccc" />
} showsVerticalScrollIndicator={false}>
      <CarouselFigures {...this.props}/>
      <View style={[
          styles.container1, {
            height: px2dp(45)
          }
        ]}>
        <View style={styles.viewStyle1}>
          <Text style={{
              fontSize: 13
            }}>
            理财会员
            <Text style={{
                color: "red"
              }}>{this.state.userNum}</Text>人
          </Text>
        </View>
        <View style={styles.viewStyle2}>
          <Text style={{
              fontSize: 13
            }}>
            投资总额
            <Text style={{
                color: "red"
              }}>{this.state.totalInvestment}</Text>元
          </Text>
        </View>
      </View>
      <View style={[
          styles.container1, {
            height: px2dp(60)
          }
        ]}>
        <TouchableWithoutFeedback style={styles.leftSection} onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('ProductPage', {'headerTitle': '产品'});
          }}>
          <Image source={LocalImg.latest_activity} style={styles.latest_activity}></Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >
          <View style={styles.rightSection}>
            <View style={styles.left_section_1}>
              <Text style={{
                  marginBottom: px2dp(4),
                  marginLeft: px2dp(5),
                  fontSize: 14,
                  fontWeight: 'bold'
                }}>
                乐商贷7月份运营报告
              </Text>
              <Text style={{
                  marginTop: px2dp(5),
                  marginLeft: px2dp(5),
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: "#aaa"
                }}>
                活动时间:2017-08-01-2017-12-31
              </Text>
            </View>
            <View style={styles.left_section_2}>
              <Text style={{
                  color: "#aaa"
                }}>
                详情 >
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[
          styles.container1, {
            height: px2dp(40)
          }
        ]}>
        <Image source={LocalImg.tab_0_selected} style={{height:px2dp(20),width:px2dp(20)}}></Image>
        <Swiper showsPagination={false} height={px2dp(40)} horizontal={false} autoplay="autoplay" style={{
            paddingTop: px2dp(10), marginLeft:px2dp(10)
          }}>
          <View>
            <Text>18637827465用户购买了170000元</Text>
          </View>
          <View>
            <Text>18637827465用户购买了170000元</Text>
          </View>
          <View>
            <Text>18637827465用户购买了170000元</Text>
          </View>
        </Swiper>
      </View>
    </ScrollView>

    ) }

    onScrollDown() {
      this.fetchData();
    }
    componentWillMount() {
      console.log("sdsdsdsdsdsdsd")
    }
    async fetchData() {
      try {
        this.setState({isRefreshing: true, userNum: this.state.userNum, totalInvestment: this.state.totalInvestment})
        let result = await API.getImgUrls();
        this.setState({userNum: result.totalUserNum, totalInvestment: result.totalTenderMoney, isRefreshing: false})
      } catch (err) {
        console.error(err);
      }
    }

    componentDidMount() {
      this.onScrollDown();
    }
    }

    var styles = StyleSheet.create({
      container1: {
        flexDirection: "row",

        marginTop: px2dp(5),
        marginBottom: px2dp(5),
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },

      viewStyle1: {
        marginRight: px2dp(115),
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
      viewStyle2: {
        height: px2dp(45),
        marginLeft: px2dp(5),
        justifyContent: 'center'
      },
      leftSection: {
        flex: 2,
        backgroundColor: "#f00",
        paddingTop: px2dp(15),
        paddingBottom: px2dp(15)

      },
      rightSection: {
        flex: 2,
        flexDirection: "row"
      },
      latest_activity: {
        flex: 1,
        resizeMode: 'contain'
      },

      left_section_1: {
        flex: 4,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-start'
      },

      left_section_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }

    });
