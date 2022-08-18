# IF ELSE STATEMENTS
# operators: # > < >= <= == !=
age = 16
if(age >= 21)
  puts 'adult age person!'
else
  puts 'not an adult'
end

# IF ELSIF STATEMENTS
# we also have else if, not spelt right though
user = 'Pedro'
password = 'abc123'
if(user == 'Pedro' && password == 'abc123')
  puts 'Welcome Pedro!'
elsif (user == 'Caitlin' && password == 'abc123')
  puts 'Welcome Caitlin!'
else
  puts 'Invalid username or password'
end

# UNLESS STATEMENTS
# unless inverts the condition
unless (user === 'Pedro' && password === 'abc123')
  puts 'Invalid username or password'
else
  puts 'Welcome Pedro!'
end

# REVERSE IF STATEMENTS
hour = 5
puts 'good evening!' if (hour > 5)
sunny = false
puts 'wear rain jacket!' unless sunny

# SWITCH CASE STATEMENTS
role = 'OTHER'
case role
  when 'ADMIN'
    puts 'Welcome ADMIN'
    exit # === break
  when 'USER'
    puts 'Welcome USER'
    exit
  else
    puts 'Invalid user role'
end

# TERNARY OPERATOR STATEMENTS
# condition ? true : false
number = 10
puts (number < 10) ? 'single digit number' : 'multiple digits number'
