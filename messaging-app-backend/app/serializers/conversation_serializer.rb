class ConversationSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :messages
  has_many :users
end
