'''
Push Front
Given array and an additional value, insert this value at the beginning of the array.
'''
def push_front(arr, val):
    # Easiest:
    # arr.insert(0,val)
    # return arr

    # Duplicate final value of array
    arr.append(arr[-1])
    for idx in reversed(range(0,len(arr))):
        arr[idx] = arr[idx-1]
    arr[0] = val
    return arr

print push_front([7,5,3],3)
