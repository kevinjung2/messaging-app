class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(@user) }, status: :accepted
  end

  def friends

  end

  def create
    @user = User.find_by(username: user_params[:username])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def update
    if current_user.update(user_params)
      render json: { message: "Successfully updated #{current_user.username}" }
    else
      render json: { message: 'A problem occured during the update' }
    end
  end

  def destroy
    user = current_user
    if current_user.destroy
      render json: { message: "Successfully updated #{user.username}" }
    else
      render json: { message: "A problem occured trying to delete #{user.username}" }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :profile_img)
  end

end
