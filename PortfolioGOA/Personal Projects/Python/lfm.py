# v6 (A new mode which only filters every second letter(For example, "water" will be turned into "wtr",
# user can now customize it(For example, when the user inputs "3", then every third letter gets filtered))
counter = 1
print("""if you dont understand the mode B,heres the example:
      input: 3
      word: waterfall
      output: waeral

      """)

vowels = "aeiouAEIOU"
result = []

while True:
    user_choice = input("""V to filter vowels,
C to filter consonants,
X to filter letters in the word,
Z to not filter letters in the word,
B to filter xth letter from the word: """).lower()
    
    if user_choice == "v" or user_choice == "c" or user_choice == 'x' or user_choice == "z" or user_choice == "b":
        break
    else:
        print("invalid input, please enter V or C or X or Z or B!")

if user_choice == "x":
    letter_input = input("Enter letters you want to filter: ")
    new_letter = letter_input.upper() +  letter_input.lower() + letter_input
    user_input = input("Enter a word: ")
elif user_choice == "z":
    letter_input = input("Enter letters you do not want to filter: ")
    new_letter = letter_input.upper() +  letter_input.lower() + letter_input
    user_input = input("Enter a word: ")
elif user_choice == "b":
    b_input = int(input("Enter a number: "))
    user_input = input("Enter a word: ")
else:
    user_input = input("Enter a word: ")

if user_choice == "v":
    for letter in user_input:
        if letter not in vowels:
            result.append(letter)
elif user_choice == "c":
    for letter in user_input:
        if letter in vowels:
            result.append(letter)
elif user_choice == "x":
    for letter in user_input:
        if letter not in new_letter:
            result.append(letter)
elif user_choice == "z":
    for letter in user_input:
        if letter in new_letter:
            result.append(letter)
elif user_choice == "b":
    for letter in user_input:
          if counter % b_input != 0:
            result.append(letter)
          counter = counter + 1
print(result)


# #v5 (user can choose whether to filter vowels or consonants or any letter they want or any letters they dont want)
# vowels = "aeiouAEIOU"
# result = []

# while True:
#     user_choice = input("""V to filter vowels,
# C to filter consonants,
# X to filter letters in the word,
# Z to not filter letters in the word: """).lower()
    
#     if user_choice == "v" or user_choice == "c" or user_choice == 'x' or user_choice == "z":
#         break
#     else:
#         print("invalid input, please enter V or C or X or Z!")

# if user_choice == "x":
#     letter_input = input("Enter letters you want to filter: ")
#     new_letter = letter_input.upper() +  letter_input.lower() + letter_input
#     user_input = input("Enter a word: ")
# elif user_choice == "z":
#     letter_input = input("Enter letters you do not want to filter: ")
#     new_letter = letter_input.upper() +  letter_input.lower() + letter_input
#     user_input = input("Enter a word: ")
# else:
#     user_input = input("Enter a word: ")

# if user_choice == "v":
#     for letter in user_input:
#         if letter not in vowels:
#             result.append(letter)
# elif user_choice == "c":
#     for letter in user_input:
#         if letter in vowels:
#             result.append(letter)
# elif user_choice == "x":
#     for letter in user_input:
#         if letter not in new_letter:
#             result.append(letter)
# elif user_choice == "z":
#     for letter in user_input:
#         if letter in new_letter:
#             result.append(letter)
# print(result)


# #v4 (user can choose whether to filter vowels or consonants or any letter they want)
# vowels = "aeiouAEIOU"
# result = []

# while True:
#     user_choice = input("""V to filter vowels,
# C to filter consonants,
# X to filter any letter in the word: """).lower()
    
#     if user_choice == "v" or user_choice == "c" or user_choice == 'x':
#         break
#     else:
#         print("invalid input, please enter V or C or X!")

# if user_choice == "x":
#     letter_input = input("Enter letters you want to filter: ")
#     new_letter = letter_input.upper() +  letter_input.lower() + letter_input
#     user_input = input("Enter a word: ")
# else:
#     user_input = input("Enter a word: ")

# if user_choice == "v":
#     for letter in user_input:
#         if letter not in vowels:
#             result.append(letter)
# elif user_choice == "c":
#     for letter in user_input:
#         if letter in vowels:
#             result.append(letter)
# elif user_choice == "x":
#     for letter in user_input:
#         if letter not in new_letter:
#             result.append(letter)
# print(result)



# #v3 (user can choose whether to filter vowels or consonants, if they dont, they are prompted again)
# vowels = "aeiouAEIOU"
# result = []

# while True:
#     user_choice = input("""V to filter vowels,
# C to filter consonants: """).lower()
#     if user_choice == "v" or user_choice == "c":
#         break
#     else:
#         print("invalid input, please enter V or C!")

# user_input = input("Enter a word: ")

# if user_choice == "v":
#     for letter in user_input:
#         if letter not in vowels:
#             result.append(letter)
# elif user_choice == "c":
#     for letter in user_input:
#         if letter in vowels:
#             result.append(letter)

# print(result)



# #v2 (user can choose whether to filter vowels or consonants)
# user_choice = input("""V to filter vowels,
# C to filter consonants: """).lower()
# user_input = input("Enter a word: ")
# result = []
# vowels = "aeiouAEIOU"

# if user_choice == "v":
#     for letter in user_input:
#         if letter not in vowels:
#             result.append(letter)
# elif user_choice == "c":
#     for letter in user_input:
#         if letter in vowels:
#             result.append(letter)
# print(result)
        


# #v1 (only filters vowels)
# word = input('enter a word> ')

# vowels = "aeiouAEIOU"
# result = []

# for letter in word:
#     if letter not in vowels:
#         result.append(letter)
# print(result)





