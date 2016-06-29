#Set Cover
Given a `number` and collection of arrays containing some of the numbers from `1` to `n`, find the smallest combination of those arrays that contains every number from `1` to `n`.  (In mathy terms, find the combination of the fewest sets such that their union is the set `{1,2,...,n}`).

Examples:
+ `setCover(5, [[1,2,3], [2,4], [3,4], [4,5]])` => `[[1,2,3], [4,5]]`
+ `setCover(5, [[1,2], [2,3,4], [4,5]])` => `[[1,2], [2,3,4], [4,5]]`
