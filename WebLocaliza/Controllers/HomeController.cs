using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebLocaliza.Models;

namespace WebLocaliza.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(Coordenadas cor)
        {
            Coordenadas coord = new Coordenadas();
            ViewBag.map = cor;
            return View();
        }

        [HttpPost]
        public ActionResult Pesquisa(Coordenadas coord)
        {
            ViewBag.map = coord;
            return RedirectToAction("Index",coord);
        }
    }
}