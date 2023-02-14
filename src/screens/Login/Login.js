import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from "./styles";
import { connect } from "react-redux";
import { CommonActions } from '@react-navigation/native';

class Login extends Component {
  _onLoginPress = () => {
    this.props.skipTerms ?
      this.props.navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
          { name: 'MainDrawer' },
        ],
      }))
      :
      this.props.navigation.navigate('Terms')
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Login Screen</Text>
          <Button title='Login' transparent onPress={this._onLoginPress} />
          <Button title='Signup' transparent onPress={() => this.props.navigation.navigate('SignupWith')} />
          <Button title='ResetPwd' transparent onPress={() => this.props.navigation.navigate('ResetPwd')} />
        </View>
      </View>
    );
  }
}




const mapStateToProps = (state) => ({
  skipTerms: state.TermsReducer.skipTerms,
});

export default connect(mapStateToProps)(Login);