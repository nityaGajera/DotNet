namespace TestDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ccc : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Branch", "Name", c => c.String());
            DropColumn("dbo.Branch", "BranchName");
            DropColumn("dbo.Branch", "DepartmentId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Branch", "DepartmentId", c => c.Int(nullable: false));
            AddColumn("dbo.Branch", "BranchName", c => c.Int(nullable: false));
            DropColumn("dbo.Branch", "Name");
        }
    }
}
