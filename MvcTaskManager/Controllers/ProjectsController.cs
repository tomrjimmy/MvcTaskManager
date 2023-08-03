using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Models;
using MvcTaskManager.ViewModel;

namespace MvcTaskManager.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("api/projects")]
        public List<ProjectViewModel> Get()
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            return (from p in db.Projects.ToList()
                    select new ProjectViewModel
                    {
                        ProjectId = p.ProjectId,
                        ProjectName = p.ProjectName,
                        StartDate = p.StartDate.ToString("yyyy-MM-dd"),
                        TeamSize = p.TeamSize
                    }).ToList();
        }

        [HttpPost]
        [Route("api/projects")]
        public Project Post([FromBody] Project project)
        {
            var db = new TaskManagerDbContext();
            db.Projects.Add(project);
            db.SaveChanges();
            return project;
        }

        [HttpPut]
        [Route("api/projects")]
        public ProjectViewModel Put([FromBody] Project project)
        {
            var db = new TaskManagerDbContext();
            var existingProject = db.Projects.FirstOrDefault(x => x.ProjectId == project.ProjectId);
            if (existingProject != null)
            {
                existingProject.ProjectId = project.ProjectId;
                existingProject.ProjectName = project.ProjectName;
                existingProject.StartDate = project.StartDate;
                existingProject.TeamSize = project.TeamSize;
            }
            db.Projects.Update(existingProject);
            db.SaveChanges();

            return new ProjectViewModel
            {
                ProjectId = project.ProjectId,
                ProjectName = project.ProjectName,
                StartDate = project.StartDate.ToString("yyyy-MM-dd"),
                TeamSize = project.TeamSize
            };
        }

        [HttpDelete]
        [Route("api/projects")]
        public int? Delete(int projectId)
        {
            var db = new TaskManagerDbContext();
            var existingProject = db.Projects.FirstOrDefault(x => x.ProjectId == projectId);
            if (existingProject != null)
            {
                db.Projects.Remove(existingProject);
                db.SaveChanges();
                return projectId;
            }
            return null;
        }

        [HttpGet]
        [Route("api/projects/search/{searchby}/{searchtext}")]
        public List<Project> Search(string searchBy, string searchText)
        {
            var db = new TaskManagerDbContext();
            List<Project> projects = null;
            if (searchBy == "ProjectId")
            {
                projects = db.Projects.Where(p => p.ProjectId.ToString().Contains(searchText)).ToList();
            }
            else if (searchBy == "ProjectName")
            {
                projects = db.Projects.Where(p => p.ProjectName.ToString().Contains(searchText)).ToList();
            }
            if (searchBy == "StartDate")
            {
                projects = db.Projects.Where(p => p.StartDate.ToString().Contains(searchText)).ToList();
            }
            if (searchBy == "TeamSize")
            {
                projects = db.Projects.Where(p => p.TeamSize.ToString().Contains(searchText)).ToList();
            }

            return projects;
        }
    }
}


