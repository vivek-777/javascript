// map, filter, reduce, find, call apply bind ,  some, every, forEach, freeze, seal, assign, forEach, push pop shift unshift substr substring slice split

const abc = [1,2,3,4,5]

Array.prototype.myOwnMap = function(callback){
	let res = [];
	for(let i=0; i<this.length; i++){
  	const a = callback(this[i], i, this)
		res.push(a)
  }
  return res
}

Array.prototype.myOwnFilter = function(callback){
	let res = [];
	for(let i=0; i<this.length; i++){
  	const a = callback(this[i], i, this)
		if (a) res.push(this[i])
  }
  return res
}

Array.prototype.myOwnFind = function(callback){
	for(let i=0; i<this.length; i++){
  	const a = callback(this[i], i, this)
		if (a) return this[i]
  }
}

Array.prototype.myOwnReduce = function(callback, acc){
	let accumulator = acc;
	for(let i=0; i<this.length; i++){
  	accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator
}

/* console.log(abc.myOwnMap((x)=>x*2))
console.log(abc.myOwnFilter((x)=>x>2))
console.log(abc.myOwnFind((x)=>x>2))
console.log(abc.myOwnReduce((acc, value, index, arr)=>acc + value, 0)) */


const x = {
	a: 0,
	b: 1,
	abc: function(home, state) {
  	console.log(this.a + ' ' + this.b + ' ' + home + ' ' + state)
  }
}

const y = {
	a: 5,
	b: 10,
}

Function.prototype.myOwnCall = function(...args){
	let ref = args[0];
	if(ref.constructor === Object){
		ref.func = this;
		ref.func(...args.slice(1));
  }else{
  	this(...args.slice(1));
  }
}


Function.prototype.myOwnApply = function(...args){
	let ref = args[0];
	if(ref.constructor === Object){
		ref.func = this;
		ref.func(...args[1]);
  }else{
  	this();
  }
}

Function.prototype.myOwnBind = function(...args){
	let ref = this
	return function(...a){
      ref.myOwnCall(...args, ...a);
  }
}

/* x.abc.myOwnCall(y, "mau", "up")
x.abc.myOwnApply(y, ["mau", "up"]) */
let binding = x.abc.myOwnBind(y, "mau", "up")
console.log(binding());


