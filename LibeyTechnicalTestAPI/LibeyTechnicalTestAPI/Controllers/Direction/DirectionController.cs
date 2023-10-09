
using LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LibeyTechnicalTestAPI.Controllers.Direction
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectionController : ControllerBase
    {
        private readonly IDirectionAggregate _aggregate;
        public DirectionController(IDirectionAggregate aggregate)
        {
            _aggregate = aggregate;
        }
        [HttpGet]
        [Route("/region")]
        public IActionResult FindRegion()
        {
            var row = _aggregate.FindRegion();
            return Ok(row);
        }
        [HttpGet]
        [Route("/provincia/{RegionCode}")]
        public IActionResult FindProvincia(string RegionCode)
        {
            ProvinceRequest provinciaRequest;
            provinciaRequest = new ProvinceRequest(RegionCode);
            var row = _aggregate.FindProvincia(provinciaRequest);
            return Ok(row);
        }
        [HttpGet]
        [Route("/distrito/{provinceCode}")]
        public IActionResult FindDistrito(string provinceCode)
        {
            UbigeoRequest ubigeoRequest;
            ubigeoRequest = new UbigeoRequest(provinceCode);
            var row = _aggregate.FindDistrito(ubigeoRequest);
            return Ok(row);

        }
    }
}
