Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  resources :projects, only: [:show, :create, :update, :destroy]
  resources :users, only: [:index, :create, :show]
end
