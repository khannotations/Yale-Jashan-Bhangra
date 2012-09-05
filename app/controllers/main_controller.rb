class MainController < ApplicationController


  helper_method :content_header

  protected

    def content_header selected
      about = (selected == "about") ? " selected" : ""
      team = (selected == "team") ? " selected" : ""
      media = (selected == "media") ? " selected" : ""

      string = "<div class='header'><div class='small-head'>"
      string += "<li class='img'><a href='/'><img src='/assets/logo_notext.png' /></a></li>"
      string += "<li class='text"+about+"'><a href='/about'>About</a></li>"
      string += "<li class='text"+team+"'><a href='/team'>Team</a></li>"
      string += "<li class='text"+media+"'><a href='/media'>Media</a></li>"
      string += "<li class='pull-right text'>\
      <fb:like href='https://www.facebook.com/pages/Yale-Jashan-Bhangra/190308261019210' \
      send='false' layout='button_count' width='150' show_faces='false'></fb:like></li>"
      string += "</div></div>"
      string
    end

end
