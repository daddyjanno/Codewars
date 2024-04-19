using System;

public static class Kata {
    public static string Replace(string str) {
        string pattern = @"[aeiouAEIOU]";
        return Regex.Replace(str, pattern, "!");

    }
}
