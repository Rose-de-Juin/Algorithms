#Climbing Stairs

Speros walks the stairs at the Dojo multiple times every day. Often he takes 2 stairs at a time to work his quadriceps; he’s just that way.

Other days he mixes it up: with every footstep he randomly chooses to take 1 stair or 2.

You are given an integer representing the total number of stairs. Determine all ways to walk the stairs. Given `4`, return `[[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]]`. Solve recursively with no loops.

+ Second: assuming you always start with a left foot, return only those ways that end with a right step. So given `4`, you should return `[[1,1,1,1], [2,2]]`.

+ Third: instead of only returning those that end with a right step, only return those where the total number of steps climbed with left foot equal those climbed with right. So given `4`, you should return `[[1,1,1,1], [1,2,1], [2,2]]`.
