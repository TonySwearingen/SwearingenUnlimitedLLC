class User < ApplicationRecord
  has_secure_password
  has_many :projects
  
  validates :username, presence: true, uniqueness: true, length: { minimum: 2}
  validates :password, length: { minimum:10, maximum:75}
end
