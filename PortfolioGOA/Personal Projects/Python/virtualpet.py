import time

class VirtualPet:
    def __init__(self, name):
        self.name = name
        self.hunger = 50
        self.happiness = 50
        self.health = 100
        self.age = 0

    def feed(self):
        self.hunger -= 10
        self.happiness += 5
        print(f"{self.name} is eating.")
        time.sleep(2)
        print(f"{self.name} feels full and happy!")

    def play(self):
        self.happiness += 10
        self.hunger += 5
        print(f"{self.name} is playing.")
        time.sleep(2)
        print(f"{self.name} had a great time playing!")

    def heal(self):
        self.health = 100
        print(f"{self.name} has been healed and feels much better.")

    def age_one_year(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old.")

    def check_status(self):
        print(f"Name: {self.name}")
        print(f"Hunger: {self.hunger}")
        print(f"Happiness: {self.happiness}")
        print(f"Health: {self.health}")
        print(f"Age: {self.age}")

def main():
    pet_name = input("Enter your virtual pet's name: ")
    pet = VirtualPet(pet_name)
    
    while True:
        print("\nWhat would you like to do with your virtual pet?")
        print("1. Feed")
        print("2. Play")
        print("3. Heal")
        print("4. Check Status")
        print("5. Age One Year")
        print("6. Quit")

        choice = input("Enter your choice: ")

        if choice == '1':
            pet.feed()
        elif choice == '2':
            pet.play()
        elif choice == '3':
            pet.heal()
        elif choice == '4':
            pet.check_status()
        elif choice == '5':
            pet.age_one_year()
        elif choice == '6':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
