# 2. List Comprehension:
# Create a list comprehension 
# that squares each element of a given list. For instance
# if the input list is [1, 2, 3, 4, 5], 
# the output should be [1, 4, 9, 16, 25].


def squarer(list):
    res = []

    for i in list:
        res.append(i**2)

    print(res)

squarer([1, 2, 3, 4, 5])