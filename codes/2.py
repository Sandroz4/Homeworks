#2 შემოგდით სია, რომელშიც არის სიმბოლოები, (ასოები, რიცხვები), თუ სიაში შეგხვდებათ რომელიმე ასო, მაშინ
#მის მაგივრად უნდა გამოიტანოთ 'L', თუ ციფრი/რიცხვი შეგხვდებათ, მაშინ "N", თუ ნულიანი შეგხდებათ, მაინ 'Z' 
#და ეს ყველაფერი გამოიტანეთ ერთ სტრინგად.

#test case = ["0", "მ", "m", 123, "0", "m", 1]  ---> "ZLLNZLN"

def process_list(lst):
    result = ""
    for item in lst:
        if isinstance(item, str):
            if item.isdigit():
                result += "N"
            elif item == "0":
                result += "Z"
            else:
                result += "L"
    return result