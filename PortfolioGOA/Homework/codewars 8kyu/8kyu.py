#1 Abbreviate a Two Word Name

def abbrev_name(name):
    words = name.split(' ')
    letters = [i[0].upper() for i in words]
    
    return '.'.join(letters)


#2 Is n divisible by x and y?

def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0


#3 If you can't sleep, just count sheep!!

def count_sheep(n):
    counting_sheep = ""
    
    for i in range(1, n + 1):
        counting_sheep += str(i) + " sheep..."
        
    return counting_sheep

#4 Third Angle of a Triangle

def other_angle(a, b):
    return 180 - a - b

#5 Area or Perimeter

def area_or_perimeter(l , w):
    if l == w:
        return l ** 2
    elif l != w:
        return (l + w) * 2

#6 Set Alarm
    
def set_alarm(employed, vacation):
    if employed and not vacation:
        return True
    else:
        return False
    
#7 Will you make it?

def zero_fuel(distance_to_pump, mpg, fuel_left):
    return (fuel_left * mpg) >= distance_to_pump

#8 Thinkful - Logic Drills: Traffic light

def update_light(current):
    
    if current == "green":
        return("yellow")
    elif current == "yellow":
        return("red")
    elif current == "red":
        return("green")
    else: 
        pass

#9 Rock Paper Scissors!

def rps(p1, p2):
    if (p1, p2) in [("scissors", "paper"), ("rock", "scissors"), ("paper", "rock")]:
        return "Player 1 won!"
    elif (p1, p2) in [("paper", "scissors"), ("scissors", "rock"), ("rock", "paper")]:
        return "Player 2 won!"
    else:
        return "Draw!"

#10 Switch it Up!
    
def switch_it_up(number):

    if number == 0:
        return "Zero"
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"
    else:
        return False

#11 Sentence Smash
    
def smash(words):
    return " ".join(words)
    
#12 Fake Binary

def fake_bin(x):
    result = ""
    
    for i in x:
        if int(i) < 5:
            result += "0"
        elif int(i) >= 5:
            result += "1"
    
    return result

#13 You only need one - Beginner

def check(seq, elem):
    return elem in seq 

#14 Quarter of the year

def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    elif 10 <= month <= 12:
        return 4
    
#15 Jenny's secret message
    
def greet(name):
    if name == "Johnny":
        return("Hello, my love!")
    else:
        return "Hello, {name}!".format(name=name)

#16 Volume of a Cuboid
    
def get_volume_of_cuboid(length, width, height):
    return(length * width * height)

#17 Grasshopper - Personalized Message

def greet(name, owner):
    if name == owner:
        return('Hello boss')
    else:
        return('Hello guest')

#18 Transportation on vacation
    
def rental_car_cost(d):
    if 7 > d  >= 3:
        return((d * 40) - 20)
    elif d >= 7:
        return((d * 40) - 50)
    else:
        return(d * 40)
    
#19 Grasshopper - Grade book

def get_grade(s1, s2, s3):

    score = (s1 + s2 + s3) // 3

    if 90 <= score <= 100:
        return("A")
    elif 80 <= score < 90:
        return("B")
    elif 70 <= score < 80:
        return("C")
    elif 60 <= score < 70:
        return("D")
    elif 0 <= score < 60:
        return("F")

#19 Grasshopper - Messi goals function
    
def goals(laLiga, copaDelRey, championsLeague):
    return(laLiga + copaDelRey + championsLeague)


#20 The Feast of Many Beasts

def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]

#21 Do I get a bonus?

def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary * 10)
    else:
        return "$" + str(salary)

#22 Beginner Series #4 Cockroach
    
def cockroach_speed(s):
    
    cm = s * 27.77778
    
    return(int(cm))

#23 Twice as old

import math

def twice_as_old(dad_years_old, son_years_old):
    
    age_gap = dad_years_old - son_years_old * 2
    
    return abs(age_gap )

#24 Is it even?

def is_even(n): 
    return n %2 == 0

#25 Function 2 - squaring an argument

def square(n):
    return n ** 2

#26 Will there be enough space?

def enough(cap, on, wait):
    if (cap - on) >= wait:
        return 0
    else:
        return(wait - (cap - on))
    
#27 Keep up the hoop
    
def hoop_count(n):
    if n >= 10:
        return("Great, now move on to tricks")
    else:
        return("Keep at it until you get it")

#28 Grasshopper - Messi Goals
    
la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals

print(total_goals)


#29 Reversed sequence

def reverse_seq(n):
    result = []
    
    for i in range(n, 0, -1):
        result.append(i)
    return result

print(reverse_seq(5))

#30 Count by X

def count_by(number, number_of_times):

    result = []

    for i in range(1, number_of_times + 1):
        result.append(i * number)
    return result

#31 return without a !

def remove_exclamation_marks(s):
    x = s.replace("!", "")
    return x

