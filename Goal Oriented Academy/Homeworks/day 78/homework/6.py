# 6. Merge Dictionaries: Write a function to merge two dictionaries into a single dictionary.
# If there are overlapping keys, prioritize the values from the second dictionary. 
# For example, merging {'a': 1, 'b': 2} and {'b': 3, 'c': 4} should result in {'a': 1, 'b': 3, 'c': 4}

def merge_dict(dict1, dict2):
    merged_dict = dict1.copy()  
    merged_dict.update(dict2) 
    
    print(merged_dict)

merge_dict({'a': 1, 'b': 2}, {'b': 3, 'c': 4})
