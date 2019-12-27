using Microsoft.EntityFrameworkCore;

namespace BookStoreApi.Models
{
    public class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options) : base(options)
        { }

        public DbSet<BookItem> BookItems { get; set; }

    }

}
