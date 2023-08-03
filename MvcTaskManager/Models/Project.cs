using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MvcTaskManager.Models
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [JsonPropertyName("projectId")]
        public int ProjectId { get; set; }
        [JsonPropertyName("projectName")]
        public string ProjectName { get; set; }
        [JsonPropertyName("startDate")]
        [DisplayFormat(DataFormatString = "d/M/yyyy")]
        public DateTime StartDate { get; set; }
        [JsonPropertyName("teamSize")]
        public int TeamSize { get; set; }
    }

    public class TaskManagerDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(@"Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=TaskManager;Data Source=IMAC\SQLEXPRESS");
        }
    }
}


