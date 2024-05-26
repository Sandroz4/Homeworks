# // 1. Sort : Convert the keys of a dictionary to
# //  a list and then sort them is ascending order.



my_dict = {'apple': 1,
           'orange': 2,
           'banana': 3,
           'grape': 4,
           'sandrikaa': 6
}


keys = my_dict.keys()
keys_list = list(keys)
sorted_keys = sorted(keys_list)

print(sorted_keys)
