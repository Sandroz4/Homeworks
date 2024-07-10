# // 2. Find Maximum or Minimum Value: Determine the
# //  maximum or minimum value in a dictionary and display its corresponding key.

my_dict = {'apple': 1, 'orange': 2, 'banana': 3, 'grape': 4}

max_key = max(my_dict, key=my_dict.get)
min_key = min(my_dict, key=my_dict.get)

print(max_key, min_key)