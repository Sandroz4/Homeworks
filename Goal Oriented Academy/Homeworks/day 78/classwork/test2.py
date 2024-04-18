# # დავალება: შექმენით my_info dict, სადაც გვექნება კუთვნილებები. საბოლოოდ კი დაბეჭდავთ მას


# my_info = {
#     "Name": "Sandro",
#     "Hobby": "Coding",
#     "Academy": "GOA",
# }


# print(my_info)



#2


user = {
    'name': '',
    "password": '',
}

name = input('lease enter your name: ')
password = input('please enter your password: ')

user['name'] = name
user['password'] = password

print('name:', user.get('name', 'no found!'))
print('password:', user.get('password', 'not found!'))


