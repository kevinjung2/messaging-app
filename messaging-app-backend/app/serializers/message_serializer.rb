class MessageSerializer < ActiveModel::Serializer
  attributes :content, :id, :created_at_formatted, :user
  belongs_to :conversation
  belongs_to :user
end
