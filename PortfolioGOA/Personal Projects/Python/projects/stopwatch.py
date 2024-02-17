import time

def stopwatch():
    input("Press Enter to start the stopwatch...")
    print("Stopwatch started. Press Ctrl+C to stop.")
    start_time = time.time()
    try:
        while True:
            elapsed_time = time.time() - start_time
            hours, remainder = divmod(elapsed_time, 3600)
            minutes, seconds = divmod(remainder, 60)
            print(f"\rElapsed time: {int(hours):02d}:{int(minutes):02d}:{int(seconds):02d}", end="")
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nStopwatch stopped.")
        elapsed_time = time.time() - start_time
        hours, remainder = divmod(elapsed_time, 3600)
        minutes, seconds = divmod(remainder, 60)
        print(f"Total elapsed time: {int(hours):02d}:{int(minutes):02d}:{int(seconds):02d}")

if __name__ == "__main__":
    stopwatch()
