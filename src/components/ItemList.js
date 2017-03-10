import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Item from './Item';

import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
	root: {
		flex:1,
		backgroundColor: '#f9f9f9',
		marginBottom: 40,
		
	}
});

import cartData from '../logics/CartData'

@observer
export default class ItemList extends Component {
	goBack = () => {
		const { navigator } = this.props;
		navigator.pop();
	};

	render() {
		const { cartData } = this.props;
		return (
		  <ScrollView style={styles.root}>
		    {
		      cartData.map((data, index) => {
		      	if(data.valid){
		      	  return <Item key={data.id} index={index} data={data} cartData={cartData} />;
		      	}
		      	
		      })
		    }
		  </ScrollView>

		);
	};
}