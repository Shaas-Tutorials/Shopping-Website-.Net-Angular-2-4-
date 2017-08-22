namespace DAL.Migrations
{
    using DomainModels.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DAL.DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DAL.DatabaseContext context)
        {
            Role r1 = new Role { Name = "Admin", Description = "Administrator" };
            Role r2 = new Role { Name = "User", Description = "End User" };

            User u1 = new User { Username = "admin@gmail.com", Name = "Admin", Address = "Noida", Password = "123456", ContactNo = "9876543210" };
            User u2 = new User { Username = "user@gmail.com", Name = "User", Address = "Noida", Password = "123456", ContactNo = "9876543210" };

            u1.Roles.Add(r1);
            u2.Roles.Add(r2);

            context.Users.Add(u1);
            context.Users.Add(u2);
        }
    }
}
