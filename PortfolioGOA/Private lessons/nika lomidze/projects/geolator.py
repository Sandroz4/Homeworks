import math

# Get user input for what they want to calculate
user_input = input("""P for Perimeter,
A for Area,
V for Volume: """).lower()

# Initialize counter and checker variables
counter = 0
checker = False

# Loop until valid input is provided or the counter reaches a limit
while True:
    if user_input in ["p", "a", "v"]:
        break
    else:
        counter += 1
        if counter > 5:
            print("Never touch python again 🙏")
            checker = True
            break
        else:
            user_input = input("""P for Perimeter,
A for Area,
V for Volume: """).lower()

# If the counter didn't reach its limit and the input was valid, proceed
if not checker:
    # Calculating if the user chooses the perimeter
    if user_input == "p":
        shape = input("""
S(Square)
R(Rectangle)
C(Circle)
T(Triangle): 
""").lower()
        if shape == "s":
            side_square = int(input("Side length: ")) * 4
            print(f"Perimeter of the Square is {side_square}")
        elif shape == "r":
            side_rectangle1 = int(input("Height: ")) * 2
            side_rectangle2 = int(input("Width: ")) * 2
            p_rectangle = side_rectangle1 + side_rectangle2
            print(f"Perimeter of the Rectangle is {p_rectangle}")
        elif shape == "c":
            r_circle = int(input("Radius of the circle: "))
            circumference_circle = 2 * r_circle * math.pi
            print(f"Circumference of the Circle is {round(circumference_circle)}")
        elif shape == "t":
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
                user_input_triangle_right = input("""H(hypotenuse/leg) 
or 
L(leg/leg)""").lower()
                if user_input_triangle_right == "h":
                    user_input_triangle_hypothenuse = int(input("Enter hypotenuse length: "))
                    user_input_triangle_leg = int(input("Enter leg length: "))
                    user_input_triangle_hyp_leg = (user_input_triangle_hypothenuse ** 2) - (user_input_triangle_leg ** 2)
                    user_input_triangle_hyp_leg_per = math.sqrt(user_input_triangle_hyp_leg) + user_input_triangle_leg + user_input_triangle_hypothenuse
                    print(f"Perimeter of the Right triangle is: {user_input_triangle_hyp_leg_per}")
                elif user_input_triangle_right == "l":
                    user_input_triangle_leg1 = int(input("Enter leg1: "))
                    user_input_triangle_leg2 = int(input("Enter leg2: "))
                    user_input_triangle_hypothenuse = math.sqrt((user_input_triangle_leg1 ** 2) + (user_input_triangle_leg2 ** 2))
                    user_input_triangle_right2 = user_input_triangle_hypothenuse + user_input_triangle_leg2 + user_input_triangle_leg1 
                    print(f"Perimeter of the Triangle is: {user_input_triangle_right2}")
    
    # Calculating if the user chooses the area
    elif user_input == "a":
        shape2 = input("""
S(Square)
R(Rectangle)
C(Circle):
""").lower()
        if shape2 == "s":
            side_square = int(input("Side length: ")) ** 2
            print(f"Area of the Square is {side_square}")
        elif shape2 == "r":
            side_rectangle1 = int(input("Height: "))
            side_rectangle2 = int(input("Width: "))
            p_rectangle = side_rectangle1 * side_rectangle2
            print(f"Area of the Rectangle is {p_rectangle}")
        elif shape2 == "c":
            r_circle = int(input("Radius of the circle: "))
            area_circle = r_circle ** 2 * math.pi
            print(f"Area of the Circle is {round(area_circle)}")
    
    # Calculating if the user chooses the volume
    elif user_input == "v":
        shape2 = input("""
C(Cube)
CY(Cylinder)
P(Prism)
S(Sphere)
PY(Pyramid):
""").lower()
        if shape2 == "c":
            cube_length = int(input("Length: "))
            cube_width = int(input("Width: "))
            cube_height = int(input("Height: "))
            cube_volume = cube_length * cube_width * cube_height
            print(f"Volume of the Cube is {cube_volume}")
        elif shape2 == "cy":
            cylinder_radius = int(input("Radius: "))
            cylinder_height = int(input("Height: "))
            cylinder_volume = math.pi * (cylinder_radius ** 2) * cylinder_height
            print(f"Volume of the Cylinder is {round(cylinder_volume, 2)}")
        elif shape2 == "p":
            prism_base_radius = int(input("Radius of the circular base: "))
            prism_height = int(input("Height: "))
            prism_volume = math.pi * (prism_base_radius ** 2) * prism_height
            print(f"Volume of the Prism is {round(prism_volume, 2)}")
        elif shape2 == "s":
            sphere_radius = int(input("Radius of the sphere: "))
            sphere_volume = (4/3) * math.pi * (sphere_radius ** 3)
            print(f"Volume of the Sphere is {round(sphere_volume, 2)}")
        elif shape2 == "py":
            pyramid_base_area = int(input("Area of the base: "))
            pyramid_height = int(input("Height: "))
            pyramid_volume = (1/3) * pyramid_base_area * pyramid_height
            print(f"Volume of the Pyramid is {pyramid_volume}")
        else:
            print("Wrong input")
