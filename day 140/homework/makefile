CC=gcc
CFLAGS=-Wall

all : linear_search
.PHONY : all

linear_search : linear_search.o 
	$(CC) $(CFLAGS) -o linear_search linear_search.o 

linear_search.o : main.c 
	$(CC) -Wall -c -o linear_search.o main.c
	
asm : main.c
	$(CC) $(CFLAGS) -S -o linear_search.s main.c
	$(CC) $(CFLAGS) -o linear_search_asm linear_search.s	
	
debug:clean main.c
	$(CC) -Wall -g -o test main.c 
	gdb -tui  test	
	
.PHONY: clean
clean : 
	rm -rf *.o test