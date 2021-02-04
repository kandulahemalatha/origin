import java.util.Scanner;
public class pswrd
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in())
int t,String s;
t=sc.nextInt();
for(int i=0;i<t;i++)
{
  s=sc.nextLine();
  decrypt(s);
}
}
 public void decrypt(String s)
{
  String r1=s.replaceAll("AEIOUaeiou]","");
  for(int i=0;i<r1.length();i++)
  {
    String r2 += '*'+r1.charAt(i);
   }
   String result =r2.toLowerCase();
  System.out.println( result);
}
}