def calculate_dunk_height(rim_height):
    standard_rim_height = 120  # inches
    
    try:
        rim_height = float(rim_height)
        dunk_height = standard_rim_height - rim_height
        if dunk_height > 0:
            print(f"To dunk a basketball with a rim height of {rim_height} inches, you need to be at least {dunk_height} inches tall.")
        elif dunk_height == 0:
            print("You are just tall enough to dunk the basketball.")
        else:
            print("You are already taller than the rim, so you can dunk the basketball.")
    except ValueError:
        print("Please enter a valid number for the rim height.")

