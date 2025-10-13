#include <stdio.h>
#include <string.h>

typedef struct address {
  int house_no;
  int block;
  char city[20];
  char state[20];
} add; 

int main()
{
  struct address s1[5];
  s1[0].house_no = 9;
  s1[0].block=909;
  strcpy(s1[0].city,"pune");
  strcpy(s1[0].state,"maharashtra");
  

  s1[1].house_no = 9;
  s1[1].block=90;
  strcpy(s1[1].city,"puneee");
  strcpy(s1[1].state,"maharashtra");
  
  //struct address s1[5];
  s1[2].house_no = 9;
  s1[2].block=909;
  strcpy(s1[2].city,"pune");
  strcpy(s1[2].state,"maharashtra");
  
  s1[3].house_no = 9;
  s1[3].block=909;
  strcpy(s1[3].city,"pune");
  strcpy(s1[3].state,"maharashtra");
  return 0 ;
}
