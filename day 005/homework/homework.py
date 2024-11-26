book_prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

small_discount = 10
large_discount = 20

small_discount_prices = [price * (1 - small_discount / 100) for price in book_prices[:5]]
large_discount_prices = [price * (1 - large_discount / 100) for price in book_prices[5:]]

print("Books with small discounts:", small_discount_prices)
print("Books with large discounts:", large_discount_prices)