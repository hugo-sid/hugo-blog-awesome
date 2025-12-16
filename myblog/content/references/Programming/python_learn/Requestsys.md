+++
title = 'Request and SYS library functions'
date = 2023-06-09T13:03:07+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++
## Requests Library

The Requests library is the de facto standard for making HTTP requests in Python. It abstracts the complexities of making requests behind a beautiful, simple API so that you can focus on interacting with services and consuming data in your application.

Some key features of the Requests library include:

1. **Sending HTTP Requests**: Requests provides methods for sending various types of HTTP requests, such as `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, and `OPTIONS`. You can easily make requests to a specified URL and retrieve the response.

2. **Handling Responses**: When a request is made, Requests returns a `Response` object that contains all the response data, including the content, encoding, status code, and headers. You can access and manipulate this data to extract the information you need.

3. **Customizing Requests**: Requests allows you to customize your requests by setting headers, sending data in the request body, and passing parameters in the URL. You can also handle authentication, cookies, and file uploads/downloads.

4. **Handling SSL Certificates**: Requests automatically verifies SSL certificates by default, ensuring secure connections. You can also customize SSL certificate verification behavior if needed.

5. **Session Management**: Requests provides a `Session` object that allows you to persist certain parameters across multiple requests, such as cookies, headers, and authentication credentials. This is useful for maintaining session state and improving performance.


Requests Library:

1. requests.get(): Send a GET request
   ```python
   response = requests.get('https://api.example.com/data')
   ```

2. requests.post(): Send a POST request
   ```python
   response = requests.post('https://api.example.com/submit', data={'key': 'value'})
   ```

3. requests.put(): Send a PUT request
   ```python
   response = requests.put('https://api.example.com/update', data={'id': 1, 'name': 'John'})
   ```

4. requests.delete(): Send a DELETE request
   ```python
   response = requests.delete('https://api.example.com/remove/1')
   ```

5. response.status_code: Get the status code of the response
   ```python
   print(response.status_code)
   ```

6. response.text: Get the response content as text
   ```python
   print(response.text)
   ```

7. response.json(): Parse JSON content from the response
   ```python
   data = response.json()
   ```

8. response.headers: Get the headers of the response
   ```python
   print(response.headers)
   ```

9. requests.Session(): Create a session to persist parameters across requests
   ```python
   session = requests.Session()
   session.get('https://api.example.com/login')
   ```

10. requests.Request(): Construct a request object
    ```python
    req = requests.Request('GET', 'https://api.example.com/data')
    ```

11. requests.exceptions: Handle request exceptions
    ```python
    try:
        response = requests.get('https://api.example.com/data')
    except requests.exceptions.RequestException as e:
        print(e)
    ```

12. response.raise_for_status(): Raise an exception for unsuccessful status codes
    ```python
    response.raise_for_status()
    ```

13. requests.utils.dict_from_cookiejar(): Convert cookies to a dictionary
    ```python
    cookie_dict = requests.utils.dict_from_cookiejar(response.cookies)
    ```

14. requests.auth.HTTPBasicAuth(): Use HTTP Basic Authentication
    ```python
    response = requests.get('https://api.example.com/secure', auth=requests.auth.HTTPBasicAuth('user', 'pass'))
    ```

15. requests.head(): Send a HEAD request
    ```python
    response = requests.head('https://api.example.com/data')
    ```


## sys Library

The `sys` module in Python provides access to some variables used or maintained by the interpreter and to functions that interact strongly with the interpreter. It allows you to interact with the Python interpreter and provides tools for working with the operating system.

Some key features of the `sys` module include:

1. **Command-Line Arguments**: The `sys` module provides access to the command-line arguments passed to a Python script through the `sys.argv` list. You can use this to pass arguments to your script and customize its behavior.

2. **Standard Input/Output/Error**: The `sys` module gives you access to the standard input (`sys.stdin`), output (`sys.stdout`), and error (`sys.stderr`) streams. You can use these to read input from the user, print output, or handle errors.

3. **Exit the Python Interpreter**: The `sys` module allows you to exit the Python interpreter using the `sys.exit()` function. You can specify an optional exit status code to indicate the success or failure of your script.

4. **Path Management**: The `sys` module provides access to the `sys.path` list, which contains the directories that the Python interpreter searches when it tries to import a module. You can modify this list to add or remove directories from the search path.

5. **Platform-Specific Information**: The `sys` module provides information about the platform on which the Python interpreter is running, such as the version of Python, the operating system, and the machine architecture.

Both the Requests and `sys` libraries are powerful tools in the Python ecosystem. The Requests library simplifies the process of making HTTP requests and interacting with web services, while the `sys` module provides access to various Python interpreter and operating system features.

Now, let's cover 15 important functions and attributes from the sys module:

1. sys.argv: Access command-line arguments
   ```python
   print(sys.argv[1])  # Print the first command-line argument
   ```

2. sys.exit(): Exit the Python interpreter
   ```python
   sys.exit(1)  # Exit with status code 1
   ```

3. sys.path: List of directories Python looks in for modules
   ```python
   print(sys.path)
   ```

4. sys.version: Python version string
   ```python
   print(sys.version)
   ```

5. sys.platform: Identifier of the platform
   ```python
   print(sys.platform)
   ```

6. sys.stdin, sys.stdout, sys.stderr: Standard input, output, and error streams
   ```python
   sys.stdout.write("Hello, World!\n")
   ```

7. sys.modules: Dictionary of loaded modules
   ```python
   print(sys.modules.keys())
   ```

8. sys.executable: Path to the Python interpreter
   ```python
   print(sys.executable)
   ```

9. sys.getsizeof(): Get the size of an object in bytes
   ```python
   print(sys.getsizeof([1, 2, 3]))
   ```

10. sys.getrecursionlimit(): Get the maximum recursion depth
    ```python
    print(sys.getrecursionlimit())
    ```

11. sys.setrecursionlimit(): Set the maximum recursion depth
    ```python
    sys.setrecursionlimit(3000)
    ```

12. sys.maxsize: Largest integer supported by the platform's Py_ssize_t type
    ```python
    print(sys.maxsize)
    ```

13. sys.flags: Information about command-line flags
    ```python
    print(sys.flags)
    ```

14. sys.float_info: Information about float type
    ```python
    print(sys.float_info)
    ```

15. sys.exc_info(): Information about the current exception
    ```python
    try:
        1/0
    except:
        type, value, traceback = sys.exc_info()
        print(type, value)
    ```



### Citations:  
[1] https://realpython.com/python-requests/  
[2] https://www.codecademy.com/resources/docs/python/requests-module  
[3] https://datasciencedojo.com/blog/requests-library/  
[4] https://www.geeksforgeeks.org/python-requests-tutorial/  
[5] https://www.javatpoint.com/python-requests-module-http-request  