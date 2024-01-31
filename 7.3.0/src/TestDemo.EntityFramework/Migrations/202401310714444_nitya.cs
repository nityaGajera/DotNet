namespace TestDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class nitya : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Game", "IsActive", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Game", "IsActive");
        }
    }
}
