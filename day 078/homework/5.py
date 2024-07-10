# 5. List Manipulation: Write a function to remove the duplicates
# from a given list while preserving the original order of elements. 
# For example, if the input list is [1, 2, 3, 2, 4, 1], the output 
# should be [1, 2, 3, 4]


def remove_duplicate(list):
    result = []  

    for i in list: 
        if i not in result:  
            result.append(i)  
    print(result)

remove_duplicate([1, 2, 3, 2, 4, 1])
