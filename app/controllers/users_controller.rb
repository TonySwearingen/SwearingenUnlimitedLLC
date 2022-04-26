class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  def index
    render json: User.all
  end

  def show
    user = find_user
    render json: user
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :created
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:name)
  end

  def render_not_found
    render json: { error: "User not found"}, status: :not_found
  end

  def render_invalid_record
    render json: { errors: "validation errors"}, status: :unprocessable_entity
  end
end
