using System.Linq;
using Towns.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Towns.Controllers
{
    public class GameController : Controller
    {
        #region private

        private readonly TownsContext db;

        #endregion

        public IActionResult Game()
        {
            return View();
        }

        public GameController(TownsContext context)
        {
            db = context;
        }

        public async Task<IActionResult> Town()
        {
            return View(await db.Towns.ToListAsync());
        }

       [HttpGet]
        public Dictionary<char, string> GetTown()
        {
            List<Town> towns = db.Towns.ToList();
            var list = new Dictionary<char, string>();
            foreach (Town town in towns)
            {
                list.Add(town.Name[0], town.Name);
            }
            return list;
        }
    }
}
