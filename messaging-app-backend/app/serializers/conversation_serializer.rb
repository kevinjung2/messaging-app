class ConversationSerializer < ActiveModel::Serializer
  attributes :name
  has_many :messages
  belongs_to :user
end
