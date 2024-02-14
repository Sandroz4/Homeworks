import time
import random
import pickle

class Player:
    def __init__(self):
        self.inventory = []
        self.location = "Crossroad"
        self.reputation = 0
        self.gold = 0
        self.level = 1
        self.experience = 0
        self.max_health = 100
        self.current_health = 100

    def add_to_inventory(self, item):
        self.inventory.append(item)

    def remove_from_inventory(self, item):
        if item in self.inventory:
            self.inventory.remove(item)

    def show_inventory(self):
        if self.inventory:
            print("Inventory:")
            for item in self.inventory:
                print("-", item)
        else:
            print("Your inventory is empty.")

class Enemy:
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        self.attack = attack

    def is_alive(self):
        return self.health > 0

def display(text):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(0.03)
    print()

def start_game():
    player = Player()
    display("You find yourself at a crossroad.")
    user_input = input("Go (left), Go (forward), or Go (right): ").lower()

    if user_input == 'left':
        player.location = "Mysterious House"
        go_left(player)
    elif user_input == 'forward':
        player.location = "Mysterious Cave"
        go_forward(player)
    elif user_input == 'right':
        player.location = "Library"
        go_right(player)
    else:
        display("You could have had an amazing experience!")

def go_left(player):
    display("You went left and approached a mysterious old house.")
    user_input_left = input('Enter the house? (yes)/(no): ').lower()
    if user_input_left == 'yes':
        display('The old man opened the door and invited you in.')
        left_entered = input('Do you accept? (yes)/(no): ').lower()
        if left_entered == 'yes':
            display('You accepted the invitation and entered the house.')
            explore_house(player)
        else:
            display('You declined the invitation and decided to explore further.')
            explore_surroundings(player)
    else:
        display('You decided not to enter the house and explore elsewhere.')
        explore_surroundings(player)

def go_forward(player):
    display("You went forward and approached a mysterious cave.")
    user_input_forward = input('Enter the cave? (yes)/(no): ').lower()
    if user_input_forward == 'yes':
        display('You entered the cave.')
        right_entered = input('But heard scary sounds, continue? (yes)/(no): ').lower()
        if right_entered == 'yes':
            display('You bravely continued deeper into the cave.')
        else:
            display('You decided to turn back and explore elsewhere.')
            explore_surroundings(player)
    else:
        display('You decided not to enter the cave and explore elsewhere.')
        explore_surroundings(player)

def go_right(player):
    display("You went right and approached a library.")
    user_input_right = input('Enter the library? (yes)/(no): ').lower()
    if user_input_right == 'yes':
        display('You entered the library.')
        forward_entered = input('Which section do you want to explore? ()/()/(): ').lower()
    else:
        display('You decided not to enter the library and explore elsewhere.')
        explore_surroundings(player)

def explore_house(player):
    display("You explore the mysterious old house.")
    display("You find a dusty bookshelf and a locked chest.")
    choice = input("Do you want to examine the bookshelf or try to open the chest? (bookshelf/chest): ").lower()
    
    if choice == 'bookshelf':
        display("You find an ancient book with strange symbols.")
        player.add_to_inventory("Ancient Book")
        further_choice = input("Do you want to read the book or put it back? (read/put back): ").lower()
        if further_choice == 'read':
            display("As you start reading, you feel a mysterious energy emanating from the book.")
        elif further_choice == 'put back':
            display("You decide to put the book back on the shelf.")
        else:
            display("Invalid choice. Please try again.")

    elif choice == 'chest':
        if "Key" in player.inventory:
            display("You use the key to unlock the chest and find a valuable gemstone!")
            player.add_to_inventory("Gemstone")
            additional_choice = input("Do you want to continue exploring the house or leave? (explore/leave): ").lower()
            if additional_choice == 'explore':
                display("You decide to explore further.")
            elif additional_choice == 'leave':
                display("You decide to leave the house.")
            else:
                display("Invalid choice. Please try again.")
            
        else:
            display("The chest is locked. You need a key to open it.")
    else:
        display("Invalid choice. Please try again.")
        explore_house(player)

def explore_surroundings(player):
    display("You explore your surroundings further.")
    display("You encounter a mysterious figure.")
    choice = input("Do you approach the figure or continue exploring? (approach/exploring): ").lower()
    
    if choice == 'approach':
        display("You cautiously approach the figure.")
        if 'Ancient Book' in player.inventory:
            display("The figure recognizes the ancient book and reveals a hidden passage.")
            player.add_to_inventory("Strange Artifact")
        else:
            display("The figure disappears into thin air, leaving behind a cryptic message.")
    elif choice == 'exploring':
        display("You decide to continue exploring.")
    else:
        display("Invalid choice. Please try again.")
        explore_surroundings(player)

def save_game(player):
    with open("savegame.pickle", "wb") as f:
        pickle.dump(player, f)
    display("Game saved successfully.")

def load_game():
    try:
        with open("savegame.pickle", "rb") as f:
            player = pickle.load(f)
        display("Game loaded successfully.")
        return player
    except FileNotFoundError:
        display("No saved game found.")
        return None

def main():
    player = load_game()
    if player:
        display("Welcome back!")
    else:
        player = Player()
        display("Welcome to the game!")
    start_game()
    save_game(player)

if __name__ == "__main__":
    main()
