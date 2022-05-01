User.destroy_all
Project.destroy_all
Guest.destroy_all
puts "Destroyed all 🗑"

puts "Creating Users 🤩"
u1 = User.create(name: 'Tony',username: 'Tony', email: 'unlimitedtony@gmail.com', password: '1234Tony@', password_confirmation: '1234Tony@', manager: true)
u2 = User.create(name: 'Nicki', username: 'Nicki', email: 'chaoticchondro@gmail.com', password: '1234Nicki@', password_confirmation: '1234Nicki@', manager: false)
u3 = User.create(name: 'Freedom',username: 'Freedom', email: '', password: '1234Freedom@', password_confirmation: '1234Freedom@', manager: true)
u4 = User.create(name: 'Autumn', username: 'Autumn', email: '', password: '1234Autumn@', password_confirmation: '1234Autumn@', manager: false)
u5 = User.create(name: 'TJ', username: 'TJ', email: '', password: '1234TJ@@', password_confirmation: '1234TJ@@', manager: false)

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