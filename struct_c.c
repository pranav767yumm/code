#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct student{
  int roll;
  float marks;
  char name[50];
  };
  
int main()
{
struct student s1;
struct student s2;
  
char n[]={"pranav"};
strcpy(s1.name,n);
  s1.roll=90;
  s1.marks=90.00;
  s2.roll=99;
  s2.marks=89.00;
  int a = strlen(n);
  printf("%f\n",s1.marks);
  printf("%d\n",s1.roll);
  printf("%f\n",s2.marks);
  printf("%d\n",s2.roll);
  printf("%c %c %c %c %c %c\n",s1.name[0],s1.name[1],s1.name[2],s1.name[3],s1.name[4],s1.name[5]);
  for(int i = 0 ; i <= 5; i++ )
  {
      printf("%c \n",s1.name[i]);  
  }
  printf("%d",a);
  return 0;
}
