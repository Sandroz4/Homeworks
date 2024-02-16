import math
#time left to finish a book

user_input = int(input("How many pages do you read in a day on average: "))
user_input2 = int(input("How many pages does the book have: "))

days_left = round(user_input2/user_input)

print(f"You will finish the book in {days_left} days.")