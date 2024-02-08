import math

#v1
user_input = input("P for perimeter: ").lower()
counter = 0
checker = False

while True:
    if user_input == "p":
        break
    else:
        counter += 1
        if counter > 5:
            print("Never touch python again 🙏")
            checker = True
            break
        else:
            user_input = input("P for perimeter: ").lower()
            


if checker == False:
    user_input2 = input("""
S(Square)
R(Rectangle)
C(Circle): 
""").lower()
    if user_input2 == "s":
        side_square = int(input("Side length: ")) * 4
        print(f"Perimeter of the square is {side_square}")
    elif user_input2 == "r":
        side_rectangle1 = int(input("Height: ")) * 2
        side_rectangle2 = int(input("Width: ")) * 2
        p_rectangle = side_rectangle1 + side_rectangle2
        print(f"Perimeter of the rectangle is {p_rectangle}")
    elif user_input2 == "c":
        r_circle = int(input("Radius of the circle: "))
        circumference_circle = 2 * r_circle * math.pi
        print(f"Circumference of the circle is {round(circumference_circle)}")








#triangle


#areas



#volumes (only on 3d)


#trigonometry


