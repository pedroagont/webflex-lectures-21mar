# writing our own methods
def say_hello(name) # starts with a definition
  puts "Hello #{name}!"
end

# invoke with or without parens
say_hello 'Pedro'
say_hello('Pedro')
# calling a method with too many/too few arguments will result in an error
# say_hello('Pedro', 'Zahra')

# methods in ruby have implicit return
def full_name(first_name, last_name)
  "#{first_name} #{last_name}"
end

result = full_name('Pedro', 'González')
puts result

# arguments are passed by value
def change_value(val)
  val = 5
end

number = 10
puts number

change_value(number)
puts number
