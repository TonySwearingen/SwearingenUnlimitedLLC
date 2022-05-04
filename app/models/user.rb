class User < ApplicationRecord
  has_secure_password
  has_many :projects
  
  validates :username, presence: true, uniqueness: true, length: { minimum: 2}
end
