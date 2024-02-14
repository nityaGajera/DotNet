using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Branch.Dto;

namespace TestDemo.Branch
{
    public interface IBranchAppService : IApplicationService
    {
        List<BranchDto> getBranchData();
        Task CreateBranch(CreateBranchDto input);
        Task<BranchDto> getBranchbyid(EntityDto input);
        List<BindDepartmentDto> BindCategoryIds();



    }   
}
