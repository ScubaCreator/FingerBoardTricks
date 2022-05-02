/*var testvar = 10;
testvar = testvar*2;
testvar = testvar/5;
console.log(testvar);
*/
// good idea. combine tricks like frontside/backside + heelflip/kickflip
var flip = Math.floor(Math.random()*(5-1))+1;
var spin = Math.floor(Math.random()*(6-1))+1;
var extra = Math.floor(Math.random()*(6-1))+1;

//console.log(a);

if(extra == 1){
  extra = ""
}else if (extra == 2) {
  extra = ""
}else if (extra == 3) {
  extra = ""
}else if (extra == 4) {
  extra = " Switch"
}else if (extra == 5) {
  extra = " Body varial"
}


if (flip==1) {
  flip = "Kickflip"
}else if (flip==2){
  flip = "Heelflip"
}else if (flip==3){
  flip = "Hardflip"
}else if (flip==4){
  flip = "Inward Heelflip"
}

if (spin ==1) {
  spin = "Backside 180 "
}else if (spin == 2) {
  spin = "Frontside 180 "

}else if (spin ==3) {
  spin = "Nollie "

}else if (spin == 4) {
  spin = "Fakie "

}else if (spin == 5) {
  spin = ""

}

console.log("Do a "+spin+flip+extra);
