def solution(s):
    new_string = ''
    for i in s:
        if i.isupper():
            index = s.index(i)
            new_string += ' ' + i
        else:
            new_string += i
    print(new_string)


solution('camelCaseCase')