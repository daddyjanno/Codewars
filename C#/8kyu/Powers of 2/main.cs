using System.Numerics;
using System.Linq;
using System;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    return Enumerable.Range(0, n+1).Select(num => new BigInteger(Math.Pow(2.0, num))).ToArray();

  }
}
