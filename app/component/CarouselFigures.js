'use strict'
/**
 * @author wangwei
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native'
import Swiper from 'react-native-swiper'
// import YSWebView from './YSWebView'
import px2dp from '../util/Tools'
const { width, height } = Dimensions.get("window")

const REQUEST_URL = 'https://www.yueshanggroup.cn/api/rest/indexH';
const IMAGE_PRE_URL = 'https://www.yueshanggroup.cn/mobile'

export default class CarouselFigures extends Component {
  constructor(props) {
    super(props)
    this.state = {
            movies: null,
        };
    this.height = (height > 800 ? px2dp(260):px2dp(210))
  }

  render(){
    if (!this.state.movies) {
            return this.renderLoadingView();
        }
    return (
      <View style={{height:this.height}}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={this.height}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 7, height: 7, borderRadius: 3, marginLeft: 3, marginRight: 3}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 7, height: 7, borderRadius: 3, marginLeft: 3, marginRight: 3}} />}
          paginationStyle={{
            bottom: 10
          }}>
          {
            this.state.movies.map((item, i) => {
              return (
                <TouchableWithoutFeedback style={[styles.slide]} onPress={()=>{
                    const { navigate } = this.props.navigation;
                    navigate('YSWebView', {'url':'http://baidu.com', 'headerTitle': '百度一下'});}}>
                    <Image style={[styles.slide]} source={{uri: IMAGE_PRE_URL+item}}>
                    </Image>
                </TouchableWithoutFeedback>

              )
            })
          }
        </Swiper>
     </View>
    )
  }
  renderLoadingView() {
          return (
              <View style={{height:this.height, backgroundColor:"white"}}>
              </View>
          );
      }

  fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.indexImageItemList.map((item , i) => {
                      return item.imageUrl
                    }),
                });
            })
            .done();
    }

    componentDidMount() {
       //去拉取电影的接口的数据
       this.fetchData();
   }
}

const styles = StyleSheet.create({
  container: {
    height:px2dp(500)

},

wrapper: {
},

slide: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'transparent'
},

slide1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB'
},

slide2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5'
},

slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9'
},

text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold'
}
})
