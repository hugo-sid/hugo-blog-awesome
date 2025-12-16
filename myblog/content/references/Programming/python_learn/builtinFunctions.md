+++
title = 'Mostly used Built-in Functions in Python '
date = 2023-07-12T13:21:10+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++

Mostly used functions in Python...

1. **print()**: Prints the specified value or values.
   Example: `print("Hello, World!")`
   Output: `Hello, World!`

2. **input()**: Reads a line from the console and returns it as a string.
   Example: `name = input("What is your name? ")`
   Output: `What is your name? John`

3. **len()**: Returns the length of an object (string, list, tuple, etc.).
   Example: `my_list = [1, 2, 3, 4, 5]` and `print(len(my_list))`
   Output: `5`

4. **max()**: Returns the largest item in an iterable or the largest of two or more arguments.
   Example: `numbers = [10, 20, 30, 40, 50]` and `print(max(numbers))`
   Output: `50`

5. **min()**: Returns the smallest item in an iterable or the smallest of two or more arguments.
   Example: `numbers = [10, 20, 30, 40, 50]` and `print(min(numbers))`
   Output: `10`

6. **abs()**: Returns the absolute value of a number.
   Example: `x = -10` and `print(abs(x))`
   Output: `10`

7. **round()**: Returns a floating-point number rounded to a specified number of decimal places.
   Example: `x = 3.14159` and `print(round(x, 2))`
   Output: `3.14`

8. **int()**: Converts a number or string to an integer.
   Example: `x = "42"` and `print(int(x))`
   Output: `42`

9. **float()**: Converts a number or string to a floating-point number.
   Example: `x = "3.14"` and `print(float(x))`
   Output: `3.14`

10. **str()**: Converts an object to a string.
    Example: `x = 42` and `print(str(x))`
    Output: `"42"`

11. **bool()**: Converts a value to a boolean (True or False).
    Example: `x = 0` and `print(bool(x))`
    Output: `False`

12. **ord()**: Returns an integer representing the Unicode character.
    Example: `print(ord('A'))`
    Output: `65`

13. **chr()**: Returns a string representing a Unicode character.
    Example: `print(chr(65))`
    Output: `'A'`

14. **range()**: Returns a sequence of numbers starting from a specified beginning and ending at a specified end.
    Example: `for i in range(5):` and `print(i)`
    Output: `0 1 2 3 4`

15. **sorted()**: Returns a new sorted list from the elements of its argument.
    Example: `numbers = [3, 1, 4, 1, 5, 9]` and `print(sorted(numbers))`
    Output: `[1, 1, 3, 4, 5, 9]`

16. **reversed()**: Returns a reverse iterator over the elements of an iterable.
    Example: `my_list = [1, 2, 3, 4, 5]` and `print(list(reversed(my_list)))`
    Output: `[5, 4, 3, 2, 1]`

17. **zip()**: Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables.
    Example: `names = ['Alice', 'Bob', 'Charlie']` and `ages = [25, 30, 35]` and `print(list(zip(names, ages)))`
    Output: `[('Alice', 25), ('Bob', 30), ('Charlie', 35)]`

18. **map()**: Returns an iterator that applies a function to each item of an iterable.
    Example: `numbers = [1, 2, 3, 4, 5]` and `print(list(map(lambda x: x**2, numbers)))`
    Output: `[1, 4, 9, 16, 25]`

19. **filter()**: Returns an iterator that filters elements from an iterable based on a condition.
    Example: `numbers = [1, 2, 3, 4, 5]` and `print(list(filter(lambda x: x % 2 == 0, numbers)))`
    Output: `[2, 4]`

20. **reduce()**: Applies a rolling function to the elements of an iterable.
    Example: `from functools import reduce` and `numbers = [1, 2, 3, 4, 5]` and `print(reduce(lambda x, y: x + y, numbers))`
    Output: `15`

21. **all()**: Returns True if all elements of an iterable are true.
    Example: `my_list = [True, True, True]` and `print(all(my_list))`
    Output: `True`

22. **any()**: Returns True if at least one element of an iterable is true.
    Example: `my_list = [False, True, False]` and `print(any(my_list))`
    Output: `True`

23. **enumerate()**: Returns an iterator that produces tuples containing the index and value for each item in an iterable.
    Example: `my_list = ['apple', 'banana', 'cherry']` and `print(list(enumerate(my_list)))`
    Output: `[(0, 'apple'), (1, 'banana'), (2, 'cherry')]`

24. **zip_longest()**: Returns an iterator that aggregates elements from each of the iterables.
    Example: `names = ['Alice', 'Bob', 'Charlie']` and `ages = [25, 30]` and `print(list(zip_longest(names, ages, fillvalue=0)))`
    Output: `[('Alice', 25), ('Bob', 30), ('Charlie', 0)]`

25. **itertools.count()**: Returns a count object that produces a sequence of numbers starting from a specified number.
    Example: `import itertools` and `counter = itertools.count(start=10, step=2)` and `print(list(itertools.islice(counter, 5)))`
    Output: `[10, 12, 14, 16, 18]`

26. **itertools.cycle()**: Returns an iterator that produces elements from an iterable in a cycle.
    Example: `import itertools` and `colors = ['red', 'green', 'blue']` and `for color in itertools.cycle(colors):` and `print(color)`
    Output: `red green blue red green blue ...` (continues indefinitely)

27. **itertools.repeat()**: Returns an iterator that produces a specified value repeatedly.
    Example: `import itertools` and `print(list(itertools.repeat(42, 3)))`
    Output: `[42, 42, 42]`

28. **itertools.chain()**: Returns an iterator that produces elements from each of the iterables.
    Example: `import itertools` and `numbers = [1, 2, 3]` and `letters = ['a', 'b', 'c']` and `print(list(itertools.chain(numbers, letters)))`
    Output: `[1, 2, 3, 'a', 'b', 'c']`

29. **itertools.compress()**: Returns an iterator that filters elements from an iterable based on a condition.
    Example: `import itertools` and `data = [1, 2, 3, 4, 5]` and `selectors = [True, False, True, False, True]` and `print(list(itertools.compress(data, selectors)))`
    Output: `[1, 3, 5]`

30. **itertools.dropwhile()**: Returns an iterator that drops elements from the start of an iterable until a condition is met.
    Example: `import itertools` and `numbers = [2, 4, 6, 8, 10, 1, 3, 5]` and `print(list(itertools.dropwhile(lambda x: x % 2 == 0, numbers)))`
    Output: `[1, 3, 5]`

These built-in functions cover a wide range of functionality, from basic data manipulation to advanced itertools operations. Mastering these functions can significantly improve your Python programming efficiency and productivity.

## Citations:
[1] https://blog.hubspot.com/website/python-built-in-functions    
[2] https://www.shiksha.com/online-courses/articles/different-types-of-python-built-in-functions/    
[3] https://sunscrapers.com/blog/30-built-in-python-modules-you-should-be-using-now/      
[4] https://realpython.com/python-built-in-functions/    
[5] https://www.simplilearn.com/tutorials/python-tutorial/python-functions  
[6] https://www.linkedin.com/pulse/introduction-python-data-types-built-in-functions-suraj-kumar-soni  
[7] https://www.geeksforgeeks.org/python-functions/  
[8] https://www.digitalocean.com/community/tutorials/built-in-python-3-functions-for-working-with-numbers  