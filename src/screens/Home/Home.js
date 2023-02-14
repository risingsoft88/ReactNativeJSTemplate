import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Home Screen</Text>
        </View>
      </View>
    );
  }
}
