class User < ApplicationRecord
  has_secure_password

  has_many :messages
  has_many :conversations, through: :messages

  #sets up self reference through Friendship model
  has_many :followers, foreign_key: :follower_id , class_name: "Friendship"
  has_many :followed, through: :followers
  has_many :followed, foreign_key: :followed_id, class_name: "Friendship"
  has_many :followers, through: :followed

  #validations
  validates_presence_of :username, :password
  validates :password, uniqueness: true
end
