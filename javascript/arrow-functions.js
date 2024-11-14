// let user = {
//   name: "GFG",
//   gfg1: () => console.log("hello " + this.name), // no 'this' binding here
//   gfg2() {
//     console.log("Welcome to " + this.name); // 'this' binding works here
//   }
// };
// user.gfg1();
// user.gfg2();

// let user = {
//   show(){
//     console.log(arguments);
//   },
//   show_arrow : () =>  console.log(arguments)
//
// };
// user.show(1, 2, 3);
// user.show_arrow(1, 2, 3);

let x = function(){
  console.log(arguments);
};
// new x =(1,2,3);

