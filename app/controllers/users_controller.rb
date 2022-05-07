class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    user = find_user
    render json: user.projects
  end

  def me
    render json: current_user
  end

  private

  def find_user
    User.find(params[:id])
  end
end
