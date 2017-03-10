import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
	root: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#F5F5F5',
		justifyContent: 'space-between',
		borderTopColor: '#f5f5f5',
		borderTopWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',

	},
	selectWrapper:{
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
	},
	selectAll: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: StyleSheet.hairlineWidth,
	},
	checked: {
		backgroundColor: '#f23030',
	},
	selectText: {
		marginLeft: 15,
	},
	checkout: {
		width: 156,
		backgroundColor: '#f23030',
		paddingHorizontal: 20,
		height: 50,
		justifyContent: 'center',
	},
	checkoutText: {
		fontSize: 18,
		color: '#fff',
	},
});

import { observer } from 'mobx-react/native';

import Circle from './Circle';

@observer
export default class Footer extends Component {

	selectAll = (checked) => {
	  const { cartData } = this.props;
	  cartData.toggleAll(checked);
 	}

	goBack = () => {
		const { navigator } = this.props;
		navigator.pop();
	};

	render() {

		const { cartData } = this.props;
		return (
			<View style={styles.root}>
			  <View style={styles.selectWrapper}> 	
				  <Circle onPress={this.selectAll} checked={cartData.isSelectAll.get()} />
				  <Text style={styles.selectText}>全选</Text>
			  </View>
			  <Text>总计：¥{cartData.sum.get().toFixed(2)}</Text>
			  <TouchableOpacity style={styles.checkout} onPress={this.checkout} >
			  	<Text style={styles.checkoutText}>去结算（{cartData.count.get()}）</Text>
			  </TouchableOpacity>
			</View>

		);
	};
}