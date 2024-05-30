# 11. Factorial Function: Write a function to compute 
# the factorial of a non-negative integer. The factorial
# of a number n is the product of all positive integers 
# less than or equal to n.

def factorial(a):
    result = 1

    if a < 0:
        print('provide a positive integer!')
    elif a > 0:
        for i in range(1, a + 1):
            result *= i

    print(result)


factorial(64)