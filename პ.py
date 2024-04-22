from turtle import *


#we want to paint a house

speed(5)
width(7)
begin_fill()
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square





forward(75)

#drawing door
begin_fill()
color("green")
left(90)
forward(120)  #height of the door
right(90)
forward(50)
right(90)
forward(120)
end_fill()
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


left(60)
#draw windows
begin_fill()
color("purple")
penup()
goto( 25 , 160 )
left(60)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()

begin_fill()
penup()
goto(150 ,160)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()




exitonclick()