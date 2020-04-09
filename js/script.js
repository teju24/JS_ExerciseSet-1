//Exercise-1
function minMax(inputArray){
    var output=[];
    var max=inputArray[0];
    var min=inputArray[0];
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i]>max){
            max=inputArray[i]
        }
        if(inputArray[i]<min){
            min=inputArray[i]
        }
    }
    // var min = Math.min(...inputArray);
    //var max = Math.max(...inputArray);
    output.push(min);
    output.push(max);
    console.log(output);
}

//Exercise-2
function filterArray(inputArray){
    var result = inputArray.filter(element => typeof(element)=="number");
    console.log(result);
}

//Exercise-3
function getStudentsName(studentsArray){
    var student =[];
    for(var i=0;i<studentsArray.length;i++){
        student.push(studentsArray[i].name);
    }
    console.log(student);
}

//Exercise-4
function hasKey(obj,key){
    keyPresent=false;
    var keys=Object.keys(obj);
    for(var i=0;i<keys.length;i++){
        if(keys[i]==key){
            keyPresent=true;
            break;
        }
    }
    console.log(keyPresent);
}


//Exercise-5
var handlers={
    submit:function(){
        var fname=document.getElementById('firstName').value;
        var lname= document.getElementById('lastName').value;
        var fullname=this.concateName(fname,lname);
       
        var output=document.getElementById('output');
        output.innerHTML=fullname;
    
    },

    concateName:function(name1,name2){
        var fullname = this.getUpperCase(name1)+" "+this.getUpperCase(name2);
        return fullname;
    },

    getUpperCase:function(name){
        debugger
        var u_name = name.charAt(0).toUpperCase() + name.slice(1);
        return u_name;
    }
}

