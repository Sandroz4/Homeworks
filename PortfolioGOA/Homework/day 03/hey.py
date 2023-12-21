import turtle
import random
speed = (250)

# Create a turtle screen
screen = turtle.Screen()
screen.bgcolor("black")

# Create a turtle for drawing
spiral = turtle.Turtle()
spiral.shape("turtle")
spiral.speed(0)
spiral.pensize(2)

# Set the number of spirals
num_spirals = 36
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

for _ in range(num_spirals):
    # Choose a random color
    color = random.choice(colors)
    spiral.color(color)

    # Draw a spiral
    for _ in range(100):
        spiral.forward(10)
        spiral.right(30)
    
    # Move to a new starting position
    spiral.penup()
    spiral.setposition(0, 0)
    spiral.pendown()
    spiral.right(360 / num_spirals)

# Hide the turtle
spiral.hideturtle()

# Close the turtle graphics window on click
screen.exitonclick()
