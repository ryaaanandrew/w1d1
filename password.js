var args = process.argv.slice(2);

function password(args){
  var arg = args[0];
  var output = '';

  for(var i = 0; i < arg.length; i++) {
    if(arg[i] === 'a') {
      output += '4';
      // console.log(arg[i]);
    } else if (arg[i] === 'e') {
      output += '3';
    } else if (arg[i] === 'o') {
      output += '0';
    } else if (arg[i] === 'l') {
      output += '1';
    } else {
      output += arg[i];
    }
  }
  return output;
}

console.log(password(args))

