using System;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO;

namespace LibeyTechnicalTestDomain.DirectionAggregate.Application.Interfaces
{
	public interface IDirectionAggregate	
    {
        List<RegionResponse> FindRegion();
        List<ProvinceResponse> FindProvincia(ProvinceRequest provinciaRequest);
        List<UbigeoResponse> FindDistrito(UbigeoRequest ubigeoRequest);
    }
}

