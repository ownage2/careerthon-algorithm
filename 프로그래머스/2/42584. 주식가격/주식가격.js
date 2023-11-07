function solution(prices) {
    let answer = [];
    let len = prices.length;
    for(let i = 0; i < len; i++) {
        let temp = 0;
        for(let j = i + 1; j < len; j++) {
            temp++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(temp);
    }
    
    return answer;
}