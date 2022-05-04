Rails.application.routes.draw do

  post '/login', to: 'sessions#login'
  post '/logout', to: 'sessions#logout'
  get '/me', to: 'users#me'

  resources :guests, only: [:index]
  resources :projects
  resources :users, only: [:index, :show]
end
