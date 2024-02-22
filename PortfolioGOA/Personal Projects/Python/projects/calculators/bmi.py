def calculate_bmi(weight, height):
    bmi = weight / ((height / 100) ** 2)
    return bmi

def interpret_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 25:
        return "Normal weight"
    elif 25 <= bmi < 30:
        return "Overweight"
    else:
        return "Obesity"

def main():
    weight = float(input("Enter your weight in kilograms: "))
    height = float(input("Enter your height in centimeters: "))
    
    bmi = calculate_bmi(weight, height)
    interpretation = interpret_bmi(bmi)
    
    print("Your BMI is: {:.2f}".format(bmi))
    print("Interpretation:", interpretation)

if __name__ == "__main__":
    main()
