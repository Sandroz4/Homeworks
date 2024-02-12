class Task:
    def __init__(self, title, status="Pending"):
        self.title = title
        self.status = status

class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, title):
        self.tasks.append(Task(title))

    def remove_task(self, title):
        for task in self.tasks:
            if task.title == title:
                self.tasks.remove(task)
                break

    def view_tasks(self):
        for index, task in enumerate(self.tasks, start=1):
            print(f"{index}. {task.title} - {task.status}")

def main():
    todo_list = ToDoList()
    
    while True:
        print("\n===== To-Do List Menu =====")
        print("1. Add Task")
        print("2. Remove Task")
        print("3. View Tasks")
        print("4. Quit")
        choice = input("Enter your choice: ")

        if choice == '1':
            title = input("Enter task title: ")
            todo_list.add_task(title)
            print("Task added successfully!")
        elif choice == '2':
            title = input("Enter task title to remove: ")
            todo_list.remove_task(title)
            print("Task removed successfully!")
        elif choice == '3':
            print("\n===== Tasks =====")
            todo_list.view_tasks()
        elif choice == '4':
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
