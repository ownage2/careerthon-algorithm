function solution(numbers) {
    let arr = numbers.map((a) => a.toString()).sort((a,b) => (b + a) - (a + b));
    return arr[0] === "0" ? "0" : arr.join("");
}