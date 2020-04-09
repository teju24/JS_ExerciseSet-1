function minMax(inputArray){
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
    console.log("Min:",min ,"Max:",max);
}