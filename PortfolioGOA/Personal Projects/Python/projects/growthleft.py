def calculate_midparental_height(father_height, mother_height, is_boy):
    if is_boy:
        midparental_height = (father_height + mother_height + 13) / 2
    else:
        midparental_height = (father_height - 13 + mother_height) / 2
    return midparental_height

def calculate_remaining_height(age, current_height, midparental_height, final_height, final_age):
    remaining_years = final_age - age
    remaining_height = final_height - current_height
    average_growth_per_year = remaining_height / remaining_years
    return average_growth_per_year

def main():
    father_height = float(input("Enter father's height in cm: "))
    mother_height = float(input("Enter mother's height in cm: "))
    is_boy = input("Is the person male (yes/no): ").lower() == "yes"
    current_age = int(input("Enter the current age: "))
    current_height = float(input("Enter the current height in cm: "))

    if is_boy:
        final_age = 18
        final_height = (father_height + mother_height + 13) / 2
    else:
        final_age = 16
        final_height = (father_height - 13 + mother_height) / 2

    midparental_height = calculate_midparental_height(father_height, mother_height, is_boy)
    average_growth_per_year = calculate_remaining_height(current_age, current_height, midparental_height, final_height, final_age)
    
    print("On average, you have {:.2f} cm left to grow each year until you reach your final height.".format(average_growth_per_year))
    print("Based on typical growth patterns, you can expect to stop growing around age {} with a final height of {:.2f} cm.".format(final_age, final_height))

if __name__ == "__main__":
    main()
