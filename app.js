
//string
// var greet="Hello";
// console.log(greet.length);

//Search
// var str="Welcome To Myanmar";
// alert('Hi');
// var pos=str.search('To');
// console.log(pos);

//slice
// var str="Apple,Banana,KIwi";
// var res=str.slice(0,5);
// console.log(res);

// //subString
// var str="Apple,Banana,KIwi";
// var res=str.subString(6,12);
// console.log(res);

// //replace
// var str="Welcome IT";
// var res=str.replace("welcome", "hello");
// console.log(res);

//number method
// var x=123;
// //to String();
// var y=x.toString();
// console.log(typeof(y));

// //tofixed
// var x=9.564;
// console.log(x.tofixed(1))

//number()
// var	x=false;
// console.log(number(x));

// //ParseInt()
// var	x=10.6789;
// console.log(ParseInt(x));

//Array
// var myarray={"mgmg", "AungAung","KyawKyaw"};
// console.log(myarray);
// console.log(myarray[0]);

// //
// var myarray=[];
// myarray[0]="mgmg";
// myarray[1]="aung";
// myarray[2]="kyaw";
// console.log(myarray);

// var numberarray={1,2,[7,8,9],[5,6,0,4]};

// console.log(numberarray[2][1]);//8 ko lo chin
// console.log(numberarray[3][2]);//0 ko lo chin

//Array method
 var months=["Jan","Feb","March", "April"];
// //console.log(months.length);
// var lastarray=months[months.length-1];
// console.log(lastarray);
// console.table(months);

//push()
// months.push("May");
// console.table(months);
// //pop()
// months.pop();
// console.table(months);

// //shift in front of ko delete
// months.shift();
// console.table(months);
// //unshift in front of add
// months.unshift();
// console.table(months);

//splice delete of behind the index 1
// months.splice(1);
// console.table(months);
// //2 ka count pi delete
// months.splice(1,2);
// console.table(months);
// //delete,count,replace
// months.splice(1,2,"May");
// console.table(months);


var	 months_one=["May","June"]
// //concat();
var	myarray=months.concat(months_one);
console.log(myarray);

//&& ,//
//conditional statement
//if,if else,if else if else,switch

// if(4,5){

// 	console.log("answer is right");
// }else{
// 	console.log("answer is wrong");
// }

// if(4<5 && 3>2){

// 	console.log("answer is right");
// }else{
// 	console.log("answer is wrong");
// }

// var age=20;
// if(age==11){

// 	console.log("your age is 11");
// }else if(age==15){
// 	console.log("your age is 15");
// }

// else if(age==20){
// 	console.log("your age is 20");
// }
// else {
// 	console.log("your age is 50");
// }

//looping
//for ,while,do while,foreach(array only),forin(array)

//for()know loop count exactly


// for (var i=0; i<=10;i++){
//   //console.log("tts"+ "<br>");
//   document.write("tts"+ "<br>");
// }

// var cars=["Bin", "Sunny","Honda"];
// var length=cars.length;
// //console.log(length);
// for (var i=0; i<length;i++){
  
//   document.write(cars[i]+"<br>");
// }

// for (var i=0; i<10;i++){
// 	if(i==3){
// 		//continue;
// 		break;
// 	}
  
//   document.write("the number is "+i+"<br>");
// }

//while loop

// var num=100;
// while(num>=20){
// 	document.write(num+"<br>");
// 	num-=5;

// }

// var num=15;//condition wrong lae> 1 time work tal
// do{
// 	document.write(num+"<br>");
// 	num-=5;
// }while(num>=20)

//foreach loop (for array pae ya)

var data="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod";
	

//var myarray="min*pike*mhu";
// var dd=data.split("");
// //console.table(dd);
// 					//(v,i)
// dd.forEach(function(element,index){
// 	console.log(element);//v
// });

//forin(index loop pat)
// var dd=["one","two","three"];
// for(x in dd){
// 	console.log(dd(x));
// }






















































