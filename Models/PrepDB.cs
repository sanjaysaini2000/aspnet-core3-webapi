using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApi.Models
{
    public static class PrepDB
    {
        public static void InitDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                CreateDb(serviceScope.ServiceProvider.GetService<BookStoreDbContext>());

            }

        }

        static void CreateDb(BookStoreDbContext context)
        {
            System.Console.WriteLine("Apply init migration...");
            context.Database.Migrate();
            if (!context.BookItems.Any())
            {
                System.Console.WriteLine("Adding initial data...");
                context.BookItems.AddRange(
                   new BookItem { Title = "Book1", Author = "Amit", Publisher = "Westland", Genre = "History", Price = 12 },
                   new BookItem { Title = "Book2", Author = "Sanjay", Publisher = "Westland", Genre = "Fiction", Price = 14 }
                );
                context.SaveChanges();

            }
            else
            {
                System.Console.WriteLine("DB already populated...");

            }

        }

    }
}