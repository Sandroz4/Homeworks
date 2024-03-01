import math

print("Cosine and Sine law calculator")

user_input = input("Calculate using Cosine or Sine law: ").lower()

if user_input == 'cosine':
    user_input_cosine = input('Solve for side (a)/(b)/(c)/gamma: ').lower()
    if user_input_cosine == 'a':
        user_input_cosine_a_b = float(input("Enter side b: "))
        user_input_cosine_a_c = float(input("Enter side c: "))
        user_input_cosine_a_y = math.radians(float(input("Enter gamma(deg): ")))
        user_input_cosine_a_F = user_input_cosine_a_b * math.cos(user_input_cosine_a_y) + math.sqrt((user_input_cosine_a_c ** 2) - (user_input_cosine_a_b ** 2) * (math.sin(user_input_cosine_a_y) ** 2))
        print(f"The length of side a is: {user_input_cosine_a_F}")
    elif user_input_cosine == 'b':
        user_input_cosine_b_a = float(input("Enter side a: "))
        user_input_cosine_b_c = float(input("Enter side c: "))
        user_input_cosine_b_y = math.radians(float(input("Enter gamma(deg): ")))
        user_input_cosine_b_F = user_input_cosine_b_a * math.cos(user_input_cosine_b_y) + math.sqrt((user_input_cosine_b_c ** 2) - (user_input_cosine_b_a ** 2) * (math.sin(user_input_cosine_b_y) ** 2))
        print(f"The length of side b is: {user_input_cosine_b_F}")
    elif user_input_cosine == 'c':
        user_input_cosine_c_a = float(input("Enter side a: "))
        user_input_cosine_c_b = float(input("Enter side b: "))
        user_input_cosine_c_y = math.radians(float(input("Enter gamma(deg): ")))
        user_input_cosine_c_F = math.sqrt((user_input_cosine_c_a ** 2) + (user_input_cosine_c_b ** 2) - (2 * user_input_cosine_c_a * user_input_cosine_c_b * math.cos(user_input_cosine_c_y)))
        print(f"The length of side c is: {user_input_cosine_c_F}")
    elif user_input_cosine == 'gamma':
        user_input_cosine_y_a = float(input("Enter side a: "))
        user_input_cosine_y_b = float(input("Enter side b: "))
        user_input_cosine_y_c = float(input("Enter side c: "))
        user_input_cosine_y_F = math.degrees(math.acos((user_input_cosine_y_b ** 2 + user_input_cosine_y_c ** 2 - user_input_cosine_y_a ** 2) / (2 * user_input_cosine_y_b * user_input_cosine_y_c)))
        print(f"The value of angle gamma is: {user_input_cosine_y_F} degrees")

elif user_input == 'sine':
    user_input_sine = input('Solve for side (a)/(b)/(c)/alpha/beta: ').lower()
    if user_input_sine == 'a':
        user_input_sine_a_b = float(input("Enter side b: "))
        user_input_sine_a_alpha = math.radians(float(input("Enter alpha(deg): ")))
        user_input_sine_a_beta = math.radians(float(input("Enter beta(deg): ")))
        user_input_sine_a_F = user_input_sine_a_b * math.sin(user_input_sine_a_alpha) / math.sin(user_input_sine_a_beta)
        print(f"The length of side a is: {user_input_sine_a_F}")
    elif user_input_sine == 'b':
        user_input_sine_b_a = float(input("Enter side a: "))
        user_input_sine_b_alpha = math.radians(float(input("Enter alpha(deg): ")))
        user_input_sine_b_beta = math.radians(float(input("Enter beta(deg): ")))
        user_input_sine_b_F = user_input_sine_b_a * math.sin(user_input_sine_b_beta) / math.sin(user_input_sine_b_alpha)
        print(f"The length of side b is: {user_input_sine_b_F}")
    elif user_input_sine == 'c':
        user_input_sine_c_a = float(input("Enter side a: "))
        user_input_sine_c_alpha = math.radians(float(input("Enter alpha(deg): ")))
        user_input_sine_c_beta = math.radians(float(input("Enter beta(deg): ")))
        user_input_sine_c_F = user_input_sine_c_a * math.sin(math.pi - user_input_sine_c_alpha - user_input_sine_c_beta) / math.sin(user_input_sine_c_alpha)
        print(f"The length of side c is: {user_input_sine_c_F}")
    elif user_input_sine == 'alpha':
        user_input_sine_alpha_a = float(input("Enter side a: "))
        user_input_sine_alpha_b = float(input("Enter side b: "))
        user_input_sine_alpha_F = math.degrees(math.asin(user_input_sine_alpha_a * math.sin(math.radians(float(input("Enter beta(deg): ")))) / user_input_sine_alpha_b))
        print(f"The value of angle alpha is: {user_input_sine_alpha_F} degrees")
    elif user_input_sine == 'beta':
        user_input_sine_beta_a = float(input("Enter side a: "))
        user_input_sine_beta_b = float(input("Enter side b: "))
        user_input_sine_beta_F = math.degrees(math.asin(user_input_sine_beta_b * math.sin(math.radians(float(input("Enter alpha(deg): ")))) / user_input_sine_beta_a))
        print(f"The value of angle beta is: {user_input_sine_beta_F} degrees")
