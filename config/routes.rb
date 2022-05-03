Rails.application.routes.draw do

  post '/login', to: 'sesssions#login'
  post '/logout', to: 'sesssions#logout'
  get '/me', to: 'users#me'

  resources :guests, only: [:index]
  resources :projects
  resources :users, only: [:index, :show]
end
