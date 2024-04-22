# 12. Palindrome Checker: Implement a function to check if a
# given string is a palindrome. A palindrome is a word, phrase,
# number, or other sequence of characters that reads the same forward and backward.

def palindrome_checker(a):
    res = a[::-1]
    
    if res == a:
        print('palindrome')
    else:
        print('not a palindrome')

palindrome_checker('ana')
