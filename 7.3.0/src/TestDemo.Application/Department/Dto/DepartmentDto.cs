﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Games;

namespace TestDemo.Department.Dto
{
    [AutoMapFrom(typeof(department))]
    public class DepartmentDto : EntityDto
    {

        public virtual string Name { get; set; }
    }
}
