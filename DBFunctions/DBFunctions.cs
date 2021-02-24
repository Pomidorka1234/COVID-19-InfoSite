using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBFunctions
{
    class DBFunctions
    {
        public static void InsertNewUser(string FirstName, string LastName, string UserName, string Password, string Email)
        {
            
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB; Initial catalog=LevelsUsersDB");

            conn.Open();

            string InsertUser = ("INSERT INTO Users([FirstName], [LastName], [UsesrName], [Password], [Email])" + "VALUES ('" + FirstName + "','" + LastName + "','" + UserName + "','" + Password + "','" + Email + "')");
            SqlCommand cmd = new SqlCommand(InsertUser, conn);

            cmd.ExecuteNonQuery();
        

            conn.Close();
        }

        public static void InsertNewLevel(string LevelName, string LevelDescription, string LevelLink)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=LevelsUsersDB");

            conn.Open();

            string InsertLevel = ("INSERT INTO Users([LevelName], [LevelDescription], [LevelLink], [LevelRating])" + "VALUES ('" + LevelName + "','" + LevelDescription + "','" + LevelLink + "'," + null + ")");
            SqlCommand cmd = new SqlCommand(InsertLevel, conn);

            cmd.ExecuteNonQuery();

            conn.Close();
        }

        public static object[] SelectAllLevels()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=LevelsUsersDB");

            conn.Open();

            string select = ("SELECT (*) FROM Levels");

            SqlCommand cmd = new SqlCommand(select, conn);
            SqlDataReader reader = cmd.ExecuteReader();

            object[] Levels = new object[(int)(new SqlCommand("SELECT COUNT(*) FROM Levels")).ExecuteScalar()];

            for (int i = 0; i < Levels.Length; i++)
            {
                if (reader.Read())
                    Levels[i] = new { Id = reader["Id"].ToString(), LevelName = reader["LevelName"].ToString(), LevelDescription = reader["LevelDescription"].ToString(), LevelLink = reader["LevelLink"].ToString(), LevelRating = reader["LevelRating"].ToString() };
                else
                    i = Levels.Length;
            }

            conn.Close();

            return Levels;
        }

        public static object TryLogin(string UserName, string Password)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB; Initial catalog=LevelsUsersDB");

            conn.Open();

            string UserLogged = ("SELECT COUNT(*) FROM Users WHERE UserName = '" + UserName + "' and Password = '" + Password + "'");
            SqlCommand cmd = new SqlCommand(UserLogged, conn);

            int CheckLogin = (int)cmd.ExecuteScalar();

            conn.Close();

            if (CheckLogin == 1)
                return (new SqlCommand(("SELECT UserID FROM Users WHERE UserName = '" + UserName + "' and Password = '" + Password + "'"), conn)).ExecuteScalar();
            else
                return -1;
        }

        public static int CountUser()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=LevelsUsersDB");

            conn.Open();

            SqlCommand cmd = new SqlCommand("SELECT COUNT(*) FROM Users");
            int count = (int)cmd.ExecuteScalar();

            conn.Close();
            return count;
        }
    }
}
