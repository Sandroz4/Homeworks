bank = 0

while True:
    user_input = input(f"""Available money: {bank},
W for withdraw
D for deposit
X to exit:
""").lower()

    if user_input == "w":
        user_input_w = int(input("Enter the amount of money to withdraw: "))
        if user_input_w > bank:
            print("Insufficient funds.")
        else:
            bank -= user_input_w
            print(f"Remaining balance: {bank}")
    elif user_input == "d":
        user_input_d = int(input("Enter the amount of money to deposit: "))
        bank += user_input_d
        print(f"Updated balance: {bank}")
    elif user_input == "x":
        print("Exiting...")
        break
    else:
        print("Invalid option.")
    
    continue_input = input("Do you want to perform another transaction? (Yes/No): ").lower()
    if continue_input != "yes":
        print("Exiting...")
        break
