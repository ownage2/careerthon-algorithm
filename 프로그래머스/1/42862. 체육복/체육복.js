function solution(n, lost, reserve) {
    var answer = 0;
    let lo_len = lost.length;
    let re_len = reserve.length;
    
    // 체육복 보유 현황 
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = 1;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < lo_len; j++) {
            if (lost[j] === i + 1) {
                arr[i]--;
            }
        }
        for(let j = 0; j < re_len; j++) {
            if (reserve[j] === i + 1) {
                arr[i]++;
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(arr[i] === 0 && arr[i-1] >= 2) { // 앞 사람에게 빌릴 경우
            arr[i]++;
            arr[i-1]--;
        }
        if(arr[i] === 0 && arr[i+1] >= 2) { // 뒷 사람에게 빌릴 경우
            arr[i]++;
            arr[i+1]--;
        }
    }
 
    answer = arr.filter(count => count >= 1).length;
    
    return answer;
}