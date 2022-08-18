# VARIABLES
# variables don't need to be declared (no const or let)
# and they don't need semicolons
name = 'Sara'
puts name

# Ruby is dynamically typed
name = 'Pedro'
name = 7
name = true
puts name

# nil is equivalent to JS null
# there is no undefined or null in Ruby
name = nil
puts name

# Constants in Ruby are capitalized
Name = 'This is a constant!'
NAME = 'This is also a constant in Hungarian notation!'
puts Name
puts NAME

# DATA TYPES / CASTING
# we don't have == to just check value regardless of type
puts 2 == '2' # false

# === works the same as == for the most part
puts 2 === '2' # false

# casting values
num = '4'
puts num
puts num.class

num_integer = num.to_i
puts num_integer
puts num_integer.class

puts num == '4'
puts num_integer == 4

other_num = 5
puts other_num
puts other_num.class

other_num_string = other_num.to_s
puts other_num_string
puts other_num_string.class

puts other_num == 5
puts other_num_string == '5'

# CONCATENATION
first_name = 'Pedro'
last_name = 'González'

# string concatenation
puts first_name + ' ' + last_name
# string interpolation
puts "#{first_name} #{last_name}"
# interpolation only works with double quotes
puts '#{first_name} #{last_name}'
