# nums = [2, 5, 7, 1, 9]
# print(nums)
# print(*nums)

# def order_pizza(size, *toppings):
#     print(f'Ordered a {size} pizza with the toppings {toppings}')

# order_pizza("large", "mushroom", "olive", "cheese", "bacon")

mainNumber = int(input("Input a number:"))

operationArray = ["a","s","m","d","e","q"]

while True:
    while True:
        operation = input("""Select an operation to do with the number
(A) for addition
(S) for subtraction
(M) for multiplication
(D) for division
(E) for exponent
                        
And (Q) to exit this calculator """).lower()
        if operation in operationArray:
            break
        else:
            print("That is not an option!")
    if operation == "a":
        operator = int(input("Input how much you want to increment the number: "))
        print(f"The result is {mainNumber + operator}")
        mainNumber = mainNumber + operator
    elif operation == "s":
        operator = int(input("Input how much you want to decrement the number: "))
        print(f"The result is {mainNumber - operator}")
        mainNumber = mainNumber - operator
    elif operation == "m":
        operator = int(input("Input how much you want to multiply the number: "))
        print(f"The result is {mainNumber * operator}")
        mainNumber = mainNumber * operator
    elif operation == "d":
        operator = int(input("Input how much you want to divide the number: "))
        print(f"The result is {mainNumber / operator}")
        mainNumber = mainNumber / operator
    elif operation == "e":
        operator = int(input("Input how much you want to exponent the number: "))
        print(f"The result is {mainNumber ** operator}")
        mainNumber = mainNumber ** operator
    elif operation == "q":
        print("You have exit the calculator")
        break










# #addition
# def add(x, y):
#     return x + y

# #subtraction
# def subtract(x, y):
#     return x - y

# #multiplication
# def multiply(x, y):
#     return x * y

# #division
# def divide(x, y):
#     return x / y

# print("Select operation. ")
# print("1.Add")
# print("2.Subtract")
# print("3.Multiply")
# print("4.divide")

# #user choice by input
# choice = input("Enter choice (1/2/3/4): ")
# num1 = float(input("Enter the first number: "))
# num2 = float(input("Enter the second number: "))

# if choice == "1":
#     result = add(num1, num2)
#     print("result: ", result)
# elif choice == "2":
#     result = subtract(num1, num2)
#     print("Result: ", result)
# elif choice == "3":
#     result = multiply(num1, num2)
#     print("Result: ", result)
# elif choice == "4":
#     result = divide(num1, num2)
#     print("Result: ", result)
# else:
#     print("Something went wrong!")
