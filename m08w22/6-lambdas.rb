# blocks define a chunk of code to be executed
# can be do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}

# lambdas
# "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "I'm giving up on you" } # lambda literal

# use & to convert a lambda to a block
dogs.each &do_thing

# defining a method that takes a lambda
def my_method(&block)
  block.call # .call to invoke the block
end
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens
