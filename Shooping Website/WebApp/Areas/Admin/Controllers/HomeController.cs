using BAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Areas.Admin.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(IUnitOfWork _uof) : base(_uof)
        {

        }
        // GET: Admin/Home
        public ActionResult Index()
        {
            //string name = CurrentUser.Name;
            return View();
        }
    }
}