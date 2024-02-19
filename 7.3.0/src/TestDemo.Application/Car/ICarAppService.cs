using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Car.Dto;

namespace TestDemo.Car
{
    public interface ICarAppService : IApplicationService
    {
        List<CarDto> GetCarData();
        Task CreateCar(CreateCarDto input);
        Task<CarDto> getCarbyid(EntityDto input);
        Task UpdateCar(CreateCarDto input);
        Task DeleteCar(EntityDto input);
    }
}
