# 1. Merge Lists: Write a function to merge two lists into a single list without any duplicates.
# For example, merging [1, 2, 3] and [3, 4, 5] should result in [1, 2, 3, 4, 5].


def merge_lists(list1, list2):
    result = []  

    for i in list1:
        result.append(i)
    

    for i in list2:
        if i not in result:
            result.append(i)
    
    print(result)

merge_lists([1, 2, 3], [3, 4, 5]) 

