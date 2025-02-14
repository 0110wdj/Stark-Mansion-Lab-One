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