using System.Text.RegularExpressions;

public static class Kata {
    public static string Replace(string str) {
        string pattern = @"[aeiou]";
        return Regex.Replace(str, pattern, "!", RegexOptions.IgnoreCase);
    }
}
