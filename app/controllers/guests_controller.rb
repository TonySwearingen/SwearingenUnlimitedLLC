class GuestsController < ApplicationController
  def index
    render json: Guest.all
  end
end
