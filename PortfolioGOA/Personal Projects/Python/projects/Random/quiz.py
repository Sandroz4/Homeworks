import random

quiz_questions = {
    "What is the capital of France?": ["A. Paris", "B. London", "C. Berlin", "D. Rome"],
    "Who wrote 'Romeo and Juliet'?": ["A. William Shakespeare", "B. Jane Austen", "C. Charles Dickens", "D. J.K. Rowling"],
    "What is the powerhouse of the cell?": ["A. Nucleus", "B. Mitochondria", "C. Chloroplast", "D. Golgi Apparatus"],
}

def display_question(question, choices):
    print(question)
    for choice in choices:
        print(choice)
    user_answer = input("Enter your answer (A, B, C, or D): ").upper()
    return user_answer

def check_answer(question, user_answer):
    correct_answer = question[0][0]
    if user_answer == correct_answer:
        print("Correct!\n")
        return 1
    else:
        print("Incorrect!\n")
        return 0
    
def run_quiz(questions):
    total_score = 0
    for question, choices in questions:
        user_answer = display_question(question, choices)
        total_score += check_answer(choices, user_answer)
    print("Quiz completed! Your total score is:", total_score)

random_questions = random.sample(list(quiz_questions.items()), len(quiz_questions))

run_quiz(random_questions)
