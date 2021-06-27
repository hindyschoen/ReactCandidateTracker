using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidateTracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");

        }
        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

       [HttpGet]
       [Route("GetCandidates")]
       public List<Candidate> GetCandidates(Status status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(status);

        }
        [HttpGet]
        [Route("GetCandidateById")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateById(id);

        }

        [HttpPost]
        [Route("Update")]
        public void Update(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.UpdateCandidateStatus(candidate);
        }
        [HttpGet]
        [Route("TotalCandidates")]
        public List<int> TotalCandidates()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.TotalCandidates();

        }



    }
}
