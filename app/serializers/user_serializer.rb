class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_secure_password :true
  has_many :projects
end
