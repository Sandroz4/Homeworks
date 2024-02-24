

#lets find a factorial! of a number, both
# iteratively and recursively

# #iterative approach
# def factorial(x):
#     result = 1
#     if x > 0:
#         for y in range(1, x + 1):
#             result *= y
#         return result
# print(factorial(10))

# #recursive approach
# def factorial(x):
#     if x == 1:
#         return 1
#     else:
#         return x * factorial(x - 1)
# print(factorial(10))