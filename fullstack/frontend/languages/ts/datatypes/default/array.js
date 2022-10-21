var data = [1, 2, 4, 5, 6];
var fruites = ['apple', 'boll', 'cat'];
var explicitdata = ["apple", "boll"];
var explicitdata1 = ["jj,ggh,ghgh ".concat(data)];
console.log(explicitdata1);
explicitdata.map((a)=>{console.log(a)})
console.log(explicitdata.map((a)=>{return a}))
explicitdata.push('cat')
console.log(explicitdata)
