def calculate_loss_of_body_height(cobb_angle, scoliosis_type):

    if scoliosis_type == 1:
        loss_of_height = 1.55 - 0.0471 * cobb_angle + 0.009 * cobb_angle ** 2
    elif scoliosis_type == 3:
        loss_of_height = 1.0 + 0.066 * cobb_angle + 0.0084 * cobb_angle ** 2
    else:
        raise ValueError("Invalid scoliosis type. Must be 1 for single curve or 3 for double curve.")

    return loss_of_height

def main():
    print("Height Difference Due to Scoliosis Calculator")
    print("----------------------------------------------")
    cobb_angle = float(input("Enter the Cobb angle of scoliosis (in degrees): "))
    scoliosis_type = int(input("Enter the type of scoliosis (1 for single curve, 3 for double curve): "))
    original_height = float(input("Enter your original height (in centimeters): "))

    loss_of_height = calculate_loss_of_body_height(cobb_angle, scoliosis_type)

    height_without_scoliosis = original_height + loss_of_height

    print(f"Height without scoliosis: {height_without_scoliosis:.2f} centimeters")
    print(f"Height difference due to scoliosis: {loss_of_height:.2f} centimeters")


main()

