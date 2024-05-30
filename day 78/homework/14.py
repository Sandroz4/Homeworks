# 14. Sentence Reversal: Create a function that
# takes a sentence (string) as input and returns
# a new string where the order of words is reversed.


def reversed_sentence(sentence):
    return ' '.join(sentence.split()[::-1])

print(reversed_sentence('hello i am sandro'))
