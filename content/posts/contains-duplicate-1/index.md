---
title: Contains Duplicate I
description: Finding if an array contains any duplicates.
date: '2022-10-23'
draft: false
slug: '/pensieve/contains-duplicate-1'
tags:
  - dsa
  - python3
  - array
  - easy
  - hashing
---

## Problem 

Given an array of integers, find if the array contains any duplicates.

Your function should return `true` if any value appears at least twice in the array, and it should return `false` if every element is distinct.

```python:title=duplicate.py
# Example 1
inputs = [1 ,2, 3, 1]
# Output: True

# Exapmle 2
inputs = [1 ,2, 3, 4]
# Output: False

# Example 3
inputs = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
# Output: True


```
## Solution

> We loop through the numbers list while appending each number into the new list.
> If the number being appended has a duplicate in the new list,
> the function returns True otherwise, if the numbers are added completely into the new list without duplicates we return False.
```python:title=duplicate.py

def containsDuplicate(nums):
  mapping_list = []

  for n in nums:
    if n in mapping_list:
      return True
    mapping_list.append(n)
  return False

#Time complexity: O(n)
#Space: O(n)
```
The time complexity of the solution is `O(n)` and space of `O(n)`.