'use strict';

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';



export default class YSWebView extends Component {
  static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'活动',
        headerTitleStyle:{
                color:'#555555'
        },
        // gestureResponseDistance:{horizontal:300},

    });

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <WebView styleWebViewstyle={styles.webview_style}
          url={this.props.navigation.state.params.url}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    webview_style:{
       backgroundColor:'#00ff00'
    }
});
