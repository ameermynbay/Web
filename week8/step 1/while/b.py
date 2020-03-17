a= int(input())
i = 2
while i<=a:
	if a%i==0:
		for x in range(2,i):
			if i%x==0:
				break
			print(i)
			i = a
			break
	i += 1