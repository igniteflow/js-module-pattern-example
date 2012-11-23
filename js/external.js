/*
    Credit - Nathan Staines
    The structure is based on an article by Ben Cherry: http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

    Attempting to use a similar approach to what has been used on the jQuery version of todoMVC: https://github.com/addyosmani/todomvc/blob/ca401ceaae34cb9a3309de33ce1174598ca2bf8e/architecture-examples/jquery/js/app.js

    There's also this article on using objects to organize your code: http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/

    If you add any new functionality that you want to run on page load don't forget to initialize it
*/

var yourApp = (function (abc, $) {

  abc.App = {
    init: function() {
      this.anotherFunction();
      console.log('init()');
    },
    anotherFunction: function() {
       console.log('anotherFunction()');
    }
  };
  abc.App.init();

  abc.SomeOtherThing = {
    init: function() {
      //...as above
    }
    //...
  };
  abc.SomeOtherThing.init();
  
  return abc;

})(yourApp || {}, jQuery);

console.log(yourApp)
console.log(yourApp.App)
console.log(yourApp.SomeOtherThing)
console.log(yourApp.someParam);
console.log(yourApp.anotherParam);
console.log(yourApp.yetAnotherParam);