let input = document.getElementById('input');
let btn = document.getElementById('btn');

function binarysearch(array1 , search){
   let array =   array1.sort(function(a, b) {
        return a - b;
    });
    console.log("Tableau trié du plus petit au plus grand :", array);
    let max = array[0] ;
    let min = array[0];
    let indexMax ;
    let indexMin = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        if(min > array[i]){
            min = array[i];
            indexMin = i;
        }
    }
    
    for(let i = 0 ; i < array.length ; i++){
        if(max < array[i]){
            max = array[i]
            indexMax = i;
        }
    }
    let mouyen = Math.floor((indexMax + indexMin) / 2);
    console.log(max , min , mouyen );
    console.log('indexMin = ' + indexMin);
    console.log('indexMax = ' + indexMax);
    
    if(search > array[mouyen]){
        for(let i = indexMax ; i < array.length ; i++){
            if(array[i] = search ){
                
                console.log(array[i] +  " est là");
                break;
            }
        }
    }else if(search < array[mouyen]){
        for(let i = indexMin ; i < array.length ; i++){
            if(array[i] = search ){
                console.log(array[i] +  " est là");
                break;
            }
        }
    }else if(search = array[mouyen]){
        console.log(array[mouyen] +  " est là");
    }
    
}

let array1 = [1, 2, 4, 6, 8, 10, 12, 16];
let array2 = [16, 12, 10, 8, 6, 4, 2, 1];
let array3 = [4, 6, 1, 10, 12, 2, 8, 16];
let array4 = [2, 4, 8, 1, 10, 16, 6, 12];

binarysearch(array1 , 6);
binarysearch(array2 , 4);
binarysearch(array3 , 1);
binarysearch(array4 , 10);



