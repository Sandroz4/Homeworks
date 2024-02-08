#addition
def add(x, y):
    return x + y

#subtraction
def subtract(x, y):
    return x - y

#multiplication
def multiply(x, y):
    return x * y

#division
def divide(x, y):
    return x / y

print("Slecet operation. ")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.divide")

#user choice by input
choice = input("Enter choice (1/2/3/4): ")
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

if choice == "1":
    result = add(num1, num2)
    print("result: ", result)
elif choice == "2":
    result = subtract(num1, num2)
    print("Result: ", result)
elif choice == "3":
    result = multiply(num1, num2)
    print("Result: ", result)
elif choice == "4":
    result = divide(num1, num2)
    print("Result: ", result)
else:
    print("Something went wrong!")
