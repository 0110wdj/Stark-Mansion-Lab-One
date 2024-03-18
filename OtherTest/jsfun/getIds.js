// 从数组 customers 中查找 所有年龄（age）小于 30 的人并将其 customerId 重新组成一个新的数组返回，达到如下代码执行效果：
const customers = [
  { name: 'Jack', age: 23, customerId: '001' },
  { name: 'Jam', age: 15, customerId: '002' },
  { name: 'Lilei', age: 36, customerId: '003' },
  { name: 'Hanmei', age: 47, customerId: '004' },
  { name: 'Dav', age: 29, customerId: '005' },
];
// ids内容：['001','002','005']
console.log('ids: ', customers.filter(i => i.age < 30).map(i => i.customerId))