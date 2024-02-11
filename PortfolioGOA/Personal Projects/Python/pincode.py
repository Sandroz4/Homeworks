def validate_pin(pin):
    # Simulated PIN validation (Replace with your actual PIN validation logic)
    return pin == "1234"

def main():
    print("Welcome to the PIN verification system.")

    # Get PIN from the user
    pin_attempts = 3
    while pin_attempts > 0:
        pin = input("Please enter your PIN: ")
        confirm_pin = input("Please confirm your PIN: ")

        if pin == confirm_pin:
            if validate_pin(pin):
                print("PIN accepted. Access granted!")
                break
            else:
                print("Incorrect PIN. Please try again.")
                pin_attempts -= 1
                if pin_attempts > 0:
                    print(f"You have {pin_attempts} attempts remaining.")
        else:
            print("PINs do not match. Please try again.")

    if pin_attempts == 0:
        print("Too many incorrect attempts. Access denied.")

if __name__ == "__main__":
    main()
