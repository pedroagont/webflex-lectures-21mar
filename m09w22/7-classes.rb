class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

# equivalent to
# class Car
#  def initialize (color, year, model)
#    @color = color
#    @year = year
#    @model = model
#  end
#  def color
#    @color
#  end
#  def color=(value)
#    @color = value
#  end
#  def year
#    @year
#  end
#  def model=(value)
#    @model = value
#  end
# end

my_car = Car.new("red", 2007, "matrix")
puts my_car.color
