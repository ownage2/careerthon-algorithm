function solution(phone_book) {
    let arr = phone_book.sort();
    let len = phone_book.length;
    
    for(let i = 1; i < len; i++) {
        if(arr[i].startsWith(arr[i - 1])) {
            return false;
        }
    }
    return true;
}