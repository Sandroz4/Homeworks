# recrusion = a function that calls itself from within
#             helps to visualize a complex problem into basic steps,
#             which can be solved more easily iteratively or recursively

# #Iterative approach
# def walk(steps):
#     for step in range(1, steps + 1):
#         print(f'you take step #{step}')

# walk(100)


#iterative

# def walk(steps):
#     for step in range(50, steps + 1):
#         print(f'you took step #{step}')

# walk(100)

# #recursive approach

# def walk(steps):
#     if steps == 0:
#         return
    
#     walk(steps - 1)
#     print(f'you take step #{steps}')

# walk(100)


# def walk(steps):
#     if steps == 0:
#         return

#     walk(steps - 1)
#     print(f'you take step #{steps}')
   
    
# walk(100)


# how does
# this work exactly when we enter the walk
# function after accepting a number of
# steps we check our base condition then
# we invoke the walk function again but
# pass in one less than the number we
# originally accepted in a way we're
# creating a loop but we're involving the
# function itself










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

# def factorial(x):
#     result = 1
#     if x > 0:
#         for i in range(1, x + 1):
#             result = result * i
#         return result
    
# print(factorial(4))

#1*2*3*4
#4*3*2*1
# def factorial2(x):
#     r = 1
#     for i in range(1, x + 1):
#         if r > 500:
#             break
#         r = r * i
#     return r
# print(factorial2(4))

#1*2*3*4
#4*3*2*1










# #recursive approach
# def factorial(x):
#     if x == 1:
#         return 1
#     else:
#         return x * factorial(x - 1)
# print(factorial(10))


# def factorial(x):
#     if x == 1:
#         return 1
#     else:
#         return x * factorial(x - 1)
# print(factorial(10))


# def factorial2(x):
#     r = 1
#     for i in range(1, x + 1):
#         if r > 100000000000:
#             break
#         r = r * i
#     return r

# print(factorial2(10))




# #factorial calc
# def factorial(n):
#     if n == 0:
#         return 1
#     else:
#         return n * factorial(n-1)
    
# print(factorial(5))

# def fibonacci(n):
#     if n <= 1:
#         return n
#     else:
#         return fibonacci(n - 1) + fibonacci(n - 2)

# print(fibonacci(7))

# def countdown(n):
#     if n <= 0:
#         print('lift off')
#     else:
#         print(n)
#         countdown(n - 1)

# countdown(10)

# def sum_of_n(n):
#     if n == 1:
#         return 1
#     else:
#         return n + sum_of_n(n - 1)
    
# number = int(input("input a number: "))
# result = sum_of_n(number)
# print(f'sum of the first {number} numbers is {result}')


def fib(x):
  if x == 0 or x == 1:
    return 1
  else: 
    return fib(x-1) + fib(x-2)
print(fib(4))