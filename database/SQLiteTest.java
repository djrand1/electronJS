import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLiteTest {

   public static void createNewDatabase(String fileName) {

       String url = "jdbc:sqlite:/home/rsf5/IdeaProjects/FallBackYeah/SQLiteDatabaseBase/" + fileName;

        try (Connection conn = DriverManager.getConnection(url)) {
            if (conn != null) {
                DatabaseMetaData meta = conn.getMetaData();
                System.out.println("Driver name: " + meta.getDriverName());


            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
   }

   public static void createTestTable(String fileName) {

       String url = "jdbc:sqlite:/home/rsf5/IdeaProjects/FallBackYeah/SQLiteDatabaseBase/" + fileName;

       String sql = "CREATE TABLE test (\n" +
               " id integer PRIMARY KEY,\n" +
               " name text NOT NULL,\n" +
               " capacity real\n" +
               ");";

       try (Connection conn = DriverManager.getConnection(url);
                Statement stmt = conn.createStatement()) {
           stmt.execute(sql);
       } catch (SQLException e) {
           System.out.println(e.getMessage());
       }
   }

   public static void main(String[] args) {
       //createNewDatabase("test.db");
       createTestTable("test.db");
   }



}
