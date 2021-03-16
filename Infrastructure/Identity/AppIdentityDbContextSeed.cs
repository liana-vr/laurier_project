using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Liana",
                    Email = "liana@test.com",
                    UserName = "liana@test.com",
                    Address = new Address
                    {
                        FirstName = "Liana",
                        LastName = "van Rensburg",
                        Street = "10 The Street",
                        Suburb = "Mission Bay",
                        City = "Auckland",
                        Postcode = "1744"
                    }

                };

                await userManager.CreateAsync(user, "Ps$$w0rd");
            } 
        }
    }
}