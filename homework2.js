var formatHours = function(hour){
   hour = hour % 12
   if ( hour < 10 ) {
       hour = '0' + hour
   }
   return hour
}
var formatMinSec = function(time){
   if ( time < 10 ) {
       time = '0' + time
   }
   return time
}
var amOrPm = function(hour){
   if ( hour > 11 ) {
       return 'PM'
   }
   else {
       return 'AM'
   }
}
for ( var hour = 0; hour < 24; hour++ ) {
   for ( var minute = 0; minute < 60; minute++ ) {
       for ( var second= 0; second < 60; second++ ) {
           
           console.log(`${formatHours(hour)} : ${formatMinSec(minute)} : ${formatMinSec(second)} ${amOrPm(hour)}`)
       }
   }
}
// console.log(`${formatHours(hour)} : ${formatMinSec(minute)} : ${formatMinSec(second)} ${amOrPm(hour)}`)