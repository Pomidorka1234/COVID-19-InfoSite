using System;
using System.Web;

public class RegisterUser : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        string UserName = context.Request["UserName"];
        string Password = context.Request["Password"];
        string Email = context.Request["Email"];
        string FirstName = context.Request["FirstName"];
        string LastName = context.Request["LastName"];
        string CodeQuestion = context.Request["CodeQuestion"];
        string CodeAnswer = context.Request["CodeAnswer"];
        DBFunctions.InsertNewUser(FirstName, LastName, UserName, Password, Email, CodeQuestion, CodeAnswer);
        
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}