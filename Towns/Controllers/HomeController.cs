using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Towns.Models;

namespace Towns.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        private TownsContext db;
        public HomeController(TownsContext context)
        {
            db = context;
        }
        public async Task<IActionResult> Town()
        {
            return View(await db.Towns.ToListAsync());
        }


       [HttpGet]
        public Dictionary<int, string> GetTown()
        {
            List<Town> towns = db.Towns.ToList();
            var list = new Dictionary<int, string> { { 1111111, "a" }, { 22222222, "b" } };
            foreach (Town town in towns)
            {

                list.Add(town.Id, town.Name);
            }

            return list;
        }
        





        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
