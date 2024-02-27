using Microsoft.EntityFrameworkCore;
using ApiSmartphones.Models;

namespace ApiSmartphones.Context;
public class SmartphoneDbContext : DbContext
{
    public SmartphoneDbContext(DbContextOptions<SmartphoneDbContext> options) : base(options)
    {

    }

    public DbSet<Cliente>Clientes { get; set; }
    public DbSet<Marca> Marcas { get; set; }
    public DbSet<Vendedor> Vendedores { get; set; }
}
