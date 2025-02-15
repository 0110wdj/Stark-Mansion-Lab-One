## 01 Error 和 Exception

- 检查性异常
- 运行时异常
- 错误

异常体系结构

- Throwable
    - Error
        - VirtualMachineError
            - StackOverFlowError
            - OutOfMemoryError
        - AWTError
    - Exception
        - IOException
            - EOFException
            - FileNotFoundException
        - RuntimeException
            - ArithmeticException
            - MissingResourceException
            - ClassNotFoundException
            - NullPointerException
            - IllegalArgumentException
            - ArrayIndexOutOfBoundsException
            - UnknownTypeException

## 02 捕获和抛出异常

- try
- catch
- finally
- throw
- throws

异常捕获的范围从小到大。