Rails.application.routes.draw do

  resources :events
  # post '/login', to: 'sessions#login'
  # post '/logout', to: 'sessions#logout'
  # get '/me', to: 'users#me'

  resources :projects, only: [:show, :create, :update, :destroy]
  resources :users, only: [:show]
end
