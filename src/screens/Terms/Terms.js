import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles";

import * as ActionCreators from 'myredux/actions'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { CommonActions } from '@react-navigation/native';

class Terms extends Component {
  _onAgreePress = () => {
    this.props.setSkipTerms(true);
    this.props.navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [
        { name: 'MainDrawer' },
      ],
    }))
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Terms Screen</Text>
          <Button title='Agree' transparent onPress={this._onAgreePress} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  skipTerms: state.TermsReducer.skipTerms,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
