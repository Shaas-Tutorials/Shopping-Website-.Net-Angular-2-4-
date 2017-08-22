using BAL;
using DomainModels.Entities;
using DomainModels.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace WebApp.Controllers
{
    public class AccountController : BaseController
    {
        public AccountController(IUnitOfWork _uof) : base(_uof)
        {

        }
        // GET: Account
        public ActionResult Login()
        {
            //elmah error logging
            //try
            //{
            //    int a = 2, b = 0;
            //    int c = a / b;
            //}
            //catch (Exception ex)
            //{
            //    Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
            //}

            if (CurrentUser != null)
            {
                if (CurrentUser.Roles.Contains("Admin"))
                {
                    return RedirectToAction("Index", "Home", new { area = "Admin" });
                }
                else if (CurrentUser.Roles.Contains("User"))
                {
                    return RedirectToAction("Index", "Home", new { area = "User" });
                }
            }
            return View();
        }

        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login");
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            //User user = uof.AuthenticateRepo.ValidateUser(model.Username, model.Password);
            UserModel user = uof.AuthenticateRepo.ValidateUser(model.Username, model.Password);
            if (user != null)
            {
                string data = JsonConvert.SerializeObject(user);

                FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1, user.Username, DateTime.Now, DateTime.Now.AddMinutes(60), false, data);
                string encTicket = FormsAuthentication.Encrypt(ticket);

                HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encTicket);
                Response.Cookies.Add(cookie);

                //if (user.Roles.Any(r => r.Name == "Admin"))
                if (user.Roles.Contains("Admin"))
                {
                    return RedirectToAction("Index", "Home", new { area = "Admin" });
                }
                // else if (user.Roles.Any(r => r.Name == "User"))
                else if (user.Roles.Contains("User"))
                {
                    return RedirectToAction("Index", "Home", new { area = "User" });
                }
            }
            return View();
        }

        public ActionResult UnAuthorize()
        {
            return View();
        }
    }
}