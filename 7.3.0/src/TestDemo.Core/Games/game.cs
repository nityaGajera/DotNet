using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDemo.Games
{
    [Table("Game")]
    public class game : FullAuditedEntity
    {
        public virtual bool IsActive { get; set; }
        public virtual string Name { get; set; }
        public virtual string Version { get; set; }
    }

}
