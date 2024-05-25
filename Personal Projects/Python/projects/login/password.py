#database to store usernames and passswords
users = {}

#sign-up process
def signUp():
    while True:
        new_username = input('enter a new username: ')
        if new_username in users:
            print('username already exists, choose another one.')
        else:
            new_password = input('enter a password: ')
            users[new_username] = new_password
        print('account created successfully')
        break
signUp()
#log-in process
max_attempts = 3
attempts = 0

checker = False

def signIn():
    while attempts < max_attempts:
        username = input('enter your username: ')
        password = input('enter your password: ')

        if username in users and users[username] == password:
            print('login successful')
            checker = True
            break
        elif username in users:
            reset_option = input("""forgot your password?
type 'reset' to change your password,
'try' to try again,
or 'exit' to quit: """).lower()
            if reset_option == 'reset':
                new_password  = input('enter your new password: ')
                users[username] = new_password
                print('password reset successful! you can now log in with a new password!')
            elif reset_option == 'try':
                continue
            elif reset_option == 'exit':
                print('exiting password reset process')
                break
            else:
                print('invalid option, try again')        
        else:
            attempts += 1
            remaining_attempts = max_attempts - attempts
            if remaining_attempts == 1:
                print(f"invalid username or password , {remaining_attempts} attempt remaining.")
            else:
                print(f"invalid username or password , {remaining_attempts} attempts remaining.")

        if attempts == max_attempts:
            print('max login attempts reached, please try again later')
            checker = False
            break

signIn()

if checker == True:
    while True:
        logout_option = input("(L) to logout: ").lower()
        if logout_option == "l":
            signUp()
            signIn()
        else:
            print("That is not an option")
#sign up
#log in
#reset password
