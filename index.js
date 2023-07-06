

function sayHiToHeadphonedRoommate(s){
    if(s===s.toLowerCase()){
        return "I can't hear you!"
    }else if( s===s.toUpperCase()){
        return "YES INDEED!"
    }else if(s==="Let's have dinner together!"){
        return "I would love to!"
    }
}

function shout(str){
  return str.toUpperCase();
}
function whisper(str){
 return str.toLowerCase();
}
function logShout(str){
 return console.log(str.toUpperCase());
}
function logWhisper(str){
return console.log(str.toLowerCase());
}