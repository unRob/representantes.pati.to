module SinatraForm

  def clean_params (params)
    data = params.dup
    data.delete 'splat'
    data.delete 'captures'
    data
  end

end