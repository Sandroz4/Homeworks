#include <stdio.h>

int get_temp(int celsius);

int main() {
    int temp = 0;
    char c;

    printf("Please enter your temperature number in Celsius: ");

    while (1) {  // Loop until valid input is received
        temp = 0;
        while ((c = getchar()) != '\n') {
            if (c >= '0' && c <= '9') {
                temp = temp * 10 + (c - '0');
            } else {
                printf("Invalid input. Please enter only digits: ");
                while (getchar() != '\n');  // Clear input buffer
                break;
            }
        }

        if (c == '\n')  // Input was valid, exit loop
            break;
    }

    printf("\nYour temperature in Fahrenheit is %d\n", get_temp(temp));

    return 0;
}

int get_temp(int celsius) {
    return (celsius * 9 / 5) + 32;
}
