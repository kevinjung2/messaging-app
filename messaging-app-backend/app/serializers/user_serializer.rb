class UserSerializer < ActiveModel::Serializer
  attributes :username, :profile_img, :id
  has_many :conversations
end
