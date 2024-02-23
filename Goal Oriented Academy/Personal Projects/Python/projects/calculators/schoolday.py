subjects_difficulty = {
    "world history": 5,
    "math": 8,
    "georgian": 8,
    "georgian history": 4,
    "english": 4,
    "italian": 2,
    "russian": 3,
    "physics": 7,
    "chemistry": 8,
    "biology": 7,
    "ethics": 5,
    "P.E": 0,
    "geography": 2,
    "music": 0
}

schedule = {
    "monday": ["russian", "math", "geography", "georgian", "georgian history", "english"],
    "tuesday": ["math", "physics", "georgian history", "italian", "ethics", "chemistry", "georgian"],
    "wednesday": ["math", "english", "history", "biology", "georgian", "ethics"],
    "thursday": ["math", "physics", "georgian", "history", "geography", "chemistry", "italian"],
    "friday": ["russian", "georgian", "P.E", "math", "ethics", "biology", "music"]
}

def calculate_day_difficulty(day_schedule, subjects_difficulty):
    total_difficulty = 0
    for subject in day_schedule:
        total_difficulty += subjects_difficulty.get(subject, 0)
    return total_difficulty

for day, subjects in schedule.items():
    day_difficulty = calculate_day_difficulty(subjects, subjects_difficulty)
    print(f"The difficulty of {day.capitalize()} is: {day_difficulty}")

