def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i