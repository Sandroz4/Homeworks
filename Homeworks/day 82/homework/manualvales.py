# // 7. Create a function called manual_values

def manual_values(x):
    values_list = []

    for key in x:
        values_list.append(x[key])
   
    print(values_list)


my_dict = {'apple': 1, 'orange': 2, 'banana': 3, 'grape': 4}

manual_values(my_dict)