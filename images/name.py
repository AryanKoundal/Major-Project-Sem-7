import os

files = os.listdir()

for file in files:
    new = file[-7:]
    os.rename(file, new)