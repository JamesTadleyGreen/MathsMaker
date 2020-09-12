import math
import random


class Addition():
    def init(self):
        pass

    def add(self, x, y):
        print(x, y)
        z = x+y
        carry_list = []
        while x != 0 and y !=0:
            carry_list.append((x % 10 + y % 10) // 10)
            x = x // 10
            y = y // 10
        return (z, carry_list)


a = Addition()
print(a.add(random.randint(0,1000), random.randint(0,1000)))
