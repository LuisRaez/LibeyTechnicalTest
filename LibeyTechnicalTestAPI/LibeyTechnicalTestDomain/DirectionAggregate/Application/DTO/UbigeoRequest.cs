using System;
namespace LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO
{
	public record UbigeoRequest
	{
        public UbigeoRequest(string provinceCode)
        {            
            ProvinceCode = provinceCode;
        }
        
        public string ProvinceCode { get; init; }
    }
}

