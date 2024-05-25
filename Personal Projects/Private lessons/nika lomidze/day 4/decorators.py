# snack_machine = get_snacks(200)
# for i in snack_machine:
#     print(i)

# def decor(func):
#   def wrap():
#     print("============")
#     func()
#     print("============")
#   return wrap

# def print_text():
#   print("Hello world!")

# decorated = decor(print_text)
# decorated()


# def my_decorator(func):
#     def wrapper():
    #     print("Something is happening before the function is called.")
    #     func()
    #     print("Something is happening after the function is called.")
    # return wrapper

# @my_decorator
# def say_hello():
#     print("hello")

# say_hello()
# #//////////////////////////////////////////
# def say_hello():
#     print("hello!")

# say_hello_decorated = my_decorator(say_hello)
# say_hello_decorated()


# def simple_decorator(function):
#     def wrapper():
#         print("Something is happening before the function is called.")
#         function()
#         print("Something is happening after the function is called.")
#     return wrapper

# @simple_decorator
# def greet():
#     print("hello world")

# # decorated_greet = simple_decorator(greet)

# greet()

# def greet_decorator(func):
#     def wrapper():
#         return "Hello, " + func() + "!"
#     return wrapper

# @greet_decorator
# def get_name():
#     return "Alice"

# print(get_name())