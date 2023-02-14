import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from "./styles";

export default class ResetPwd extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>ResetPwd Screen</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by N</Text>
        </View>
      </View>
    );
  }
}
