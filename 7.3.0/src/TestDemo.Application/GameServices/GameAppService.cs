using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDemo.Games;
using TestDemo.GameServices.Dto;

namespace TestDemo.GameServices
{
    public class GameAppService : TestDemoApplicationModule, IGameAppService
    {
        private readonly IRepository<game> _GameRepository;

        public GameAppService(IRepository<game> GameRepository)
        {
            _GameRepository = GameRepository;
        }

        //public IRepository<Game> GameRepository { get; }
        public List<GameDto> GetGameData()
        {
            var Game = (from a in _GameRepository.GetAll()
                        select new GameDto
                        {
                            Id = a.Id,
                            Name = a.Name,
                            Version = a.Version,
                            IsActive = a.IsActive,
                        }).ToList();
            return Game;
        }

        public async Task CreateGame(CreateGameDto input)
        {
            var Game = input.MapTo<game>();
            await _GameRepository.InsertAsync(Game);
        }

        public async Task<GameDto> getGamebyid(EntityDto input)
        {
            await _GameRepository.GetAsync(input.Id);
            var Games = (from a in _GameRepository.GetAll()
                         where a.Id == input.Id
                         select new GameDto
                         {
                             Id = a.Id,
                             Name = a.Name,
                             Version = a.Version,
                             IsActive = a.IsActive,
                         }).FirstOrDefault();
            return Games;
        }
        public async Task UpdateGame(CreateGameDto input)
        {
            var Games = await _GameRepository.GetAsync(input.Id);
            Games.Name = input.Name;
            Games.Version = input.Version;
            Games.IsActive = input.IsActive;
            await _GameRepository.UpdateAsync(Games);
        }
        public async Task DeleteGame(EntityDto input)
        {
            await _GameRepository.DeleteAsync(input.Id);
        }

    }

}

