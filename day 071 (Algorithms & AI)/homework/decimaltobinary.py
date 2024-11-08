decimal_number = 10

binary_number = ""
while decimal_number > 0:
    binary_number = str(decimal_number % 2) + binary_number
    decimal_number //= 2

print(f"binary: {binary_number}")
