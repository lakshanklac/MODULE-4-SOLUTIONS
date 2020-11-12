var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0;i<names.length;i++) {

  var jname = names[i].charAt(0).toLowerCase();
  
  if (jname=='j') {
    bye.greet(names[i]);
  } else {
    hello.greet(names[i]);
  }
}
