Rails.application.routes.draw do

  post '/login', to: 'sesssions#create'
  post '/logout', to: 'sesssions#destroy'
  get '/logged_in', to: 'sesssions#is_logged_in'

  resources :guests, only: [:index]
  resources :projects
  resources :users, only: [:index, :show]
end
