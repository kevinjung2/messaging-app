class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user

  validates :content, presence: true

  def created_at_formatted
    self.created_at.strftime(" %b %d, %y - %l:%M %P ")
  end
end
