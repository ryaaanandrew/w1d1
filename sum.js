var args = process.argv.slice(2);


function sum(args) {
  var answer = 0;


  for (var i = 0; i < args.length; i++) {

    answer += Number(args[i]);

  }

  return answer
}

console.log(sum(args));