# 13. Anagram Checker: Create a function that takes two strings as input 
# and returns True if they are anagrams (contain the same letters with the same frequency) 
# and False otherwise.



def anagram(a, b):
    #ვაშორებთ სფეისებს
    a = a.replace(" ", "").lower()
    b = b.replace(" ", "").lower()
    
    #ვადარებთ სიგრძეებს
    if len(a) != len(b):
        return False
    
    #ვასოტირებთ ორივეს, თუ ტოლია, გამოიტანს True-ს
    return sorted(a) == sorted(b)


print(anagram("dormitory", "dirty room"))
