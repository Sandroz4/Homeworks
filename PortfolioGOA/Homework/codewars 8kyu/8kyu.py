#Abbreviate a Two Word Name

def abbrev_name(name):
    words = name.split(' ')
    letters = [i[0].upper() for i in words]
    
    return '.'.join(letters)


#Is n divisible by x and y?

def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0


#If you can't sleep, just count sheep!!

def count_sheep(n):
    counting_sheep = ""
    
    for i in range(1, n + 1):
        counting_sheep += str(i) + " sheep..."
        
    return counting_sheep

#Third Angle of a Triangle

def other_angle(a, b):
    return 180 - a - b

#Area or Perimeter

def area_or_perimeter(l , w):
    if l == w:
        return l ** 2
    elif l != w:
        return (l + w) * 2

#L1: Set Alarm
    
def set_alarm(employed, vacation):
    if employed and not vacation:
        return True
    else:
        return False
    
#Will you make it?

def zero_fuel(distance_to_pump, mpg, fuel_left):
    return (fuel_left * mpg) >= distance_to_pump

#Thinkful - Logic Drills: Traffic light

def update_light(current):
    
    if current == "green":
        return("yellow")
    elif current == "yellow":
        return("red")
    elif current == "red":
        return("green")
    else: 
        pass

#Rock Paper Scissors!

def rps(p1, p2):
    if (p1, p2) in [("scissors", "paper"), ("rock", "scissors"), ("paper", "rock")]:
        return "Player 1 won!"
    elif (p1, p2) in [("paper", "scissors"), ("scissors", "rock"), ("rock", "paper")]:
        return "Player 2 won!"
    else:
        return "Draw!"