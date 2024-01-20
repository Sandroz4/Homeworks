#Abbreviate a Two Word Name

def abbrev_name(name):
    words = name.split(' ')
    letters = [i[0].upper() for i in words]
    
    return '.'.join(letters)

