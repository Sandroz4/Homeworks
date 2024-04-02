my_str = "Nika keshelava is the CEO of GOA"
new_str = "" 
for char in my_str:
    if char != " ":
        new_str += char
print(new_str)