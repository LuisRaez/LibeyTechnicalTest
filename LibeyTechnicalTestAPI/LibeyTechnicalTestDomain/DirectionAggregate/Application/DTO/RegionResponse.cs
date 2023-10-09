using System;
namespace LibeyTechnicalTestDomain.DirectionAggregate.Application.DTO
{
	public record RegionResponse
	{
        public string RegionCode { get; init; }
        public string RegionDescription { get; init; }
    }
}

