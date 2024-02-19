using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDemo.Car
{
    [Table("Car")]
    public class car : FullAuditedEntity
    {

        public virtual string Name { get; set; }

        public virtual int Id { get; set; }

    }
}
