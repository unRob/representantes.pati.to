ROMAN_MAP = {
  1 => "I",
  4 => "IV",
  5 => "V",
  9 => "IX",
  10 => "X",
  40 => "XL",
  50 => "L",
  90 => "XC",
  100 => "C",
  400 => "CD",
  500 => "D",
  900 => "CM",
  1000 => "M"
}
ROMAN_NUMERALS = Array.new(100) do |index|
    target = index + 1
    ROMAN_MAP.keys.sort { |a, b| b <=> a }.inject("") do |roman, div|
        times, target = target.divmod(div)
        roman << ROMAN_MAP[div] * times
    end
end

class String

  def to_arabigo
    ROMAN_NUMERALS.index(self)+1
  end

end
