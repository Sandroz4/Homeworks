# friends = [('nika', 12),
#            ('sandro', 20),
#            ('gio', 11),
#            ('luke', 19),
#            ('beqa', 22),
#            ('sandro', 18)]

# age = lambda data:data[1] >= 18

# movie_club = list(filter(age, friends))

# print(movie_club)

# friends = [('nika', 12),
#            ('sandro', 20),
#            ('gio', 11),
#            ('luke', 19),
#            ('beqa', 22),
#            ('sandro', 18)]

# name = lambda data:data[0] == 'nika'

# only_sandro = list(filter(name, friends))

# print(only_sandro)


# #defining a function
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# def filter_odd(num):
#     return num % 2 == 1

# odd_numbers = [num for num in numbers if filter_odd(num)]

# print(odd_numbers)




# #filter()
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# def filter_even(num):
#     return num % 2 == 1

# even_numbers = filter(filter_even, numbers)

# print(even_numbers)

# #list of name
# names = ['Sandro', 'Nika', 'Luka', 'Gio', 'Samuel', 'Sara']

# #function to filter names starting with "S"
# def filter_name_s(name):
#     return name.lower().startswith('n')

# #apllying the filter function using filter
# filtered_names = list(filter(filter_name_s, names))

# print(filtered_names)

numbers = [1, 6, 3, 8, 5, 10, 7]

def filter_greater_5(num):
    return num > 5

filtered_numbers = list(filter(filter_greater_5, numbers))

print(filtered_numbers)