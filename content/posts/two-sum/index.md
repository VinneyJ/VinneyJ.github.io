---
title: Two Sum Problem
description: Finding indices of the target sum in an array
date: '2022-10-23'
draft: false
slug: '/pensieve/two-sum'
tags:
  - dsa
  - python3
  - array
  - hashing
  - easy
---

## Problem 

Given an array of integers, return indices of the two numbers such that they add up to specific target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.

```python:title=twoSum.py
nums = [2, 7, 11, 15], target = 9
# Because nums[0] + nums[1] = 9
return [0, 1]
```
## Solution
> ### Brute Force Solution
> First loop through the array by starting from index `i=0`. Secondly, nest a loop that starts from `j=i+1` inside the first loop. Inside the nested loop, we'll put a condition that checks if `target - nums[i]` is equal to `nums[j]`. If the condition is true, we'll return an array of the corresponding indices.

```python:title=twoSum.py
def twoSum(nums, target):
    numslen = len(nums)
    for i in range(numslen):
        j = i + 1
        for j in range(numslen):
            if nums[j] == target - nums[i]:
                return [i, j]
    return ("No two sum of target: " + str(target))

lst = [2, 7, 11, 15]
tget = 13
print(twoSum(lst, tget))
#Returns: [0, 2]

lst = [2, 7, 11, 15]
tget = 5
print(twoSum(lst, tget))
#Returns: No two sum of target: 5

#Time complexity: O(n^2)
#Space: O(n)
```

The time complexity of the solution is `O(n^2)` and space of `O(n)`.

> ### Optimized Solution

> In this new solution, we will introduce a hashing mechanism to store the `complement` value. Declare a dictonary to store the diffrence between target and items in the list. Loop through the indices while checking if the `complement` is in the dictionary. If it exists access the index using the item `hash_map[complement]`. Return the index of complement and the current index. Otherwise return `No two sum of target`

```python:title=twoSum.py
def twoSum(nums, target):
    hash_map = {}
    numslen = len(nums)
    for i in range(numslen):
        complement = target - nums[i]
            if complement in hash_map:
                return [hash_map[complement], i]

        hash_map[nums[i]]=i
    return ("No two sum of target: " + str(target))

lst = [2, 7, 11, 15]
tget = 13
print(twoSum(lst, tget))
#Returns: [0, 2]

lst = [2, 7, 11, 15]
tget = 5
print(twoSum(lst, tget))
#Returns: No two sum of target: 5

#Time complexity: O(n)
#Space: O(n)
```
The time complexity of the solution is `O(n)` and space of `O(n)`.