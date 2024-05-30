# // 3. Combining Items: Combine items from multiple
# //  dictionaries into a single dictionary or list of tuples.


dict1 = {'apple': 1, 'orange': 2}
dict2 = {'banana': 3, 'grape': 4}
dict3 = {'cherry': 5, 'melon': 6}

combined_dict = {**dict1, **dict2, **dict3}

print(combined_dict)