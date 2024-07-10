# 3. Filter Odd Numbers: Write a function that takes
# a list of integers as input and returns a new list 
# containing only the odd numbers from the original list.

def filter_odd(list):
    res = []

    for i in list:
        if i %2 != 0:
            res.append(i)

    print(res)

filter_odd([1,2,3,4,5,6,7])