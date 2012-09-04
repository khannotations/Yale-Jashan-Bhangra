Bhangra::Application.routes.draw do
  match 'team' => "main#team"
  match 'media' => "main#media"
  match 'about' => "main#about"

  root :to => 'main#index'

end
