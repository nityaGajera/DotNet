using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Department.Dto;
using TestDemo.Department;
using TestDemo.DepartmentServices;
using TestDemo.Car.Dto;
using Abp.AutoMapper;

namespace TestDemo.Car
{
    public class CarAppService : TestDemoApplicationModule, ICarAppService
    {

        private readonly IRepository<car> _CarRepository;

        public CarAppService(IRepository<car> CarRepository)
        {
            _CarRepository = CarRepository;
        }
        public List<CarDto> GetCarData()
        {
            var Car = (from a in _CarRepository.GetAll()
                       select new CarDto
                        {
                            Id = a.Id,
                            Name = a.Name,
                        }).ToList();

            return Car;
        }
        public async Task CreateCar(CreateCarDto input)
        {
            var Car = input.MapTo<car>();
            await _CarRepository.InsertAsync(Car);
        }

        public async Task<CarDto> getCarbyid(EntityDto input)
        {
            await _CarRepository.GetAsync(input.Id);
            var Car = (from a in _CarRepository.GetAll()
                              where a.Id == input.Id
                              select new CarDto
                              {
                                  Id = a.Id,
                                  Name = a.Name,
                              }).FirstOrDefault();
            return Car;
        }
        public async Task UpdateCar(CreateCarDto input)
        {
            var Car = await _CarRepository.GetAsync(input.Id);
            Car.Name = input.Name;
            await _CarRepository.UpdateAsync(Car);
        }


        public async Task DeleteCar(EntityDto input)
        {
            await _CarRepository.DeleteAsync(input.Id);
        }

    }
}
