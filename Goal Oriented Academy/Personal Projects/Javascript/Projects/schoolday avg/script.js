const subjectsDifficulty = {
    "world history": 4,
    "math": 8,
    "georgian": 8,
    "georgian history": 4,
    "english": 5,
    "italian": 0,
    "russian": 3,
    "physics": 5,
    "chemistry": 7,
    "biology": 6,
    "ethics": 2,
    "P.E": 0,
    "geography": 1,
    "music": 0
};

const schedule = {
    "monday": ["russian", "math", "geography", "georgian", "georgian history", "english"],
    "tuesday": ["math", "physics", "georgian history", "italian", "ethics", "chemistry", "georgian"],
    "wednesday": ["math", "english", "history", "biology", "georgian", "ethics"],
    "thursday": ["math", "physics", "georgian", "history", "geography", "chemistry", "italian"],
    "friday": ["russian", "georgian", "P.E", "math", "ethics", "biology", "music"]
};

function calculateDayDifficulty(subjectsOfTheDay, subjectsDifficulty) {
    let totalDifficulty = 0;
    subjectsOfTheDay.forEach(subject => {
        if (subjectsDifficulty.hasOwnProperty(subject)) {
            totalDifficulty += subjectsDifficulty[subject];
        } else {
            console.log(`Warning: Difficulty for ${subject} is not defined.`);
        }
    });
    return totalDifficulty;
}

for (const day in schedule) {
    if (schedule.hasOwnProperty(day)) {
        const subjectsOfTheDay = schedule[day];
        const dayDifficulty = calculateDayDifficulty(subjectsOfTheDay, subjectsDifficulty);
        document.getElementById(`${day}-difficulty`).textContent = dayDifficulty;
    }
}
