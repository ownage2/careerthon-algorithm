function solution(citations) {
    let answer = citations.length;
    while(answer >= 0) {
        let using = citations.filter((a) => a >= answer);
        if (using.length >= answer) {
            return answer;
        }
        answer--;
    }
}