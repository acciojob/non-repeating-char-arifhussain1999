function firstNonRepeatedChar(str) {
 // Write your code here
	
if (str.length === 0) {
    return null;
  }

  // Create an object to store the count of each character
  const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
