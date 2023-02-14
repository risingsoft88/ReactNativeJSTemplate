import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles";
import { connect } from "react-redux";
import { CommonActions } from '@react-navigation/native';

class Signup extends Component {
  _onSignupPress = () => {
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
          <Text style={styles.title}>Signup Screen</Text>
          <Button title='Signup' transparent onPress={this._onSignupPress} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  skipTerms: state.TermsReducer.skipTerms,
});

export default connect(mapStateToProps)(Signup);