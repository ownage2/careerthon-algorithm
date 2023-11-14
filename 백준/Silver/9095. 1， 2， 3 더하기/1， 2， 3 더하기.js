const path = process.platform === "linux" ? "./dev/stdin" : "9095.txt"
const [T, ...input] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const answer = [0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
    answer[i] = answer[i - 1] + answer[i - 2] + answer[i - 3];
}

for (let i = 0; i < T; i++) {
    console.log(answer[input[i]]);
}