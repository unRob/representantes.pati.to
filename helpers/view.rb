module View

  def view (vista, data={}, layout=nil)
    layout = :layout if layout == nil
    data[:_viewName] = data[:_viewName] || vista
  	erb vista.to_sym, {locals: data, layout: layout}
  end

end