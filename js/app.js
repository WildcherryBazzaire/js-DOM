/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").innerHTML = "Project Manager";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/

document.getElementById("alias3").innerHTML = "Concatennation";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
var profile = document.getElementsByClassName("profile");

profile[0].innerHTML = "I died XD LOL";
profile[0].style.color = "green";

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/

profile[1].innerHTML = "Rest in pepperoni";

/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/

var alias = document.getElementsByClassName("alias");
alias[2].innerHTML = "Frozo";

/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/

var creation = document.createElement("div");
creation.id = "name7";
creation.innerHTML = "Simpson Ripoff";
document.getElementById("nameParent").appendChild(creation);
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/

var creation2 = document.createElement("div");
creation2.id = "alias8";
creation2.innerHTML = "Old Man";
document.getElementById("aliasParent").appendChild(creation2);
//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

var creation3 = document.getElementsByClassName("block3 col-sm-4");
creation3[2].childNodes[0].src = "https://images-na.ssl-images-amazon.com/images/I/510UdaXI86L.jpg";

var pDescript = document.createElement("p");
var pQuote = document.createElement("p");
var pBio = document.createElement("p");

pDescript.innerHTML = "Xlea eseehc";
pQuote.innerHTML = "Piggy in the Middle";
pBio.innerHTML = "\"Cheese & Onions\"";


creation3[2].appendChild(pDescript);
creation3[2].appendChild(pQuote);
creation3[2].appendChild(pBio);