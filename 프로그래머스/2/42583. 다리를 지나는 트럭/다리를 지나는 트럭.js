function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let weight_sum = 0;
    let bridge = [];
    while(truck_weights.length) {
        answer++;
        if (bridge.length == bridge_length) {
            weight_sum -= bridge.shift();
        }
        if (weight_sum + truck_weights[0] <= weight) {
            let truck = truck_weights.shift()
            bridge.push(truck);
            weight_sum += truck
        } else {
            bridge.push(0);
        }
    }
    answer += bridge_length; // 마지막 트럭이 들어간 시점의 시간 + 다리 길이 = 총 소요 시간
    
    return answer;
}