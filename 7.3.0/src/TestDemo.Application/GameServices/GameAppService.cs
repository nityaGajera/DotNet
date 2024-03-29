﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestDemo.Games;
using TestDemo.GameServices.Dto;

namespace TestDemo.GameServices
{
    public class GameAppService : TestDemoApplicationModule, IGameAppService
    {
        private readonly IRepository<game> _GameRepository;
        private object _Gamerepository;

        public GameAppService(IRepository<game> GameRepository)
        {
            _GameRepository = GameRepository;
        }

        //public IRepository<Game> GameRepository { get; }
        public List<GameDto> GetGameData(string search)
        {
            var Game = (from a in _GameRepository.GetAll()
                        select new GameDto
                        {
                            Id = a.Id,
                            Name = a.Name,
                            Version = a.Version,
                            IsActive = a.IsActive,
                        })
                        .WhereIf(!search.IsNullOrEmpty(), x => x.Name.Contains(search))
                        .ToList();

            return Game;
        }
        public List<GameDto> GetPermissionData()
        {
            var Game = (from a in _GameRepository.GetAll()
                        select new GameDto
                        {
                            Id = a.Id,
                            Name = a.Name,
                        })
                        .ToList();
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
        //public async Task GetActiveStatus(CreateGameDto input)
        //{
        //    var games = await _GameRepository.GetAsync(input.Id);
        //    if (games.IsActive == true)
        //    {
        //        var active = _GameRepository.GetAll().Where(x => x.IsActive == false).ToList();
        //    }
        //    else
        //    {
        //        var inActive = _GameRepository.GetAll().Where(x => x.IsActive == true).ToList();
        //    }
        //}
        public async Task ChangeStatus(EntityDto input)
        {
            var games = await _GameRepository.GetAsync(input.Id);
            games.IsActive = !games.IsActive;
            await _GameRepository.UpdateAsync(games);
        }
        public async Task DeleteGame(EntityDto input)
        {
            await _GameRepository.DeleteAsync(input.Id);
        }
    }

}