import math

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
C(Circle)
T(Triangle): 
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
    elif user_input2 == "t":
        user_input_triangle = input("""what type of triangle is it?:
E(equilateral)
S(scalene)
R(right): """).lower()

        if user_input_triangle == "e":
            user_input_equilateral = input("""Calculate with:
S(Side)
A(Area):""").lower()
            if user_input_equilateral == "s":
                user_input_equilateral_side = int(input("Side length: "))
                user_input_equilateral_side *= 3
                print(f"Perimeter of the Equilateral triangle is: {user_input_equilateral_side}")
            elif user_input_equilateral == "a":
                user_input_equilateral_area = int(input("Area of the triangle: "))
                user_input_equilateral_area = (user_input_equilateral_area ** 2) // 2
                print(f"Perimeter of the Equilateral triangle is: {user_input_equilateral_area}")
        elif user_input_triangle == "s":
            user_input_scalene_1 = int(input("Side 1: "))
            user_input_scalene_2 = int(input("Side 2: "))
            user_input_scalene_3 = int(input("Side 3: "))
            user_input_scalene = user_input_scalene_1 + user_input_scalene_2 + user_input_scalene_3
            print(f"Perimeter of the Scalene triangle is {user_input_scalene}")
        elif user_input_triangle == "r":
                    user_input_triangle_right = input("""H(hypothenuse/leg) 
or 
L(leg/leg)""").lower()
                    if user_input_triangle_right == "h":
                         user_input_triangle_hypothenuse = int(input("Enter hypothenuse lenght: "))
                         user_input_triangle_leg = int(input("Enter leg length: "))
                         user_input_triangle_hyp_leg = (user_input_triangle_hypothenuse ** 2) - (user_input_triangle_leg ** 2)
                         user_input_triangle_hyp_leg_per = math.sqrt(user_input_triangle_hyp_leg) + user_input_triangle_leg + user_input_triangle_hypothenuse
                         print(f"Perimeter of the Right triangle is: {user_input_triangle_hyp_leg_per}")






#triangle


#areas



#volumes (only on 3d)


#trigonometry


