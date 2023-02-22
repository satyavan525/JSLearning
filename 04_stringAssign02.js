function stringHandsOn() {
  console.log("**************1***********************");
  var str1 = "   Hey you are doing good, keep it up   ";
  console.log(`Given string is ${str1}`);
  console.log("**************2***********************");
  var lengthOfString = str1.length;
  console.log(`Length of given string is ${lengthOfString}`);
  console.log("**************3***********************");
  var removeFirst = str1.trimStart();

  console.log(`After removing first spaces :${removeFirst} `);
  console.log(
    `Length of string after removing after first spaces is :${removeFirst.length}`
  );

  var removeLast = str1.trimEnd();
  console.log(`After removing last spaces :${removeLast}`);
  console.log(
    `Length of string after removing last spaces :${removeLast.length}`
  );
  console.log("**************4***********************");
  var str2 = str1.trim();
  console.log(`After removing all spaces :${str2}`);
  console.log(`Length of string after removing all spaces :${str2.length}`);

  var allSpaces = str1.length - str2.length;
  console.log(`Total number of extra spaces in given string are :${allSpaces}`);
  console.log("**************5***********************");
  var firstLetter = str2.charAt(0);
  var lastLetter = str2.charAt(str2.length - 1);
  console.log(
    `The first character is ${firstLetter} and last character is ${lastLetter}`
  );
  console.log("**************6***********************");
  var count = str2.split(" ");
  console.log(`Total number of words in string is ${count.length} `);
  console.log("**************7***********************");
  var indexOfGood = str2.indexOf("good");
  console.log(`Index of good is ${indexOfGood}`);
  console.log("**************8***********************");
  var substring1 = str2.substring(22, str2.length);
  console.log(
    `Substring starting from index 22 using substring is ${substring1}`
  );
  var substring2 = str2.slice(22, 34);
  console.log(`Substring starting from index 22 using slice is ${substring2}`);
  var end = str2.endsWith("up");
  console.log("**************9***********************");
  console.log(`String end with up :${end}`);
  var start = str2.startsWith("Hey");
  console.log("**************10***********************");
  console.log(`String start with good :${start}`);
  console.log(`Final length of string is :${str2.length} `);
}
stringHandsOn();
