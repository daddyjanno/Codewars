using System;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    int[] result = []
    for (int i = 0; i <= n; i++)
    {
        result[i] = Math.Pow(2, i);
    }
  return result;
  }
}
