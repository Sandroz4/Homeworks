




#function with def
def generate_even_numbers_list(limit):
    even_numbers_list = []
    for i in range(limit):
        if i % 2 == 0:
            even_numbers_list.append(i)
    return even_numbers_list

# Call the function and print the result
print(generate_even_numbers_list(5))  # Output: [0, 2, 4]


#generator function
def generate_even_numbers(limit):
    for i in range(limit):
        if i % 2 == 0:
            yield i

# Create a generator object
even_gen = generate_even_numbers(5)

# Iterate over the generator and print each value
for num in even_gen:
    print(num)  # Output: 0, 2, 4
