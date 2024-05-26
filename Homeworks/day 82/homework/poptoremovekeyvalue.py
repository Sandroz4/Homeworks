# // 5. Remove and Return Value: Use pop() to remove a 
# // key-value pair from a dictionary and return the corresponding value.

my_dict = {'apple': 1, 'orange': 2, 'banana': 3, 'grape': 4}


key_to_remove = 'banana'
value = my_dict.pop(key_to_remove, False)


print(value)
