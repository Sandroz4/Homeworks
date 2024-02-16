def kb_to_mb(kb):
    return kb / 1024

def mb_to_kb(mb):
    return mb * 1024

def gb_to_tb(gb):
    return gb / 1024

def tb_to_gb(tb):
    return tb * 1024

def main():
    while True:
        print("\nData Conversion Menu:")
        print("1. Convert KB to MB")
        print("2. Convert MB to KB")
        print("3. Convert GB to TB")
        print("4. Convert TB to GB")
        print("5. Quit")

        choice = input("\nEnter your choice (1/2/3/4/5): ")

        if choice == '1':
            kb = float(input("Enter the size in KB: "))
            print(f"{kb} KB is equal to {kb_to_mb(kb)} MB")
        elif choice == '2':
            mb = float(input("Enter the size in MB: "))
            print(f"{mb} MB is equal to {mb_to_kb(mb)} KB")
        elif choice == '3':
            gb = float(input("Enter the size in GB: "))
            print(f"{gb} GB is equal to {gb_to_tb(gb)} TB")
        elif choice == '4':
            tb = float(input("Enter the size in TB: "))
            print(f"{tb} TB is equal to {tb_to_gb(tb)} GB")
        elif choice == '5':
            print("Exiting the program...")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

if __name__ == "__main__":
    main()
