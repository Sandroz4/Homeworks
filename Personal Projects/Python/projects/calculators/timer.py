import time

def timer(seconds):
    print(f"Timer set for {seconds} seconds.")
    for remaining_seconds in range(seconds, 0, -1):
        print(f"{remaining_seconds} seconds remaining.")
        time.sleep(1)
    print("Timer expired!")

if __name__ == "__main__":
    seconds = int(input("Enter the number of seconds for the timer: "))
    timer(seconds)
