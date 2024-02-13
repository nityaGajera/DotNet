using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDemo.Department
{
    [Table("Department")]
    public class department : FullAuditedEntity
    {
        public virtual string Name { get; set; }
    }
}
