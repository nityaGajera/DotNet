using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using Abp.Application.Services.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Games;

namespace TestDemo.Department.Dto
{
    [AutoMapTo(typeof(department))]
    public class CreateDepartmentDto : EntityDto
    {
        public virtual string Name { get; set; }
    }
}
