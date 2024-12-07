num = int(input("Enter number between 1 and 9: "))

for i in range(num,50):
    if i % num == 0:
        print(i + num)