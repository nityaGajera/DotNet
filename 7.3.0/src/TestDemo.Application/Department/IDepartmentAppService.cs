using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestDemo.Department.Dto;

namespace TestDemo.DepartmentServices
{
    public interface IDepartmentAppService : IApplicationService
    {
        List<DepartmentDto> GetDepartmentData();
        Task CreateDepartment(CreateDepartmentDto input);
        Task <DepartmentDto> getDepartmentbyid(EntityDto input);
        Task UpdateDepartment(CreateDepartmentDto input);
        Task DeleteDepartment(EntityDto input);

    }
}