'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
} from'react-native';
var DEFAULT_URL = 'http://www.lcode.org';

var YSWebView =React.createClass({
  render: function() {
    return (
      <View style={{flex:1}}>
        <WebView styleWebViewstyle={styles.webview_style}
          url={DEFAULT_URL}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    );
  },
});
var styles =StyleSheet.create({
    webview_style:{
       backgroundColor:'#00ff00',
    }
});
