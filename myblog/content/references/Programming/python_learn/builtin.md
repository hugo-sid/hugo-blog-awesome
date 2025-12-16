+++
title = 'Popular Built-in Modules in Python'
date = 2023-07-20T12:40:10+05:45
categories = ["PythonLibraries","AI_help"]
draft = false
+++
Here are the 30 most popular built-in modules/libraries of Python, along with examples and uses:

## 1. **abc**
The `abc` module provides the environment for creating abstract base classes.

**Example:**
```python
from abc import ABCMeta, abstractmethod

class MyAbstractClass(metaclass=ABCMeta):
    @abstractmethod
    def x(self):
        pass

    @abstractmethod
    def y(self):
        pass

obj = MyAbstractClass()  # Throws TypeError
```
**Use:**
- Ensures that classes are properly abstracted and cannot be instantiated if they are not fully implemented.

## 2. **argparse**
The `argparse` module provides a way to parse command-line arguments.

**Example:**
```python
import argparse

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('integers', metavar='N', type=int, nargs='+',
                    help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const',
                    const=sum, default=max,
                    help='sum the integers (default: find the max)')

args = parser.parse_args()
print(args.accumulate(args.integers))
```
**Use:**
- Parses command-line arguments and provides a structured way to handle them.

## 3. **asyncio**
The `asyncio` module provides support for writing asynchronous code.

**Example:**
```python
import asyncio

async def main():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(main())
```
**Use:**
- Allows for efficient handling of asynchronous tasks and events.

## 4. **base64**
The `base64` module provides functions for encoding and decoding data.

**Example:**
```python
import base64

encoded = base64.b64encode(b'Hello, World!')
decoded = base64.b64decode(encoded)

print(encoded.decode('utf-8'))
print(decoded.decode('utf-8'))
```
**Use:**
- Encodes and decodes data for secure transmission.

## 5. **collections**
The `collections` module provides various high-performance container data types.

**Example:**
```python
from collections import deque

d = deque(maxlen=3)
d.append(1)
d.append(2)
d.append(3)
print(d)
d.append(4)
print(d)
```
**Use:**
- Provides efficient data structures like `deque`, `defaultdict`, and `namedtuple`.

## 6. **copy**
The `copy` module provides functions for shallow and deep copying of objects.

**Example:**
```python
import copy

original = [1, 2, 3]
shallow_copy = original[:]
deep_copy = copy.deepcopy(original)

original.append(4)
print(original)
print(shallow_copy)
print(deep_copy)
```
**Use:**
- Ensures that objects are copied correctly, avoiding unintended changes.

## 7. **csv**
The `csv` module provides functions for reading and writing CSV files.

**Example:**
```python
import csv

with open('example.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['a', 'b', 'c'])
    writer.writerow(['1', '2', '3'])

with open('example.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(', '.join(row))
```
**Use:**
- Reads and writes CSV files efficiently.

## 8. **datetime**
The `datetime` module provides functions for working with dates and times.

**Example:**
```python
from datetime import datetime

now = datetime.now()
print(now)
print(now.strftime('%Y-%m-%d %H:%M:%S'))
```
**Use:**
- Handles date and time calculations and formatting.

## 9. **functools**
The `functools` module provides functions for higher-order functions and partial application.

**Example:**
```python
import functools

def add(a, b):
    return a + b

add_with_10 = functools.partial(add, 10)
print(add_with_10(5))
```
**Use:**
- Enhances functions with additional functionality.

## 10. **itertools**
The `itertools` module provides functions for working with iterators.

**Example:**
```python
import itertools

print(list(itertools.chain('ABC', 'DEF')))
print(list(itertools.combinations('ABC', 2)))
```
**Use:**
- Provides efficient tools for working with iterators.

## 11. **logging**
The `logging` module provides functions for logging messages.

**Example:**
```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info('Hello, World!')
```
**Use:**
- Provides structured logging for applications.

## 12. **math**
The `math` module provides functions for mathematical operations.

**Example:**
```python
import math

print(math.sqrt(9))
print(math.sin(math.pi / 2))
```
**Use:**
- Provides advanced mathematical functions.

## 13. **os**
The `os` module provides functions for interacting with the operating system.

**Example:**
```python
import os

print(os.getcwd())
os.chdir('/tmp')
print(os.getcwd())
```
**Use:**
- Provides access to operating system functionality.

## 14. **pathlib**
The `pathlib` module provides functions for working with paths.

**Example:**
```python
import pathlib

p = pathlib.Path('/tmp')
print(p.exists())
p.mkdir()
print(p.is_dir())
```
**Use:**
- Simplifies path manipulation and handling.

## 15. **pickle**
The `pickle` module provides functions for serializing and deserializing objects.

**Example:**
```python
import pickle

data = {'a': [1, 2, 3], 'b': 'Hello, World'}
with open('example.pkl', 'wb') as f:
    pickle.dump(data, f)

with open('example.pkl', 'rb') as f:
    data = pickle.load(f)
print(data)
```
**Use:**
- Serializes and deserializes objects for storage and transmission.

## 16. **random**
The `random` module provides functions for generating random numbers.

**Example:**
```python
import random

print(random.randint(0, 100))
print(random.choice(['apple', 'banana', 'cherry']))
```
**Use:**
- Generates random numbers for simulations and testing.

