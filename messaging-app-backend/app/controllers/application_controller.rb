class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    #need to move this secret key into .env at some point!!!
    JWT.encode(payload, 'rCCKFUCUk45wHY5f6eEUwEkhgbERybvSkOAPBVn-7qZPhDUAkUjZDwSFH5Y3aMohiQCp-2bwCnO4mb6nnHgiAg')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header()
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'rCCKFUCUk45wHY5f6eEUwEkhgbERybvSkOAPBVn-7qZPhDUAkUjZDwSFH5Y3aMohiQCp-2bwCnO4mb6nnHgiAg', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token()
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    else
      nil
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
