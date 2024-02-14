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
using TestDemo.Branch.Dto;
using Abp.AutoMapper;

namespace TestDemo.Branch
{
    public class BranchAppService : TestDemoApplicationModule, IBranchAppService
    {
        private readonly IRepository<branch> _BranchRepository;
        private readonly IRepository<department> _DepartmentRepository;

        public BranchAppService(IRepository<branch> BranchRepository, IRepository<department> DepartmentRepository)
        {
            _BranchRepository =  BranchRepository;
            _DepartmentRepository = DepartmentRepository;
        }
        public List<BranchDto> getBranchData()
        {
            var Branch = (from a in _BranchRepository.GetAll()
                              select new BranchDto
                              {
                                  Id = a.Id,
                                  Name = a.Name,
                              })
                              .ToList();

            return Branch;
        }
        public async Task CreateBranch(CreateBranchDto input)
        {
            var Branch = input.MapTo<branch>();
            await _BranchRepository.InsertAsync(Branch);
        }

        public async Task<BranchDto> getBranchbyid(EntityDto input)
        {
            await _BranchRepository.GetAsync(input.Id);
            var Branch = (from a in _BranchRepository.GetAll()
                              where a.Id == input.Id
                              select new BranchDto
                              {
                                  Id = a.Id,
                                  Name = a.Name,
                              }).FirstOrDefault();
            return Branch;
        }

        public List<BindDepartmentDto> BindCategoryIds()
        {
            var CatIds = (from c in _DepartmentRepository.GetAll()
                          select new BindDepartmentDto
                          {
                              Id = c.Id,
                              Name = c.Name,
                          }).ToList();
            return CatIds;
        }
    }
}
