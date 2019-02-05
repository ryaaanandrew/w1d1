/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

function joinList(argument) {
  var joined = '';

  if(argument === undefined ) {
    return joined;
  } else {
    for (var i = 0; i < argument.length; i++) {
      if(!joined){
        joined = argument[i];
      } else {
        joined = joined + ', ' + argument[i];
      }
    }
  }
  return joined;
}

console.log("Today I learned about " + concepts + ".");