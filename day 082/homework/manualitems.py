# // 8. Create a function called manual_items

def manual_items(x):
    items_list = []

    for key in x:
        items_list.append((key, x[key]))
    
    return items_list


my_dict = {'apple': 1, 'orange': 2, 'banana': 3, 'grape': 4}
print(manual_items(my_dict))  