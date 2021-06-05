Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      # create == new User, update == change User, destroy == delete
      resources :users, only: [:create, :update, :destroy]
      # index == all users conversations, show == specific convo, create == new convo
      resources :conversations, only: [:index, :show, :create]
      #create == new message, update == edit message, destroy == delete message
      resources :messages, only: [:create, :update, :destroy]
      post '/login', to: 'auth#create'
      get '/profile' to: 'users#profile'
      get '/friends' to: 'users#friends'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
