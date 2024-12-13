# def duplicate_encode(word):
#     list = []
#     res_str = ""
#     for char in word.lower():
#         list.append(char)
#     for char in list:
#         if list.count(char) == 1:
#             res_str += "("
#         else:
#             res_str += ")"
#     return res_str


# def is_pangram(s):
#     alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
#     for i in alphabet:
#         if i not in s.upper():
#             return False
#     return True



# def name_in_str(strng,name):
#     strng = strng.lower()
#     name = name.lower()
#     i = 0
#     for j in range(len(strng)):
#         if name[i] == strng[j]:
#             i += 1
#             if i == len(name):
#                 return True
#     return False


# def first_non_repeating_letter(s):
#     s_low = s.lower()
#     for char in s:
#         if s_low.count(char.lower()) == 1:
#             return char
#     return ""