using LibeyTechnicalTestDomain.DirectionAggregate.Application;
using LibeyTechnicalTestDomain.DirectionAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.DirectionAggregate.Infrastructure;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Infrastructure;
namespace LibeyTechnicalTestAPI.Middleware
{
    public static class DIExtensions
    {
        public static IServiceCollection AddConfigurations(this IServiceCollection services)
        {
            services.AddTransient<ILibeyUserAggregate, LibeyUserAggregate>();
            services.AddTransient<ILibeyUserRepository, LibeyUserRepository>();

            services.AddTransient<IDirectionAggregate, DirectionAggregate>();
            services.AddTransient<IDirectionRepository, DirectionRepository>();
            return services;
        }
    }
}
