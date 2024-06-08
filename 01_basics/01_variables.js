const accountId =144553
let accountEmail = "anushikachambial0167@gmail.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountState;
//accountId = 2 // not allowed because its a constant declared above 

accountEmail = "hc@hc.com"
accountPassword= "21212121"
accountcity= "bengluru"

/*
prefer not  to use var
because of issue in block scope and functional,scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])