var input2 = document.getElementById('input2');
var input = document.getElementById('input');
  

function check(){
    let inputWord = input.value;
    let input2Letter = input2.value;
    let inputArray = inputWord.split('');  
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i].includes(input2Letter)){
            let letter = document.getElementById(i);
            letter.innerHTML = inputArray[i];
        }
    }
}
