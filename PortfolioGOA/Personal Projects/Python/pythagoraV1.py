import math

user_input = input("""choose sides: a/b
              a/c
              b/c > """)


if user_input.lower() == "ab" or user_input == "a/b":
    input_a = int(input("Enter the length of side a> "))
    input_b = int(input("Enter the length of side b> "))
    side_c = input_a**2 + input_b**2
    result_1 = math.sqrt(side_c)

    print("side (b) is " + str(result_1))


elif user_input.lower() == "ac" or user_input == "a/c":
    input_a2 = int(input("Enter the length of side a> "))
    input_c = int(input("Enter the length of side c> "))
    side_b = input_c**2 - input_a2**2
    result_2 = math.sqrt(side_b)

    print("side (b) is " + str(result_2))
    
elif user_input == "bc" or user_input == "b/c":
    input_b2 = int(input("Enter the length of side b> "))
    input_c2 = int(input("Enter the length of side c> "))
    side_a = input_c2**2 - input_b2**2
    result_3 = math.sqrt(side_a)

    print("side (a) is " + str(result_3))

else:
    print("Invalid input. Please choose a valid option.")