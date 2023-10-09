using System;
namespace LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO
{
	public record ProvinceRequest
	{
        public ProvinceRequest(string regionCode)
        {
            RegionCode = regionCode;
        }

        public string RegionCode { get; init; }        
    }
}

