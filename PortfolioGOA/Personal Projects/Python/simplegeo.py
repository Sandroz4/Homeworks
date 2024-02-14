import math

def calculate_rectangle_area(length, width):
    return length * width

def calculate_circle_area(radius):
    return math.pi * radius ** 2

def calculate_triangle_area(base, height):
    return 0.5 * base * height

def main():
    print("Welcome to the Area Calculator!")
    print("Which shape's area would you like to calculate?")
    print("1. Rectangle")
    print("2. Circle")
    print("3. Triangle")
    
    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == '1':
        length = float(input("Enter the length of the rectangle: "))
        width = float(input("Enter the width of the rectangle: "))
        area = calculate_rectangle_area(length, width)
        print("The area of the rectangle is: {:.2f}".format(area))
    elif choice == '2':
        radius = float(input("Enter the radius of the circle: "))
        area = calculate_circle_area(radius)
        print("The area of the circle is: {:.2f}".format(area))
    elif choice == '3':
        base = float(input("Enter the base length of the triangle: "))
        height = float(input("Enter the height of the triangle: "))
        area = calculate_triangle_area(base, height)
        print("The area of the triangle is: {:.2f}".format(area))
    else:
        print("Invalid choice. Please enter 1, 2, or 3.")

main()
