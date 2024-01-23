#1 Is this a triangle?

def is_triangle(a, b, c):
    
    return (a + b > c) and (a + c > b) and (b + c > a)

#2 Find the next perfect square!

import math

def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    sqrt_sq = math.sqrt(sq)  
    
    if sqrt_sq.is_integer():
        return (sqrt_sq + 1) ** 2
    else:
        return -1