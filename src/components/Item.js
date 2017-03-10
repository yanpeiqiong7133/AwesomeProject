import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Circle from './Circle';
import Swipeout from 'react-native-swipeout';
import { observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		height: 100,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#dfdfdf',
		marginBottom: 10,
		backgroundColor: '#ffffff',
		paddingRight: 20,
	},
	img: {
	  width: 90,
	  height: 90,
	  borderWidth: 1,
	  borderColor: '#ececec',
	},
	content: {

	},
	priceLabel: {
	  color: '#ba6161',
	  fontSize: 12,
	  marginTop: 3,
	  marginRight: 3,
	},
	price: {
	  color: '#ba6161',
	  fontSize: 16,
	  alignItems: 'flex-start',
	},
	name: {
	  width: 200,
	  fontSize: 14,
	  marginBottom: 16,
	},
	rowList: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	},
	priceAndControls: {
	  alignItems: 'flex-end',
	},
	controls: {
	  alignItems: 'center',
	  width: 55,
	  marginRight:10,
	},
	button: {
	  paddingTop: 2,
	  paddingBottom: 2,
	  paddingLeft: 5,
	  paddingRight: 5,
	  justifyContent: 'center',
	  alignItems: 'center',
	  borderWidth: StyleSheet.hairlineWidth,
	  borderColor: '#d1d1d1',
	},
	buttonText: {
	  color: '#000',
	  fontSize: 16,
	},
	countText: {
	  fontSize: 15,
	  paddingTop: 3,
	  paddingBottom: 2,
	  width: 30,
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingLeft: 8,
	},
	swipeOut: {
	}
});

@observer
export default class Item extends Component {
	check = (checked) => {
	  const { index, cartData } = this.props;
	  cartData.check(checked, index);
	};

	minus = () => {
	  const { index, data: {id, name, price, count, img, checked }, cartData } = this.props;
	  if (count >1) {
	  	cartData.minus(index);
	  }
	};

	plus = () => {
	  const { index, data: {id, name, price, count, img, checked }, cartData } = this.props;
	  cartData.plus(index);
	};

	render() {
		const { index, data: {id, name, price ,count, img, checked }, cartData } = this.props;
		const swipeoutBtns = [{
		  underlayColor: '#cccccc',
		  backgroundColor: '#f23030',
		  text: '删除',
		  onPress: () => {
		  	cartData.delet(index);
		  }
		}];
		return (
		  <Swipeout right={swipeoutBtns} style={styles.swipeOut} backgroundColor="#f9f9f9">
		  <View style={styles.root}>
		  	<Circle onPress={this.check} checked={checked} />
		  	<Image style={styles.img} source={{uri: img}} />
		  	<View style={styles.content}>
		  	  <Text style={styles.name}>{name}</Text>
		  	  <View style={[styles.rowList, styles.priceAndControls]}>
		  	  	<View style={styles.rowList}>
		  	  	  <Text style={styles.priceLabel}>¥</Text>
		  	  	  <Text style={styles.price}>{price.toFixed(2)}</Text>
		  	  	</View>
		  	  	<View style={[styles.rowList, styles.controls]}>
		  	  	  <TouchableOpacity style={styles.button} onPress={this.minus}>
		  	  	  	<Icon name="ios-remove" style={styles.buttonText} />
			  	  </TouchableOpacity>
			  	  <Text style={[styles.button, styles.countText]}>{count}</Text>
			  	  <TouchableOpacity style={styles.button} onPress={this.plus}>
			  	  	<Icon name="ios-add" style={styles.buttonText} />
			  	  </TouchableOpacity>
		  	  	</View>
		  	  </View>  	  
		  	</View>
		  </View>
		  </Swipeout>
		);
	};
}