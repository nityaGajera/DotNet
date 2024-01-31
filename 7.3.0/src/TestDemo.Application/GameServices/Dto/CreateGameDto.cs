using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Games;

namespace TestDemo.GameServices.Dto
{
    [AutoMapTo(typeof(game))]
    public class CreateGameDto : EntityDto
    {
        public virtual string Name { get; set; }
        public bool IsActive { get; set; }
    }
}
