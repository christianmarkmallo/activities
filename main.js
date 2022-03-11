const form = document.querySelector("form");

const fname = document.querySelector('input[name="fname"]');

const lname = document.querySelector('input[name="lname"]');

const email = document.querySelector('input[name="email"]');

const course = document.querySelector('input[name="course"]');

const address = document.querySelector('input[name="address"]');

var checker = 0;

function validateInputs(){
	checker = 1;

	if(!fname.value){
		fname.nextElementSibling.classList.remove("hidden");
		fname.classList.add("redborder");
		checker = 0;
	}
	if(!lname.value){
		lname.nextElementSibling.classList.remove("hidden");
		lname.classList.add("redborder");
		checker = 0;
	}
	if(!email.value){
		email.nextElementSibling.classList.remove("hidden");
		email.classList.add("redborder");
		checker = 0;
	}

	if(!course.value){
		course.nextElementSibling.classList.remove("hidden");
		course.classList.add("redborder");
		checker = 0;
	}
	if(!address.value){
		address.nextElementSibling.classList.remove("hidden");
		address.classList.add("redborder");
		checker = 0;
	}
}


form.addEventListener("submit", (e) =>{
	e.preventDefault();
	validateInputs();

	if(checker == 1 ){
		var blob = new Blob(["Your Details: " + "\n" + "FULL NAME: " + fname.value + " " + lname.value + "\n" + "EMAIL ADDRESS: "+ email.value + "\n" + "COURSE TAKEN: " + course.value + "\n" + "ADDRESS: " + address.value],
                { type: "text/plain;charset=utf-8" });

		saveAs(blob, "MY_INFO.txt");

	}
	
});

fname.addEventListener("input", (e) =>{
	fname.nextElementSibling.classList.add("hidden");
	fname.classList.remove("redborder");
});

lname.addEventListener("input", (e) =>{
	lname.nextElementSibling.classList.add("hidden");
	lname.classList.remove("redborder");
});

email.addEventListener("input", (e) =>{
	email.nextElementSibling.classList.add("hidden");
	email.classList.remove("redborder");
});

course.addEventListener("input", (e) =>{
	course.nextElementSibling.classList.add("hidden");
	course.classList.remove("redborder");
});

address.addEventListener("input", (e) =>{
	address.nextElementSibling.classList.add("hidden");
	address.classList.remove("redborder");
});