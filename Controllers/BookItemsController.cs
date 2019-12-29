using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStoreApi.Models;

namespace BookStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookItemsController : ControllerBase
    {
        private readonly BookStoreDbContext _context;

        public BookItemsController(BookStoreDbContext context)
        {
            _context = context;
        }

        // GET: api/BookItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookItem>>> GetBookItems()
        {
            return await _context.BookItems.ToListAsync();
        }

        // GET: api/BookItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookItem>> GetBookItem(int id)
        {
            var bookItem = await _context.BookItems.FindAsync(id);

            if (bookItem == null)
            {
                return NotFound();
            }

            return bookItem;
        }

        // PUT: api/BookItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookItem(int id, BookItem bookItem)
        {
            if (id != bookItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BookItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<BookItem>> PostBookItem(BookItem bookItem)
        {
            _context.BookItems.Add(bookItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookItem", new { id = bookItem.Id }, bookItem);
        }

        // DELETE: api/BookItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BookItem>> DeleteBookItem(int id)
        {
            var bookItem = await _context.BookItems.FindAsync(id);
            if (bookItem == null)
            {
                return NotFound();
            }

            _context.BookItems.Remove(bookItem);
            await _context.SaveChangesAsync();

            return bookItem;
        }

        private bool BookItemExists(int id)
        {
            return _context.BookItems.Any(e => e.Id == id);
        }
    }
}
