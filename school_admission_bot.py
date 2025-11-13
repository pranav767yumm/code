print("this is bot for admission process enquiry !!")
a=input("enter your name: ")
b=input("name of student searching admission for: ")
c=int(input("enter age of the child (in digits only): "))
xy=input("enter your location: ")

if(c==5):
    g="senior KG"
elif(c==6):
    g="1st std"    
elif(c==7):
    g="2nd std"
elif(c==8):
    g="3rd std"
elif(c==9):
    g="4th std"
elif c==10:
    g="5th std"
elif(c==11):
    g="6th std"
elif(c==12):
    g="7th std"
elif(c==13):
    g="8th std"
elif(c==14):
    g="9th std"
elif(c==15):
    g="10th std"
elif(c > 15 and c <= 17):
    g="college"
else:
    g="no admission allowed bellow thw age of 5"

print("============eligible for admission in",g,"============")



print("there are admissions avalable in",xy,"and nearby your location !!")
o=input("would you like to contact school for further process: ")

if o=="yes":
    print("contact no: 8686868xxx"\
    "\nemail id: schoolgov@gmail.com")
elif o=="no":
    print("you can visit offline from mon-sat")
else:
    print("input error")




print("thank you for contacting us",a)
print("we wish",b,"a great career ahead ! ")
print("get to know about us on ig @govschool.com.in")

