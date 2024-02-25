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




