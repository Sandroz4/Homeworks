#include <stdio.h>

void printList(int list[], int N);

int main() {
    int list[] = {6, 4, 2, 1, 18, 17, 12};
    int newElement, location, i;
    int N = sizeof(list) / sizeof(list[0]);

    printf("Original List: ");
    printList(list, N);

    for (i = 1; i < N; i++) {
        newElement = list[i];
        location = i - 1;

        while (location >= 0 && list[location] > newElement) {
            list[location + 1] = list[location];
            location = location - 1;
        }

        list[location + 1] = newElement;
    }

    printf("Sorted List: ");
    printList(list, N);

    return 0;
}

void printList(int list[], int N) {
    for (int i = 0; i < N; i++) {
        printf("%d ", list[i]);
    }
    printf("\n");
}
