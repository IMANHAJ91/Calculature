function insert(num){
    var myString=document.querySelector(".text-area").value;
    var lastChar=myString[myString.length-1];
    if(myString.length<30){
        if(!isNaN(num)||!isNaN(lastChar)||lastChar==null){
            document.querySelector(".text-area").value=myString+num;
        }
    }
    // else if(lastChar!=num){
    //     document.querySelector(".text-area").value=myString.replace(lastChar,num);
    // }

}
function equal(){
    var sum=document.querySelector(".text-area").value;
    if(sum){
        document.querySelector(".text-area").value=eval(sum);
    }
    
}
function clean(){
    document.querySelector(".text-area").value="";
}
function back(){
 var exp=document.querySelector(".text-area").value;

document.querySelector(".text-area").value=exp.substring(0,exp.length-1);
}