# def countdown():
#   i=5
#   while i > 0:
#     yield i
#     i -= 1
    
# for i in countdown():
#   print(i)

# def generate_numbers():
#     for i in range(1, 5):
#         yield i

# # Calling the generator function
# numbers_generator = generate_numbers()

# # Retrieving values using the next() function
# print(next(numbers_generator))
# print(next(numbers_generator))
# print(next(numbers_generator))
# print(next(numbers_generator))


# def infinite_sevens():
#   while True:
#     yield 7
        
# for i in infinite_sevens():
#   print(i)


# def numbers(x):
#   for i in range(x):
#     if i % 2 == 0:
#       yield i

# print(list(numbers(11)))


# def my_generator(n):

#     # initialize counter
#     value = 0

#     # loop until counter is less than n
#     while value < n:

#         # produce the current value of the counter
#         yield value

#         # increment the counter
#         value += 1

# # iterate over the generator object produced by my_generator
# for value in my_generator(3):

#     # print each value produced by generator
#     print(value)


# def count_to(maxNum):
#     count = 1
#     while count <= maxNum:
#         yield count
#         count += 1

# for number in count_to(6):
#     print(number)




# return

# def get_snack(money_inserted):
#     if money_inserted >= 2:
#         return "Chips"
#     else:
#         return "Not enough money"

# snack = get_snack(10)
# print(snack)


# # yield

# def get_snacks(money_inserted):
#     snacks = ["Chips", "Chocolate", "Soda", "Cookie", "Coke", "Sprite"]
#     for snack in snacks:
#         if money_inserted >= 2:
#             yield snack
#             money_inserted -= 2

# snack_machine = get_snacks(12)
# print(next(snack_machine))
# print(next(snack_machine))
# print(next(snack_machine))
# print(next(snack_machine))
# print(next(snack_machine))
# print(next(snack_machine))

#yield
# def get_snacks(money_inserted):
#     snacks = ["Chips", "Chocolate", "Soda"]
#     while True:
#         for snack in snacks:
#             if money_inserted >= 2:
#                 yield snack
#                 money_inserted -= 2
#             elif money_inserted < 2:
#                 break

# snack_machine = get_snacks(200)
# for i in snack_machine:
#     print(i)

