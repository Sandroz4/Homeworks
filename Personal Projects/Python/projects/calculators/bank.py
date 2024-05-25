#available balance
balance = 0 
#dictionary of registered users
registered_users = {}  

while True:
    #asking for user input
    account = input("""Sign in (SI) 
or
Sign up (SP): """).lower()
    #if user chooses to sign up
    if account == "si":
        account_sign_in_username = input('Enter your username: ')
        if account_sign_in_username in registered_users:
            account_sign_in_password = input('Enter your password: ')
            if registered_users[account_sign_in_username] == account_sign_in_password:
                user_input = input(f"""Available balance: {balance},
W for Withdraw, 
D for Deposit, 
X for Exit: """).lower()
                #if the user wants to withdraw
                if user_input == "w":
                    user_input_w = int(input('Enter the amount to withdraw: '))
                    if user_input_w > balance:
                        print('Insufficient funds!')
                    else:
                        balance -= user_input_w
                        print(f'Available balance: {balance}')
                #if the user wants to deposit
                elif user_input == "d":
                    user_input_d = int(input('Enter the amount to deposit: '))
                    balance += user_input_d
                    print(f'Available balance: {balance}')
                #if the user want to exit
                elif user_input == "x":
                    print('Exiting...')
                    break
                else:
                    print('Invalid input!')
                #asking the user if they want another transaction
                continue_input = input("Do you want to perform another transaction? (Yes/No): ").lower()
                if continue_input != "yes":
                    print("Exiting...")
                    break
            else:
                print('Incorrect password! Please try again.')
        else:
            print('User not registered! Please sign up first.')
    #if user chooses to sign in
    elif account == "sp":
        account_sign_up_username = input('Enter your username: ')
        account_sign_up_password = input('Enter your password (min 8 characters long): ')
        if len(account_sign_up_password) >= 8:
            print('Account created successfully!')
            registered_users[account_sign_up_username] = account_sign_up_password  
        else:
            print('Password should be at least 8 characters long!')
    #avoiding invalid input cases
    else:
        print('Invalid input! Please enter "SI" for sign in or "SP" for sign up.')
