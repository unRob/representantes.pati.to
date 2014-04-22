#!/usr/bin/env ruby

require 'sass'
require 'listen'
require_relative 'assets2'

absPath = File.dirname(File.expand_path File.dirname(__FILE__))
$root = "#{absPath}/assets"
$dst = "#{absPath}/public"

Assets.root = $root

def save path, contents
  File.open(path, 'w+') do |f|
    f << contents
  end
end

def onChanges changes
  changes.each do |change|
    next if change.relative_path =~ /\/_/
    p = "#{$dst}/#{change.relative_path}.#{change.type}" 
    save p, change.to_s
  end
end

listener = Listen.to("#{$root}", debug: true) do |mod, add, del|

  del.each do |f|
    puts "DEL: #{f}"
    onChanges Assets.delete(f)
  end

  mod.each do |f|
    puts "MOD: #{f}"
    next if f.match(/\.rb$/)
    onChanges Assets.modify(f)
  end

  add.each do |f|
    puts "ADD: #{f}"
    onChanges Assets.add(f)
  end
end

listener.start
puts "Escuchando cambios de #{$root}"

sleep