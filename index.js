/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const Counter = (arr) => {
        const counter = {};

        for(let i = 0; i< arr.length; i++){
            counter[arr[i]] = ((counter[arr[i]]? counter[arr[i]]:0)+ 1)
        }

        return counter;
    }

    const numbers_counter = Counter(arr);

    const numbers_counter_entries = Object.entries(numbers_counter);
    
    numbers_counter_entries.sort((a,b) => a[1] - b[1])
    // const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

    for(let i = 0; i< numbers_counter_entries.length;i++){
        let value = numbers_counter_entries[i][1];
        let key = numbers_counter_entries[i][0]

        if(k >= value){
            k -= value;
            console.log(value, key,k)
            delete numbers_counter[key]
        }
    }
    return Object.keys(numbers_counter).length
};
