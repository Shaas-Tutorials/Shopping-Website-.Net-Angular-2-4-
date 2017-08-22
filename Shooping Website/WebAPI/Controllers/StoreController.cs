using BAL;
using DomainModels.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI.Security;

namespace WebAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class StoreController : ApiController
    {
        IUnitOfWork uof;
        public StoreController(IUnitOfWork _uof)
        {
            uof = _uof;
        }

       // [CustomAuthorizeFilter(Roles ="User")]
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var data= uof.ProductRepo.GetAll();
            return data;
        }

        [HttpPost]
        public int SaveCart(Cart model)
        {
            return uof.OrderRepo.SaveCart(model);
        }
    }
}
