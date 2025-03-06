import random

def get_random_ts_code(length=5):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return "".join([alphabet[random.randint(0, len(alphabet) - 1)] for _ in range(length)])
