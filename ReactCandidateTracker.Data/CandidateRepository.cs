using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidates(Status status)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidateStatus(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.Candidates.Attach(candidate);
            context.Entry(candidate).State = EntityState.Modified;
            context.SaveChanges();
        }

       public List<int>TotalCandidates()
        {
            var context = new CandidateDataContext(_connectionString);
            var list = new List<int>();
            list.Add(context.Candidates.Where(c => c.Status == Status.Pending).Count());
            list.Add(context.Candidates.Where(c => c.Status == Status.Confirmed).Count());
            list.Add(context.Candidates.Where(c => c.Status == Status.Refused).Count());
            return list;
        }


    }
}
