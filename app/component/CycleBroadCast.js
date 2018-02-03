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
import API from '../api/api'
// import YSWebView from './YSWebView'
import px2dp from '../util/Tools'
const { width, height } = Dimensions.get("window")

const REQUEST_URL = 'https://www.yueshanggroup.cn/api/rest/indexH';
const IMAGE_PRE_URL = 'https://www.yueshanggroup.cn/mobile'

export default class CycleBroadCast extends Component {
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
      <View style={styles.container}>
            {/*设置horizontal为竖向排列 autoplay为自动播放*/}
             <Swiper style={styles.wrapper} height={45} horizontal={false} autoplay autoplayTimeout={1}  >
                {
                  this.state.movies.map((item, i) => {
                    return (
                      <View style={styles.slide}>
                          <Text style={styles.text}>{item}</Text>
                      </View>

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
            try{
              let result = await API.getBroadCasts();
              this.setState({
                movies: result.indexImageItemList.map((item, i) => {
                  return item.imageUrl
                })
              })
            }catch(err){
              console.error(err);
            }
    }

    componentDidMount() {
       this.fetchData();
   }
}

const styles = StyleSheet.create({
    container: {
      height:px2dp(45)
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#cccccc',
        fontSize: 15
    }
});
