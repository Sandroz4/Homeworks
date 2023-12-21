import random

uppercase_letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
lowercase_letters = "qwertyuiopasdfghjklzxcvbnm"
digits = "0123456789"
symbols = "{}()[];:'/\\<>@#$%^&*!"

print("Select operation.")
print("1. upper")
print("2. lower")
print("3. digits")
print("4. symbols")

choice = int(input("Enter choice (1/2/3/4): "))

if choice == 1:
    upper, lower, nums, syms = True, False, False, False
elif choice == 2:
    upper, lower, nums, syms = False, True, False, False
elif choice == 3:
    upper, lower, nums, syms = False, False, True, False
elif choice == 4:
    upper, lower, nums, syms = False, False, False, True
else:
    print("Invalid choice.")
    exit()

all_chars = ""

if upper:
    all_chars += uppercase_letters
if lower:
    all_chars += lowercase_letters
if nums:
    all_chars += digits
if syms:
    all_chars += symbols

length = int(input("Length: "))
amount = int(input("Amount: "))

for _ in range(amount):
    password = "".join(random.sample(all_chars, length))
    print(password)
