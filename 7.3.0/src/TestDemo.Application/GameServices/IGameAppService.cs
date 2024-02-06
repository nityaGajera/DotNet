using Abp.Application.Services.Dto;
using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.GameServices.Dto;

namespace TestDemo.GameServices
{
    public interface IGameAppService : IApplicationService
    {
        Task<GameDto> getGamebyid(EntityDto input);
        List<GameDto> GetGameData(string search);
        Task CreateGame(CreateGameDto input);
        Task DeleteGame(EntityDto input);
        Task UpdateGame(CreateGameDto input);
    }
}
