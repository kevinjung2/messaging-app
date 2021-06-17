class Conversation < ApplicationRecord
  has_many :messages
  has_many :users, through: :messages

  validates_presence_of :name

  def messages
    Message.where("conversation_id = ? and content != ?", "#{self.id}", "INIT_MESSAGE")
  end
end
