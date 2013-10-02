class EntriesController < ApplicationController
  def index
    entry = Entry.all
    render :json => entry.entries
  end
end
