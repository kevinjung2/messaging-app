class UserSerializer < ActiveModel::Serializer
  attributes :username, :profile_img, :followers
  has_many :conversations
end
