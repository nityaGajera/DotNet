using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDemo.Branch
{
    [Table("Branch")]
    public class branch : FullAuditedEntity
    {
        public virtual string Name { get; set; }
    }
}
