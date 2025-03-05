import random
class_name = "CSCI201"
methods = ["getName", "getID", "getGrade"]

def getName():
    # Generate a random name between 3 and 10 characters long
    return ''.join(random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ') for i in range(random.randint(3, 10)))

def getID():
    # Generate a random ID between 5 and 12 digits long
    return ''.join(str(random.randint(0, 9)) for i in range(random.randint(5, 12)))

def getGrade():
    # Generate a random grade between A and F
    grades = ["A", "B", "C", "D", "E", "F"]
    return random.choice(grades)