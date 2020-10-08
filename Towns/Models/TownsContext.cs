using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Towns.Models
{
    public class TownsContext : DbContext
    {
        public DbSet<Town> Towns { get; set; }

        public TownsContext(DbContextOptions<TownsContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
