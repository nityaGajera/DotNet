using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestDemo.Department.Dto;
using TestDemo.DepartmentServices;
using Abp.AutoMapper;
using TestDemo.Games;

namespace TestDemo.Department
{
    public class DepartmentAppService : TestDemoApplicationModule, IDepartmentAppService
    {

        private readonly IRepository<department> _DepartmentRepository;

        public DepartmentAppService(IRepository<department> DepartmentRepository)
        {
            _DepartmentRepository = DepartmentRepository;
        }
        public List<DepartmentDto> GetDepartmentData()
        {
            var Department = (from a in _DepartmentRepository.GetAll()
                              select new DepartmentDto
                              {
                                  Id = a.Id,
                                  Name = a.Name,
                              })
                        .ToList();

            return Department;
        }
        public async Task CreateDepartment(CreateDepartmentDto input)
        {
            var Department = input.MapTo<department>();
            await _DepartmentRepository.InsertAsync(Department);
        }

        public async Task<DepartmentDto> getDepartmentbyid(EntityDto input)
        {
            await _DepartmentRepository.GetAsync(input.Id);
            var Department = (from a in _DepartmentRepository.GetAll()
                              where a.Id == input.Id
                              select new DepartmentDto
                              {
                                  Id = a.Id,
                                  Name = a.Name,
                              }).FirstOrDefault();
            return Department;
        }
        public async Task UpdateDepartment(CreateDepartmentDto input)
        {
            var Department = await _DepartmentRepository.GetAsync(input.Id);
            Department.Name = input.Name;
            await _DepartmentRepository.UpdateAsync(Department);
        }


        public async Task DeleteDepartment(EntityDto input)
        {
            await _DepartmentRepository.DeleteAsync(input.Id);
        }

    }
}
