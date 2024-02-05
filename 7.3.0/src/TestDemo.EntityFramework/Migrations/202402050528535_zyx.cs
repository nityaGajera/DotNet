namespace TestDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class zyx : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Game", "Version", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Game", "Version");
        }
    }
}
