print("this is bot for admission process enquiry !!")
a=input("enter your name: ")
b=input("name of student searching admission for: ")
c=int(input("enter age of the child (in digits only): "))
xy=input("enter your location: ")

# diffrent approach 
''' if 6 yaers old is going to 1 st std then'''
if(c==5):
    g="senior KG"
elif ( c > 4 ) and (14 > c ) :
    g = c - 5
elif (c >= 15) and (c <= 25) :
    g = "collage"
else:
    g="err"

if g=="err":
    print(f"============uneligible for admission in our college============")
elif( c >= 5 ) and (15 >= c ):
    if( c >= 5 ) and (15 >= c ):
        print(f"============eligible for admission in {g}============")
else:
    print(f"============eligible for admission in {g} grade========")
    
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
