class MessageSerializer < ActiveModel::Serializer
  attributes :content
  belongs_to :conversation
end
