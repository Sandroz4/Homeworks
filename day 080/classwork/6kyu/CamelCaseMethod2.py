def camel_case(s):
    camel_string = ""
    words = s.split()

    for i in words:
         camel_string += i.capitalize()

    print(camel_string)

camel_case('hello case bro')