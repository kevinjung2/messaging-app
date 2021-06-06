class Api::V1::MessagesController < ApplicationController
  def create
    Message.create(content: message_params[:content], conversation: Conversation.find_by(id: message_params[:conversation_id]), user: current_user)
  end

  def update
    Messsage.find_by(id: message_params[:id]).update(content: message_params[:content])
  end

  def destroy
    Messsage.find_by(id: message_params[:id]).destroy
  end

  private

  def message_params
    params.require(:message).permit(:content, :conversation_id, :id)
  end
end
