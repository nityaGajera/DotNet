﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Department;

namespace TestDemo.Car.Dto
{
    [AutoMapTo(typeof(car))]
    public class CreateCarDto : EntityDto
    {
        public virtual string Name { get; set; }
    }
}