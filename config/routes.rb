Bhangra::Application.routes.draw do
  get 'team' => "main#team"
  get 'media' => "main#media"
  get 'about' => "main#about"

  root :to => 'main#index'

end
