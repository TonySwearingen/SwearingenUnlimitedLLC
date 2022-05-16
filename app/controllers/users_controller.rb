class UsersController < ApplicationController
  skip_before_action :authorize, only: :show

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def me
      render json: current_user, status: :ok
  end

  private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end
end
