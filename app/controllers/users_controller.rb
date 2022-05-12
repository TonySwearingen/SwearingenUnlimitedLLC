class UsersController < ApplicationController

  def show
    if session[:user_id]
      render json: User.find(session[:user_id]), status: :ok
    else
      render json: {error: "Not logged in"}, status: :unauthorized
    end
  end
end
