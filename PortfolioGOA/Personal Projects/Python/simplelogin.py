print("Facebook:")
user_input_u = input("Set your username: ")
user_input_p = input("Set your password: ")

print("Login:")
user_input_u_a = input("Enter your username: ")
user_input_p_a = input("Enter your password: ")

if user_input_u_a == user_input_u and user_input_p_a == user_input_p:
    print("Access granted!")
else:
    print("Invalid credentials")
    choice = input("Do you want to try again or reset your password? (try/reset/exit): ")
    if choice.lower() == "try":
        print("Facebook:")
        user_input_u_a = input("Enter your username: ")
        user_input_p_a = input("Enter your password: ")
        if user_input_u_a == user_input_u and user_input_p_a == user_input_p:
            print("Access granted!")
        else:
            print("Invalid credentials. Exiting...")
    elif choice.lower() == "reset":
        new_password = input("Enter your new password: ")
        user_input_p = new_password
        print("Password reset successfully. Please log in again.")
        print("Facebook:")
        user_input_u_a = input("Enter your username: ")
        user_input_p_a = input("Enter your password: ")
        if user_input_u_a == user_input_u and user_input_p_a == user_input_p:
            print("Access granted!")
        else:
            print("Invalid credentials. Exiting...")
    else:
        print("Exiting...")
