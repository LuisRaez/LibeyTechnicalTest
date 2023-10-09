using System;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.Interfaces;

namespace LibeyTechnicalTestDomain.DirectionAggregate.Application
{
    public class DirectionAggregate : IDirectionAggregate
    {
        private readonly IDirectionRepository _repository;
        public DirectionAggregate(IDirectionRepository repository)
        {
            _repository = repository;
        }

        public List<UbigeoResponse> FindDistrito(UbigeoRequest ubigeoRequest)
        {
            return _repository.FindDistrito(ubigeoRequest);
        }

        public List<ProvinceResponse> FindProvincia(ProvinceRequest provinciaRequest)
        {
            return _repository.FindProvincia(provinciaRequest);
        }

        public List<RegionResponse> FindRegion()
        {
            return _repository.FindRegion();
        }
    }
    
}

