#!/usr/bin/env ruby

require 'sass'
require 'listen'
require 'fileutils'
require 'uglifier'
require_relative 'assets2'

absPath = File.dirname(File.expand_path File.dirname(__FILE__))
$root = "#{absPath}/assets"
$dst = "#{absPath}/public"

Assets.root = $root
$opts = {}
$opts[:compress] = true

def save path, contents
  dir = File.dirname path
  if !File.directory? dir
    
    begin
      FileUtils.mkdir_p dir, {verbose: true}
    rescue Exception
      puts "No pude crear el directorio #{dir}"
    end
  end

  File.open(path, 'w+') do |f|
    f << contents
  end
end

def onChanges changes
  changes.each do |change|
    next if change.relative_path =~ /\/_/
    p = "#{$dst}/#{change.relative_path}.#{change.type}" 
    contents = change.to_s
    if contents
      puts "Guardando #{change.relative_path}"
      if $opts[:compress] && change.type == :js
        contents = Uglifier.compile(contents)
      end
      save(p, contents) 
    else
      puts "No guardo #{change.relative_path}"
    end
  end
end

listener = Listen.to("#{$root}", debug: false) do |mod, add, del|

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