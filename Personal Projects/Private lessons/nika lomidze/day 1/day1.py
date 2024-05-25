# named function
# def my_func(f, arg):
#   return f(arg)

# #lambda func
# (lambda x: 2*x*x, 5)
# print(func())





#pure function
# output always depends on the input


#impure function
# output doesnt always depend on the input



#named function
# def polynomial(x):
#     return x**2 + 5*x + 4
# print(polynomial(-4))

#lambda
# a = (lambda x: x**2 + 4) (0)
# print(a)

# def apply_twice(func, arg):
#    return func(func(func(func(arg))))

# def add_five(x):
#    return x + 5

# print(apply_twice(add_five, 10))



# array = ["basketball",5,1.2]

# def impure(x):
#     array.append(x)
#     return array

# print(impure(1))


# def my_func(f, arg):
#   return f(arg)

# print(my_func(lambda x: 2**x*x, 5))


addition = lambda x, y, z: x + y + z

result = addition(3, 4, 9)

print(result)