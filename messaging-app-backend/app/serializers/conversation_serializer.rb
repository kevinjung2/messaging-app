class ConversationSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :messages
  belongs_to :user
end
