(function (window) {
  var hello = {}
  hello.word = "Hello";
  hello.greet = function (names) {
    console.log(hello.word + " " + names);
  }
  window.hello=hello

})
(window);
