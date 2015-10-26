module SluggableString
  refine String do
    def slug
      I18n.transliterate(self).downcase.squish.gsub(/[^a-z\s]/, '').gsub(' ', '-')
    end
  end
end