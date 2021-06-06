class MessageSerializer < ActiveModel::Serializer
  attributes :content, :id
  belongs_to :conversation
end
