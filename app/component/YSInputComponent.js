import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  PropTypes,
  StyleSheet,
  ToastAndroid
} from 'react-native'
import Icon from 'react-native-vector-icons/iconfont'
import px2dp from '../util/Tools'

class YSInput extends Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  //   txtHide: React.PropTypes.string,
  //   ispassword: React.PropTypes.bool
  // }

  static defaultProps = {
    name: '名称',
    txtHide: '内容',
    ispassword: false
  }
  constructor(props) {
    super(props)
    this.state = {
      txtValue: "",
      endEdit:true
    }
  }
  render() {
    var {
      style,
      name,
      txtHide,
      ispassword
    } = this.props
    return (<View style={styles.container}>
      <View style={styles.txtBorder}>
        <Icon name={"ic_my"} size={px2dp(22)} style={{
            width: 22,
            marginLeft: 10,
            marginTop: 9,
            textAlign: "left"
          }} color={"#dddddd"}/>
        <TextInput underlineColorAndroid={'transparent'} selectionColor={"#aaaaaa"} style={styles.textInput} multiline={false} placeholder={txtHide} password={ispassword}
          onChangeText={(text) => {
            this.setState({txtValue: text});
          }} value={this.state.txtValue} onFocus={() => {
            this.setState({endEdit: false, txtValue: ''});
          }} onEndEditing={(event) => {
            this.setState({endEdit: true});
          }}
        value={this.format(this.state.txtValue)} />
      </View>
    </View>)
  }
  getValue() {
    return this.state.txtValue
  }

  valid(value) {
    if (value && !/^\d{0,25}$/g.test(value)) {
      return value.replace(/[^0-9]/ig, '');
    }
    return value;
  }
  format(obj) {
    var value = obj;
    if(value.length > 13){
      value = value.substr(0,13);
      return value;
    }
     value = value.replace(/\s*/g, "");
    var result = "";
    for (var i = 0; i < value.length; i++) {
      if (i == 3 || i == 7) {
        // result.push(" " + value.charAt(i));
        result = result+" "+value.charAt(i)
      } else {
        // result.push(value.charAt(i));
        result = result+value.charAt(i)
      }
    }
    return result;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: 375,
    backgroundColor: "#ffffff"

  },
  txtBorder: {
    height: 40,
    flex: 1,
    borderBottomWidth: 0.3,
    borderColor: '#cccccc',
    flexDirection: 'row',
    backgroundColor: "#ffffff"

  },
  textInput: {
    height: 40,
    width: 300,
    paddingLeft: 18
  }
})

module.exports = YSInput;
