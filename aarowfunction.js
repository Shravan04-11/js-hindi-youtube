// "use strict";

// const user = {
//   username: "shravan",
//   price: 199,

//   welcomeMessage: function(){
//     console.log(`${this.username},welcome to website`);
    
//   }
// }

// user.welcomeMessage();

// function chai(){
//   let username = "Shravan";
//   console.log(this.username);
// }

// chai()

const chai = () => {
  let username = "Shravan";
  console.log(this);
}

chai()