## 17. **re**
The `re` module provides functions for working with regular expressions.

**Example:**
```python
import re

text = 'Hello, World!'
pattern = r'\b\w+\b'
print(re.findall(pattern, text))
```
**Use:**
- Provides powerful tools for text processing and pattern matching.

## 18. **shutil**
The `shutil` module provides functions for copying and moving files and directories.

**Example:**
```python
import shutil

shutil.copy('example.txt', 'example_copy.txt')
shutil.move('example.txt', 'example_new.txt')
```
**Use:**
- Simplifies file and directory operations.

## 19. **signal**
The `signal` module provides functions for handling signals.

**Example:**
```python
import signal

def handler(signum, frame):
    print('Signal handler called with signal', signum)

signal.signal(signal.SIGINT, handler)
```
**Use:**
- Handles system signals for robust application behavior.

## 20. **sqlite3**
The `sqlite3` module provides functions for working with SQLite databases.

**Example:**
```python
import sqlite3

conn = sqlite3.connect('example.db')
c = conn.cursor()
c.execute('''
    CREATE TABLE IF NOT EXISTS people (
        name TEXT,
        age INTEGER
    );
''')
conn.commit()
```
**Use:**
- Provides a lightweight database solution.

## 21. **subprocess**
The `subprocess` module provides functions for running subprocesses.

**Example:**
```python
import subprocess

subprocess.run(['ls', '-l'])
```
**Use:**
- Runs external commands and captures their output.

## 22. **sys**
The `sys` module provides functions for interacting with the Python interpreter.

**Example:**
```python
import sys

print(sys.argv)
print(sys.path)
```
**Use:**
- Provides access to system information and configuration.

## 23. **threading**
The `threading` module provides functions for working with threads.

**Example:**
```python
import threading

def print_time(thread_name, delay):
    count = 0
    while count < 5:
        count += 1
        print(f"{thread_name} {count}")
        time.sleep(delay)

t1 = threading.Thread(target=print_time, args=('Thread-1', 1))
t2 = threading.Thread(target=print_time, args=('Thread-2', 2))

t1.start()
t2.start()

t1.join()
t2.join()
```
**Use:**
- Allows for concurrent execution of tasks.

## 24. **time**
The `time` module provides functions for working with time.

**Example:**
```python
import time

print(time.time())
print(time.ctime())
```
**Use:**
- Provides functions for time-related operations.

## 25. **typing**
The `typing` module provides functions for type hinting.

**Example:**
```python
from typing import List

def greet(names: List[str]):
    for name in names:
        print(f"Hello, {name}!")

names = ['John', 'Jane', 'Bob']
greet(names)
```
**Use:**
- Enhances code readability and maintainability through type hints.

## 26. **uuid**
The `uuid` module provides functions for generating universally unique identifiers.

**Example:**
```python
import uuid

print(uuid.uuid4())
```
**Use:**
- Provides unique identifiers for various purposes.

## 27. **zipfile**
The `zipfile` module provides functions for working with ZIP archives.

**Example:**
```python
import zipfile

with zipfile.ZipFile('example.zip', 'w') as zip:
    zip.write('example.txt')

with zipfile.ZipFile('example.zip', 'r') as zip:
    zip.extractall()
```
**Use:**
- Handles ZIP archives for data storage and transmission.

## 28. **io**
The `io` module provides functions for working with input/output operations.

**Example:**
```python
import io

f = io.StringIO()
f.write('Hello, World!')
f.seek(0)
print(f.read())
```
**Use:**
- Provides efficient input/output operations.

## 29. **json**
The `json` module provides functions for working with JSON data.

**Example:**
```python
import json

data = {'name': 'John', 'age': 30}
json_data = json.dumps(data)
print(json_data)
```
**Use:**
- Encodes and decodes JSON data for data exchange.

## 30. **urllib**
The `urllib` module provides functions for working with URLs.

**Example:**
```python
import urllib.request

with urllib.request.urlopen('https://www.example.com') as response:
    print(response.read().decode('utf-8'))
```
**Use:**
- Provides tools for handling URLs and web requests.

These built-in modules are essential for efficient and reliable Python development, offering a wide range of functionalities from file operations to mathematical computations and web services.

## Citations:
[1] https://sunscrapers.com/blog/30-built-in-python-modules-you-should-be-using-now/  
[2] https://www.reddit.com/r/learnpython/comments/129c5yp/what_are_some_useful_and_underrated_built_in/  
[3] https://www.programiz.com/python-programming/modules  
[4] https://www.geeksforgeeks.org/built-in-modules-in-python/  
[5] https://www.digitalocean.com/community/tutorials/python-modules  
[6] https://www.upgrad.com/blog/python-built-in-modules/  
[7] https://catswhocode.com/python-modules-list/  
[8] https://docs.python.org/3/py-modindex.html  
[9] https://bilginc.com/en/blog/top-python-modules-in-6-key-categories-5927/  
[10] https://www.knowledgehut.com/tutorials/python-tutorial/python-built-in-modules  
[11] https://www.w3schools.com/python/gloss_python_module_built-in.asp  
[12] https://www.tutorialsteacher.com/python/python-builtin-modules  
[13] https://ioflood.com/blog/python-modules/  