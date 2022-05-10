class ApplicationController < ActionController::Base
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record
  skip_before_action :verify_authenticity_token
  # before_action :authorize

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  # def authorize
  #   return render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  # end

  private

  def render_not_found
    render json: {error: "Not found"}, status: :not_found
  end

  def render_invalid_record invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
