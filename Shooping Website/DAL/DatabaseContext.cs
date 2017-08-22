using DomainModels.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace DAL
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(): base("DefaultConnection")
        {
            
        }

        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //remove it on all tables
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            //m:m
            modelBuilder.Entity<User>().HasMany(u => u.Roles).WithMany(r => r.Users).Map(m =>
            {
                m.MapLeftKey("UserId");
                m.MapRightKey("RoleId");
                m.ToTable("UserRoles");
            });

            //fk , cascade delete
            //modelBuilder.Entity<Order>().HasRequired(o => o.User).WithMany(u => u.Orders).HasForeignKey(o => o.UserId).WillCascadeOnDelete(false);
        }
    }
}
