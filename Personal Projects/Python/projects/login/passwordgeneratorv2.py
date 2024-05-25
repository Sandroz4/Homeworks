import random

uppercase_letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
lowercase_letters = "qwertyuiopasdfghjklzxcvbnm"
digits = "0123456789"
symbols = "{}()[];:'/\<>@#$%^&*!"

print("Select operation.")
upp = input("use upper yes/no ")
low = input("use lower yes/no ")
dig = input("use digits yes/no ")
sym = input("use symb yes/no ")

upper = upp.lower() == "yes"
lower = low.lower() == "yes"
nums = dig.lower() == "yes"
syms = sym.lower() == "yes"

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
