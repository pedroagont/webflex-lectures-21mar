# BREAK
i = 0
loop do
  i += 1
  puts i
  
  # exit the loop
  break if i > 4
end

# WHILE
i = 0
while i < 5 do
  i += 1
  puts i
end

# UNTIL
i = 0
until i > 4 do
  i += 1
  puts i
end

# FOR..IN === FOR..OF
names = ['Cristian', 'Harwinder', 'Marianne', 'Vincent', 'Zhara']
for name in names do
  puts "Hello #{name}!"
end

# EACH
names.each do |name|
  puts "Goodbye #{name}!"
end

# SELECT === FILTER
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.select do |number|
  puts number if number > 5
end

# RANGES
(5..10).each do |number|
  puts number
end

# TIMES
10.times { puts 'Hello team 10 times!' }
