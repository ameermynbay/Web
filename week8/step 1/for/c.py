import math
a = int(input())
b = int(input())
for x in range(a, b+1):
	if math.sqrt(x)%1==0:
		print(x)