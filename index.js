const luckyNumber = document.querySelector("#luckyNumber");
const dateOfBirth = document.querySelector("#dateOfBirth");
const btnCheck = document.querySelector(".btnCheck");
const message = document.querySelector(".message");
// console.log("hello");
btnCheck.addEventListener("click", function () {
	var birthDate = new Date(dateOfBirth.value);
	if (birthDate == "Invalid Date") {
		writeMessage("enter a date please");
		return;
	}
	var year = birthDate.getFullYear();
	var date = birthDate.getDate();
	var month = birthDate.getMonth() + 1;
	var sum = 0;
	// console.log(year % 10);

	if (luckyNumber.value == "" || Number(luckyNumber.value) == 0) {
		writeMessage(
			"luckyNumber should not be empty and should be greater than 0"
		);
		return;
	}
	var num = Number(luckyNumber.value);
	// while (year != 0 || date != 0 || month != 0) {
	//   sum = sum + (year % 10) + (date % 10) + (month % 10);
	//   console.log(sum);
	//   year = Math.trunc(year / 10);
	//   month = Math.trunc(month / 10);
	//   date = Math.trunc(date / 10);
	// }
	while (year != 0) {
		sum = sum + (year % 10);
		year = Math.trunc(year / 10);
	}
	// console.log(sum);
	while (date != 0) {
		sum = sum + (date % 10);
		date = Math.trunc(date / 10);
	}
	// console.log(sum);
	while (month != 0) {
		sum = sum + (month % 10);
		month = Math.trunc(month / 10);
	}
	// console.log(sum);
	// console.log(sum, num);
	// console.log(sum % num);

	if (sum % num == 0) writeMessage("Lucky Birthday");
	else writeMessage("Not a Lucky Birthday");
});

function writeMessage(msg) {
	message.innerHTML = msg;
	message.style.border = "2px solid black";
	message.style.padding = "0.5rem 1rem";
}
