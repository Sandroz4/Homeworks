sum = 0
num = int(input("Guess a number: "))


while num != 0:
    sum = sum + num
    num = int(input("Guess a number: "))
    if num == 0:
        break

print(sum)