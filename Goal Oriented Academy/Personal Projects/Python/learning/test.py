def walk(steps):
    for step in range(1, steps + 1):
        print(f'you take steb #{steps}')

walk(100)



def walk(steps):
        if steps == 0:
             return
        walk(steps - 1)
        print(f'you take steb #{steps}')
        

walk(100)


