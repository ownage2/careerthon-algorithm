const getPermutations= function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push  
    });

    return results; // 결과 담긴 results return
};

function solution(k, dungeons) {
    let answer = -1;
    let cases_arr = []; // 모든 던전 탐험 경우의 수
    
    // 한 번 ~ dungeons.length번 만큼 탐험했을 때 경우의 수
    for(let i = 1; i <= dungeons.length; i++) {
        let temp = getPermutations(dungeons, i); 
        cases_arr.push(...temp);
    }

    // 모든 던전 탐험 경우의 수에서 각각의 경우마다 반복(완전탐색)
    cases_arr.forEach(cases => {
        let energy = k;
        let explore = 0;
        for(let i = 0; i < cases.length; i++){
            if(energy >= cases[i][0]) {
                energy -= cases[i][1];                
                explore++;
            } else {
                break;
            }
        }
        answer = Math.max(answer, explore); // 각 경우마다 최대 탐험 수를 비교하여 최대값 갱신
    })
    
    return answer;
}