# 4. Find Common Elements: Implement a function that takes 
# two lists as input and returns a list containing the common
# elements between them


def common_elements(list1, list2):
    res = []
    for i in list1:
        if i in list2:
            res.append(i)
    print(res)


common_elements([1, 2, 3, 4], [3, 4, 5, 6])
