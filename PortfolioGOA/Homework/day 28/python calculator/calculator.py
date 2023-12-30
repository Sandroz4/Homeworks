#მიმატება
def add(x, y):
    return x + y

#გამოკლება
def subtract(x, y):
    return x - y

#გამრავლება
def multiply(x, y):
    return x * y

#გაყოფა
def divide(x, y):
    return x / y

#დავპრინტოთ არჩევანი
print("Select operation. ")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.divide")

#მივცეთ უფლება მომხმარებელს, რომ შეიყვანოს არჩევანი
choice = input("Enter choice (1/2/3/4): ")
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

#თუ არჩევანია 1:
if choice == "1":
    result = add(num1, num2)
    print("result: ", result)
#თუ არჩევანია 2:
elif choice == "2":
    result = subtract(num1, num2)
    print("Result: ", result)
#თუ არჩევანია 3:
elif choice == "3":
    result = multiply(num1, num2)
    print("Result: ", result)
#თუ არჩევანია 4:
elif choice == "4":
    result = divide(num1, num2)
    print("Result: ", result)
#სხვა შემთხვევაში:
else:
    print("Something went wrong!")