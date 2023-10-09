using System;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.EFCore;

namespace LibeyTechnicalTestDomain.DirectionAggregate.Infrastructure
{
    public class DirectionRepository : IDirectionRepository
    {
        private readonly Context _context;
        public DirectionRepository(Context context)
        {
            _context = context;
        }

        public List<UbigeoResponse> FindDistrito(UbigeoRequest ubigeoRequest)
        {
            return (from x in _context.Ubigeo.Where(x => x.ProvinceCode.Equals(ubigeoRequest.ProvinceCode))
                    select new UbigeoResponse()
                    {
                        RegionCode = x.RegionCode,
                        ProvinceCode = x.ProvinceCode,
                        UbigeoCode = x.UbigeoCode,
                        UbigeoDescription = x.UbigeoDescription                        
                    }).ToList();
        }

        public List<ProvinceResponse> FindProvincia(ProvinceRequest provinciaRequest)
        {
            return (from x in _context.Province.Where(x => x.RegionCode.Equals(provinciaRequest.RegionCode))
                    select new ProvinceResponse()
                    {
                        RegionCode = x.RegionCode,
                        ProvinceCode = x.ProvinceCode,
                        ProvinceDescription = x.ProvinceDescription
                    }).ToList();
        }

        public List<RegionResponse> FindRegion()
        {
            return (from x in _context.Region
                    select new RegionResponse()
                    {
                        RegionCode = x.RegionCode,
                        RegionDescription = x.RegionDescription
                    }).ToList();
        }
    }
}

