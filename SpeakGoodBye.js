(function (window) {
  var bye = {}
  bye.word = "Good Bye";
  bye.greet = function (names) {
    console.log(bye.word + " " + names);
  }
  window.bye=bye

})
(window);
