class Rate

  # the order of variables was wrong here
  # def initialize(price, type, num_worker)
  def initialize(type, price, num_worker)
    # you are trying to initialize @quote and @total_quote here based on variables that don't exist
    # @quote = quote
    # @total_quote = total_quote
    @type = type
    @price = price
    @num_worker = num_worker

  end

  def markups
    quote = 0

    if @type == "basic"
      quote = (@price * 0.05).round(2)

    elsif @type == "medication"
      quote = (@price * 0.12).round(2)

    elsif @type == "food"
      quote = (@price * 0.18).round(2)

    elsif @type == "electronics"
      quote = (@price * 0.07).round(2)

    else
      @type == "extempt"
      quote = (@price * 0)
    end

    # you were computing the quote (which looks to be just the tax?) but you weren't doing anything with it
    # i changed it to return the value here
    quote
  end

  def worker_rate
    (1.25 * @num_worker)
  end

  def total_quote
    # same here, you were computing the total_quote, but you weren't returning it or doing anything with it
    # i change id to return the price + markup + worker_rate
    # total_quote = markups + worker_rate
    @price + markups + worker_rate
  end
end

# Input
  food = Rate.new('food', 30, 3)
  medication = Rate.new('medication', 12.45, 1)
  basic = Rate.new('basic', 20.99, 1)

# Final number
puts "Output1: Snacks $#{food.total_quote}"
puts "Output2: Tylenol $#{medication.total_quote}"
puts "Output3: Lord of the Rings $#{basic.total_quote}"

# total_quote wasn't being used, in this case, it would be food + drugs + books, etc.
# puts "output: #{total_quote}"
