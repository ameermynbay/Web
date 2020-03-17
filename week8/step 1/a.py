import math
a = int(input())
for i in range(1, a+1):
	if math.sqrt(i)%1==0:
		print(i)