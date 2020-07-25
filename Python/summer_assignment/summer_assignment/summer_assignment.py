# Example 1
# skriv ett program som matar in en text. 
# Om man skriver in "Stefan" ska programmet skriva ut "Hej Stefan" 
# annars ska programmet skriva ut "Jahadu är inte Stefan"

text = input('skriva text: ')
if(text == 'Stefan'):
    print('Hej Stefan')
else:
    print('Jaha du är inte Stefan')





# Example 2
# skriv ett program som matar in ett tal 10 gånger (loop) 
# Skriv sen ut summan av de 10 inmatade talen

lists=[]
total=0;
index=0;
while True:
    num = input('skriva ett tal: ')
    try:
        num = float(num)
        lists.append(num)
        index=index + 1
    except:
        print("felt tal !", num)
    if(index == 10):
        break
for each in lists:
    total += each;
print('summan: '+ str(total))
