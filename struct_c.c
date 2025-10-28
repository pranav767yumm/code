#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int reply;
char ask;
struct student{
  int roll;
  float marks;
  char name[50];
  };
  
int main()
{
struct student s1;
struct student s2;
struct student *ptr = &s1;
    /* here i am aiming at s1 which is object of student type structure  with the magic stick of asterisk { * }  thus all the
    data/ value is being copied or saved in the *ptr  */

        
  
char n[]={"pranav"};
strcpy(s1.name,n);
  s1.roll=90;
  s1.marks=90.00;
  s2.roll=99;
  s2.marks=89.00;
  int a = strlen(n);
  printf("%f  marks \n",ptr->marks); ///ptr -> marks 
  printf("%d roll no \n",ptr->roll);
    /*  here i am checking values of marks and roll inside the pointer ptr with { ->} 
    arrow*/
  printf("%f marks \n",s2.marks);
  printf("%d roll no\n ",s2.roll);
  printf("%c %c %c %c %c %c\n",s1.name[0],s1.name[1],s1.name[2],s1.name[3],s1.name[4],s1.name[5]);
  for(int i = 0 ; i <= a; i++ )
  {
      printf("%c \n",s1.name[i]);  
  }
  printf(" lenth of name is : %d",a);

  printf("want to input data in structure ?\n"),scanf("%d",&reply);
  if(reply==1){
    printf("markrs for student 1 : "),scanf("%f",&s1.marks);
    printf("roll no for student 1 : "),scanf("%d",&s1.roll);
    printf("markrs for student 2 : "),scanf("%f",&s2.marks);
    printf("roll no for student 2 : "),scanf("%d",&s2.roll);
  printf("\nwant to see output ? "),scanf("%d",&ask);
      if((strcmp(ask,'y')==0) || (strcmp(ask,'Y')==0))
      {
              printf("%f\n",s1.marks);
              printf("%d\n",s1.roll);
              printf("%f\n",s2.marks);
              printf("%d\n",s2.roll);
      }
      else
      {
          printf("okay as you wish !");
      }
  
  }else{
  printf("program executed ! ");
  }
  return 0;
}
