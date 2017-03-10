import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text
} from 'react-native';


import cartData from '../logics/CartData';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default class ShopCart extends Component {
  render() {
    const { navigator } = this.props;
  	return (
      <View style={styles.root}>
        <Header navigator={this.props.navigator} />
        <ItemList cartData={cartData} />
        <Footer cartData={cartData} />
      </View>
    )
  }
}