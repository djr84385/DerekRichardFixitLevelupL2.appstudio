var firstName = prompt("Enter your first name: ")
var userState = prompt ("Enter your state (i.e. NE for Nebraska): ")
var temp = Number(prompt("Enter a temperature (Fahreheit): "))

var stateCapital = userState.toUpperCase()
var nameCapital = firstName.charAt(0).toUpperCase() + firstName.slice(1)
var messages = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear A less heavy coat .', 'wear s light jacket and smile!']


console.log(`${firstName}`)
console.log(`${userState}`)
console.log(`${temp}`)
console.log(`${stateCapital}`)
console.log(`${nameCapital}`)

switch (true) {
  case (userState == "NE" && temp < 32):
  alert(`${nameCapital}, ${messages[0]}.`)
  break;
  case (userState == "NE" && temp >= 32  &&  temp < 50):
  alert(`${nameCapital}, ${messages[1]}.`)
  break;
  case(userState == "FL" && temp > 32  &&  temp < 50):
  alert(`${nameCapital}, ${messages[2]}.`)
  break;
  case(userState == "FL" && temp >= 50  &&  temp < 70):
  alert(`${nameCapital}, ${messages[3]}.`)
  break;
  default:
  alert('Please try again')
  break;
}
