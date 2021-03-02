using Microsoft.EntityFrameworkCore;

namespace Towns.Models
{
    public class TownsContext : DbContext
    {
        public TownsContext(DbContextOptions<TownsContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Town> Towns { get; set; }
        public DbSet<Town> Countries { get; set; }
    }
}
