using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MvcTaskManager.ViewModel
{
    public class ProjectViewModel
    {
        [JsonPropertyName("projectId")]
        public int ProjectId { get; set; }
        [JsonPropertyName("projectName")]
        public string ProjectName { get; set; }
        [JsonPropertyName("startDate")]
        [DisplayFormat(DataFormatString = "d/M/yyyy")]
        public string StartDate { get; set; }
        [JsonPropertyName("teamSize")]
        public int TeamSize { get; set; }
    }
}
