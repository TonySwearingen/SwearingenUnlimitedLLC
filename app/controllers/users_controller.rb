class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    render json: User.all
  end

  def show
    user = find_user
    render json: user
  end

  private

  def find_user
    User.find(params[:id])
  end

  def render_not_found
    render json: { error: "User not found"}, status: :not_found
  end
end
