from datetime import datetime

def days_until(date_str):
    try:
        input_date = datetime.strptime(date_str, '%Y-%m-%d')
        current_date = datetime.now()
        delta = input_date - current_date
        return delta.days
    except ValueError:
        return "Please enter a date in the format YYYY-MM-DD"

# Get user input for the date
user_input_date = input("Enter a date (YYYY-MM-DD): ")
days_left = days_until(user_input_date)
if isinstance(days_left, int):
    if days_left > 0:
        print(f"There are {days_left} days left until {user_input_date}.")
    elif days_left == 0:
        print(f"Today is {user_input_date}!")
    else:
        print(f"{user_input_date} was {abs(days_left)} days ago.")
else:
    print(days_left)  