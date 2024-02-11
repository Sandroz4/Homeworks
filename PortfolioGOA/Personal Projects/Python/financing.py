class PersonalFinanceTracker:
    def __init__(self):
        self.income = 0
        self.expenses = 0
        self.savings = 0
    
    def add_income(self, amount):
        self.income += amount
    
    def add_expense(self, amount):
        self.expenses += amount
    
    def add_savings(self, amount):
        self.savings += amount
    
    def display_summary(self):
        print("Financial Summary:")
        print(f"Income: ${self.income}")
        print(f"Expenses: ${self.expenses}")
        print(f"Savings: ${self.savings}")
        net_income = self.income - self.expenses
        print(f"Net Income: ${net_income}")

tracker = PersonalFinanceTracker()

def get_input():
    income = float(input("Enter income amount: $"))
    tracker.add_income(income)
    expenses = float(input("Enter expenses amount: $"))
    tracker.add_expense(expenses)
    savings = float(input("Enter savings amount: $"))
    tracker.add_savings(savings)

while True:
    get_input()
    choice = input("Do you want to add more financial data? (yes/no): ")
    if choice.lower() != 'yes':
        break
tracker.display_summary()
