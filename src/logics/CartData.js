import { observable, computed } from 'mobx';

const CartData = observable([
  {
  	id: '10189293067',
  	name: '如水_扁桃仁680g扁桃仁坚果零食特产干果休闲零食',
  	price: 128,
  	count: 1,
  	img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t2626/46/1390605418/218264/fa4f212b/573d3ac9N0e611fc8.jpg',
  	checked: false,
    valid: 1,
  }, {
  	id: '10186544717',
  	name: '如水_小胡桃仁160g山核桃仁坚果仁 小胡桃仁 休闲零食',
  	price: 98,
  	count: 1,
  	img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t2788/250/2534705836/192700/b77cc21a/576a25bfN8e6294ee.jpg',
  	checked: false,
    valid: 1,
  }, {
    id: '10190916087',
    name: '如水_新疆葡萄干680g 坚果干果零食蜜饯新疆原味免洗葡萄干',
    price: 39.8,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t2644/354/1381504238/210644/ff3f557c/573d2bc1N4bf5c313.jpg',
    checked: false,
    valid: 1,
  }, {
    id: '10189376215',
    name: '如水 紫皮腰果580g 腰果仁带皮腰果原味坚果零食特产炒货',
    price: 128,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t2650/211/1370999490/218523/eaf4a2d3/573d23efN136035c8.jpg',
    checked: false,
    valid: 1,
  },/* {
    id: '1059327922',
    name: '双立人竹制砧板和Twin professional Y型剥皮刀',
    price: 398,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_g13/M08/07/0A/rBEhU1KS5KsIAAAAAAQsY_eHFUIAAF5hAMDp3EABCx7060.jpg',
    checked: false,
  }, {
    id: '10172816510',
    name: '双立人榉木砧板 菜板案板+Y型削皮刀 2件套',
    price: 398,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t3940/86/1580037719/137539/96b44926/5881853bN9349d76b.jpg',
    checked: false,
  }*/
]);

CartData.delet = (index) => {
  CartData[index].valid = 0;
}

CartData.minus = (index) => {
  CartData[index].count -= 1;
}

CartData.plus = (index) => {
  CartData[index].count += 1;
}

CartData.check = (checked, index) => {
  CartData[index].checked = checked;
}

CartData.count = computed(() => {
  return CartData.reduce((a, b) => {
    if(b.checked && b.valid){
      return a + b.count;
    } else {
      return a;
    }
  }, 0)
});

CartData.sum = computed(() => {
  return CartData.reduce((a, b) => {
    if (b.checked && b.valid) {
      return a + b.price * b.count;
    } else {
      return a;
    }
  }, 0)
});

CartData.isSelectAll = computed(() => {
  return CartData.reduce((a, b) => {
    if (a) {
      return b.checked;
    } else {
      return a;
    }
  }, true)? 1 : 0;
});

CartData.toggleAll = (checked) => {
  CartData.map(item => {
    item.checked = checked;
  });
};

export default CartData;

