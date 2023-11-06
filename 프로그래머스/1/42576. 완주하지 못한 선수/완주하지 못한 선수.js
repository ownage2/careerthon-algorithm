function solution(participant, completion) {
    let answer = '';
    let arr1 = participant.sort(); // ["eden", "kiki", "leo", "mama" ]
    let arr2 = completion.sort(); // ["eden", "kiki", "mama"]
    let len = arr1.length;
    
    for(let i = 0; i< len; i++){      
        if(arr1[i] !== arr2[i]){
            answer = arr1[i];
            break;
        }
    }
    
    return answer;
}