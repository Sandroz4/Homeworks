# # #python yield
# # def make_word():
# #   word = ""
# #   for ch in "spam":
# #     word +=ch
# #     yield word

# # print(list(make_word()))
 
# # #python yield 2
# def even_numbers():
#     n = 0
#     while True:  # This loop will run indefinitely
#         yield n
#         n += 2  # Increase n by 2 for the next even number

# # Create a generator object
# even_gen = even_numbers()

# # Let's print the first 5 even numbers
# for _ in range(5):  # Use _ as a placeholder for the loop variable since we don't need it
#     print(next(even_gen))  # Output: 0, 2, 4, 6, 8

