var testString = "obstructed";
function numberOfSyllables(stringInput) {
  var numberOfVowels = 0;
  var traditonalVowels = "aeiou";
  for (i = 0; i < stringInput.length; i++) {
    console.log("This is I: " + i);
    console.log("This is letter examined: " + testString[i]);
    if (traditonalVowels.indexOf(testString[i]) != -1) {
      console.log("We have a vowel");
      if (i == (stringInput.length - 1)) {

      } else {
        if (traditonalVowels.indexOf(testString[i+1]) != -1 || testString[i+1] == "y") {
          console.log("letter after current vowel is a vowel");
        } else {
          console.log("letter after current vowel is not a vowel");
          console.log("Adding 1");
          numberOfVowels++;
        }
      }
      
    } else if (testString[i] == "y") {
      if (i != (stringInput.length - 1)) {
        if (traditonalVowels.indexOf(testString[i+1]) != -1) {
          console.log("Letter after y is a vowel");

        } else {
          console.log("Letter after y is not a vowel");
          numberOfVowels++;          
        }
      } else {
        console.log("this y is in last place");
        numberOfVowels++;
      }
    } 
  }
  return numberOfVowels;
}
console.log(numberOfSyllables(testString));
