# def multiply():
#     x = float(input("Enter the first number (x): "))
#     y = float(input("Enter the second number (y): "))
#     multiplied = x * y
#     print(f"Result: {multiplied}")

# multiply()

balance = 0

while True:
    user_input = input("Would you like to (A)dd or (R)emove money? (Q to quit) ").lower()

    if user_input == 'a':
        input_add = int(input('Enter the amount of money to add: '))
        balance += input_add
        print("Updated balance:", balance)
    elif user_input == 'r':
        input_remove = int(input('Enter the amount of money to remove: '))
        if input_remove <= balance:
            balance -= input_remove
            print("Updated balance:", balance)
        else:
            print("Error: Insufficient funds.")
    elif user_input == 'q':
        print("Exiting program.")
        break
    else:
        print("Invalid input. Please choose 'A' to add, 'R' to remove money, or 'Q' to quit.")
