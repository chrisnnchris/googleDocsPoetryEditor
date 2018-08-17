var testString = "mysterious";
function numberOfSyllables(stringInput) {
  var numberOfVowels = 0;
  var traditonalVowels = "aeiou";
  for (i = 0; i < stringInput.length; i++) {
    console.log("This is I: " + i);
    console.log("This is letter examined: " + testString[i]);
    if (traditonalVowels.indexOf(testString[i]) != -1) {
      console.log("We have a vowel");
      if (i != (stringInput.length - 1)) {
        console.log("Not at the end");
        numberOfVowels++;
      } else {
        console.log("At the end");
        numberOfVowels--;
      } 
    } else if (testString[i] == "y") {
      console.log("We have a y");
      if (i != (stringInput.length - 1)) {
        if (traditonalVowels.indexOf(testString[i+1]) != -1) {
          console.log("Letter after y is a vowel");

        } else {
          console.log("Letter after y is not a vowel");
          console.log("adding 1");
          numberOfVowels++;          
        }
      } else {
        console.log("this y is in last place");
        console.log("adding 1");
        numberOfVowels++;
      }
    } 
  }
  console.log("dipthong and trithong testing");
  for (i = 0; i < stringInput.length; i++) {
    console.log("This is I: " + i);
    console.log("This is letter examined: " + testString[i]);
    if ((traditonalVowels.indexOf(testString[i+1]) != -1) && (traditonalVowels.indexOf(testString[i+2]) != -1)) {
      console.log("We have a triphtong");
    }    
  }
  console.log("Checking for null");
  console.log(testString[50]);
  return numberOfVowels;
}
console.log("This is number of syllables: " + numberOfSyllables(testString));
