using DomainModels.Entities;
using DomainModels.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using WebApp.App_Start;
using WebApp.Security;
using System.Web.Optimization;
namespace WebApp
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            UnityConfig.RegisterComponents();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            BundleConfig.RegisterBundles(BundleTable.Bundles);
            BundleTable.EnableOptimizations = true; //only for debug mode
        }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e)
        {
            HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
            if (authCookie != null)
            {
                FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);

                UserModel serializeModel = JsonConvert.DeserializeObject<UserModel>(authTicket.UserData);

                CustomPrincipal newUser = new CustomPrincipal(authTicket.Name);
                newUser.Username = serializeModel.Username;
                newUser.Password = serializeModel.Password;
                newUser.Name = serializeModel.Name;
                newUser.UserId = serializeModel.UserId;
                newUser.ContactNo = serializeModel.ContactNo;
                newUser.Roles = serializeModel.Roles;

                HttpContext.Current.User = newUser;
            }
        }
    }
}
