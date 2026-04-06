using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductAPIController : ControllerBase
    {
        static List<Product> products = new();

        [HttpGet("getall")]
        public IActionResult GetProducts()
        {
            //get data from db
            return Ok(products);
        }

        [HttpPost("add")]
        public IActionResult AddProducts(Product product)
        {
            products.Add(product);
            return StatusCode(StatusCodes.Status201Created, true);
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var productToDelete = products.FirstOrDefault(d => d.ProductId == id);
            if(productToDelete != null)
            {
                products.Remove(productToDelete);
                return StatusCode(StatusCodes.Status200OK, true);
            }
            return StatusCode(StatusCodes.Status204NoContent, false);
        }

        [HttpGet("get/{id}")]
        public IActionResult GetProductById(int id)
        {
            var productToEdit = products.FirstOrDefault(p => p.ProductId == id);
            return Ok(productToEdit);
        }
    }
}
