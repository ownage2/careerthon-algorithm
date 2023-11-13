function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        // 1. 스택에 숫자가 있고
        // 2. 숫자를 지울 횟수가 있고 (k > 0)
        // 3. 스택의 가장 위에 있는 숫자가 현재 숫자보다 작을 때, 스택에서 제거하고 횟수를 줄인다.
        while(stack.length > 0 && k > 0 && stack[stack.length-1] < number[i]) {
            k--;
            stack.pop();
        }
        stack.push(number[i]);
    }
    
    // 위의 반복문을 지나서도 k > 0 일 때, 스택에서 남은 k개 만큼 제거한다.
    stack.splice(number.length - k, k);

    return stack.join("");
}