﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Games;

namespace TestDemo.GameServices.Dto
{
    [AutoMapFrom(typeof(game))]
    public class GameDto : EntityDto
    {
       
        public virtual string Name { get; set; }
        public bool IsActive { get; set; }
        public virtual string Version { get; set; }

    }
}

