using Core.Entities;

namespace Entities.Dtos
{
    public class UpdateLanguageDto : IDto
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}