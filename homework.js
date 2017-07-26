var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//ages
// for (var i = 0; i < students.length; i++) { 
// 	console.log(students[i].age)
// }
//name/city
for (var i = 0; i < students.length; i++) { 
	console.log(students[i].name + " " + students[i].city + ",")
}

// if ('city' == 'Boulder') {
// 	for (var i = 0; i < students.length; i++) { 
// 		console.log(students[i].name + " is from" + students[i].city)
// }
// else {
// 	for (var i = 0; i < students.length; i++) {
// 		console.log(students[i].name)
// 	}
// }
// }