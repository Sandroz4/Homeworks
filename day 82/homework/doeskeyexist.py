# // 4. Check for Key Existence: Use get() to check if
# //  a key exists in the dictionary without raising a KeyError.

my_dict = {'apple': 1, 'orange': 2, 'banana': 3, 'grape': 4}


key_check = 'orange'
value = my_dict.get(key_check)

print(value)