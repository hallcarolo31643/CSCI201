
import random

def get_random_ts_code():
    """Returns a randomly generated TS code"""
    return "".join([random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") for _ in range(5)])