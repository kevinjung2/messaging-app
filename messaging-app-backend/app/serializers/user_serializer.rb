class UserSerializer < ActiveModel::Serializer
  attributes :username, :profile_pic, include: [:conversations, :followers]
end
