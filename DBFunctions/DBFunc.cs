using System.Text;
using System.Data;
using System;
using System.IO;
using System.Security.AccessControl;
using System.Data.SqlClient;

public static void InsertUser(string username, string password, string mail) {
    SqlConnection conn = new SqlConnection(@"Data Source=https://c2acx154.caspio.com/dp/2357900067ed213cea8c4ca98587;");

    conn.Open();

    string insert = " INSERT INTO UserTable([])"
}