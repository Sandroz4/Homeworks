#1 შემოგდით სია, ამ სიიდან გამოიტანეთ მხოლოდ ლუწი რიცხვები შებრუნებული განლაგებით.
#test case - [1, 48, 16, 2, 3, 97, 100, 15, 13] ---> 100-2-16-48


list = [1, 48, 16, 2, 3, 97, 100, 15, 13]
new_list = []

for i in list:
    if i %2 == 0:
        new_list.append(i)

new_list.reverse()
print(new_list)
