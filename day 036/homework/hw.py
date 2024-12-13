def manual_reverse(collection):
    res_list = []
    for i in range(len(collection) - 1,-1,-1):
        res_list.append(collection[i])
    return res_list

print(manual_reverse([1, 2, 3, 4, 5]))


def manual_replace(list,rev,add):
    result_list = []
    for element in list:
        if element == rev:
            result_list.append(add)
        else:
            result_list.append(element)
    return result_list

print(manual_replace([10, 11, 10, 11], 10, 20))


def manual_count(collection,value):
    count = 0
    for element in collection:
        if element == value:
            count += 1
    return count

print(manual_count([12, 13, 14, 12, 14, 100], 12))