using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
namespace WebApp.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/Scripts/jquery-1.10.2.js", "~/Scripts/jquery.validate.js", "~/Scripts/jquery.validate.unobtrusive.js", "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/css/site").Include("~/Content/Site.css", "~/Content/bootstrap.css"));
        }
    }
}