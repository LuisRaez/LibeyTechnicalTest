using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }
        public void Create(UserUpdateorCreateCommand command)
        {
            LibeyUser lUser = new LibeyUser(command.DocumentNumber,command.DocumentTypeId,command.Name,command.FathersLastName,
                command.MothersLastName,command.Address,command.UbigeoCode,command.Phone,command.Email,command.Password);               
            _repository.Create(lUser);
        }
        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var row = _repository.FindResponse(documentNumber);
            return row;
        }
        public List<LibeyUserResponse> FindAll()
        {
            return _repository.FindAll();
        }
    }
}