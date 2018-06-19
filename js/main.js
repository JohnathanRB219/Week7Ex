document.getElementById("unique").innerText = "New Message";




function getFunky() {
	
	var how = 
	document.getElementById("boom").value
	console.log(how)

	document.getElementById("code").innerText = how

}

var myArray = ["when","how","why","what","who"];
// for (i=0; i < myArray.length; i++)
	console.log(myArray[0]);
	console.log(myArray[1]);
	console.log(myArray[2]);
	console.log(myArray[3]);
	console.log(myArray[4]);
	

var student ={Name:"Bob", age:"99", enrolled:"yes"}
console.log(student.Name)
console.log(student.age)
console.log(student.enrolled);

document.getElementById("two").innerText = student.Name;
document.getElementById("three").innerText = student.age;
document.getElementById("four").innerText = student.enrolled;


var myArray2 = [
{
	Name: "Duncan",
	Hobby: "Basketball",
	Team: "Spurs"
},
{
	Name: "Aaron",
	Hobby: "Baseball",
	Team : "Braves"
},
{
	Name: "Lewis",
	Hobby: "Football",
	Team: "Ravens"
}
];
for(var i = 0; i < myArray2.length; i++) {
	console.log(myArray2[i].Name);
	console.log(myArray2[i].Hobby);
	console.log(myArray2[i].Team);
}


document.body.style.color = "red";