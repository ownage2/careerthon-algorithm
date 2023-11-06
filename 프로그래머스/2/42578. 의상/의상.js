function solution(clothes) {
    let answer = 0;
    let len = clothes.length;
    let type = new Map();
    let type2 = [];
    for(let i = 0; i < len; i++) {
        if(type.has(clothes[i][1]) === false) {
            type.set(clothes[i][1], 2)
            type2.push(clothes[i][1]);
        } else {
            type.set(clothes[i][1], type.get(clothes[i][1]) + 1);
        }
    }
    let len2 = type2.length;
    let temp = 1;
    for(let i = 0; i < len2; i++){
        temp = temp * type.get(type2[i]);
        // console.log(type.get(type2[i]));
    }
    // console.log(type);
    // console.log(type2);
    // console.log(temp)
    return temp - 1;
}