User.destroy_all
Project.destroy_all
Guest.destroy_all
puts "Destroyed all 🗑"

puts "Creating Users 🤩"
u1 = User.create(name: 'Tony')
u2 = User.create(name: 'Nicki')
u3 = User.create(name: 'Freedom')
u4 = User.create(name: 'Autumn')
u5 = User.create(name: 'TJ')

puts "Creating Projects 📝"
Project.create(name: 'Swearingen Unlimited LLC', date: "4/26/2022", user_id: u1.id)
Project.create(name: 'Houses', date: "4/26/2022", user_id: u2.id)
Project.create(name: 'Dogs', date: "4/26/2022", user_id: u3.id)
Project.create(name: 'Cats', date: "4/26/2022", user_id: u4.id)
Project.create(name: 'Snakes', date: "4/26/2022", user_id: u5.id)

puts "Creating Guests 🥳"
Guest.create(name: 'Antonio')
Guest.create(name: 'Molly')
Guest.create(name: 'Stephen')
Guest.create(name: 'Chloe')
Guest.create(name: 'Justin')
Guest.create(name: 'Elizabeth')
Guest.create(name: 'Tyler')
Guest.create(name: 'Vi')
Guest.create(name: 'Alex')
Guest.create(name: 'Jane')

puts "Done Seeding 🌱"