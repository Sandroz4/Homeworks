#8 kyu A Needle in the Haystack

#შევქმნატ ფუნქცია 
def find_needle(haystack):
    #თუ მოცემული სტრინგი არის ცხრილში
    if "needle" in haystack:
        #ვპოულობთ ამ ტრინგის ინდექსს
        index = haystack.index("needle")
        #ვაბრუნებთ ფუნქციას
        return f"found the needle at position {index}"


#8 kyu MakeUpperCase

#შევქმნათ ფუნქცია
def make_upper_case(s):
    #გადავაქციოთ სტრინგი დიდ ასოდ
    return s.upper()


#8 kyu Sum Arrays

#შექმნათ ფუნქცია
def sum_array(a):
    #თუ (a) ცარიელია
    if not a:
        #დააბრუნე 0
        return 0
    else:
        #დააბრუნე ჯამი
        return sum(a)

#8 kyu Are You Playing Banjo?

#შევქმნათ ფუნქცია
def are_you_playing_banjo(name):
    #თუ სტრინგის პირველი ასო უდრის r-ს ან R-ს
    if name[0] in "rR":
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
    
#8 kyu Invert values

#შევქმნათ ფუნქცია
def invert(lst):
    #შევქმნათ ცარიელი სია
    inverted_list = []
    for num in lst:
        if num > 0:
            inverted_list.append(num * -1)
        elif num < 0:
            inverted_list.append(num * -1)
        else:
            inverted_list.append(0)
    return inverted_list

#8 kyu Calculate average

#შევქმნათ ფუნქცია
def find_average(numbers):
    #თუ ფუნქციაში არაფერია
    if not numbers:
        return 0
    #სხვა შემთხვევაში გამოვთვალოთ საშუალო არიტმეტიკული
    else:
        return sum(numbers) / len(numbers)
    
    

        
    