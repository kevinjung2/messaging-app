class UserSerializer < ActiveModel::Serializer
  attributes :username, :profile_img, :followers, :id
  has_many :conversations
end
