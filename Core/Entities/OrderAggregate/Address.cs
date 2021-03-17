namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastName, string street, string suburb, string city, string postcode)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
            Suburb = suburb;
            City = city;
            Postcode = postcode;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string Suburb { get; set; }
        public string City { get; set; }
        public string Postcode { get; set; }
    }
}