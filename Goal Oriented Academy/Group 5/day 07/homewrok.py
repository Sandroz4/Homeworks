#defining ticket_price variable
ticket_price = 0
#defining age_count variable
people_count = 0

#creating a while loop
while people_count < 13:
  age = (int(input("Enter age: ")))
  if age <= 18:
    ticket_price += 0
    people_count += 1
  else:
    ticket_price += 25
    people_count += 1

#printing ticket_price
print(ticket_price)
print(people_count)