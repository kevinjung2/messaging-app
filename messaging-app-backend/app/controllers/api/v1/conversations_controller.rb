class Api::V1::ConversationsController < ApplicationController
  def index
    conversations = current_user.conversations.map { |conversation| ConversationSerializer.new(conversation) }
    render json: { conversations: conversations }
  end

  def show
    conversation = Conversation.find_by(id: params[:id])
    render json: { conversation: ConversationSerializer.new(conversation) }
  end

  def create
    new_convo = Conversation.create(name: params[:conversation][:name])
    users = params[:conversation][:user_ids].map { |user_id| User.find_by(id: user_id)}
    users.each do | user |
      Message.create(content: "INIT_MESSAGE", user: user, conversation: new_convo)
    end
  end
end
