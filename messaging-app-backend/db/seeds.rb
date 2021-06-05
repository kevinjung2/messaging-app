# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
  {username: "Aaron", password: "pass"},
  {username: "Brad", password: "pass"},
  {username: "Carl", password: "pass"},
  {username: "Derek", password: "pass"},
  {username: "Erin", password: "pass"},
  {username: "Frank", password: "pass"},
  {username: "Gavin", password: "pass"},
  {username: "Harold", password: "pass"},
  {username: "Ingrid", password: "pass"},
  {username: "Jarod", password: "pass"},
  {username: "Kevin", password: "pass"},
  {username: "Leonard", password: "pass"},
  {username: "Mark", password: "pass"},
  {username: "Noah", password: "pass"},
  {username: "Olivia", password: "pass"},
  {username: "Penelope", password: "pass"},
  {username: "Quenton", password: "pass"},
  {username: "Rachel", password: "pass"},
  {username: "Steven", password: "pass"},
  {username: "Thomas", password: "pass"},
  {username: "Urva", password: "pass"},
  {username: "Violet", password: "pass"},
  {username: "Wendy", password: "pass"},
  {username: "XxTenationxX", password: "pass"},
  {username: "Yorkshire", password: "pass"},
  {username: "Zenon", password: "pass"},
])

messages = Message.create([
  {content: "MESSAGE_INIT", user: User.find_by(username: "Aaron"), conversation: Conversation.create(name: "convo1")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Brad"), conversation: Conversation.find_by(name: "convo1")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Carl"), conversation: Conversation.find_by(name: "convo1")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Derek"), conversation: Conversation.find_by(name: "convo1")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Penelope"), conversation: Conversation.create(name: "convo2")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Quenton"), conversation: Conversation.find_by(name: "convo2")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Kevin"), conversation: Conversation.find_by(name: "convo2")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Noah"), conversation: Conversation.create(name: "convo3")},
  {content: "MESSAGE_INIT", user: User.find_by(username: "Jaron"), conversation: Conversation.find_by(name: "convo3")}
])
