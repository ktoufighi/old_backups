class Rate

  # the order of variables was wrong here
  # def initialize(price, type, num_worker)
  def initialize(type, price, num_worker)
    # you are trying to initialize @quote and @total_quote here based on variables that don't exist
    # @quote = quote
    # @total_quote = total_quote
    @type = type
    @num_worker = num_worker
    @price = price
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

  # def report
  #   "#{@type} is #{@price}, #{@num_worker} person worked on it, total quote: #{@total_quote}"
  # end
end

# Input
  food = Rate.new('steak 400g', 50, 3)
  drugs = Rate.new('Tylenol', 8.95, 1)
  book = Rate.new('Lord of the Rings', 24.50, 1)

# Final number
puts "#{food.total_quote}"
puts "#{drugs.total_quote}"
puts "#{book.total_quote}"

# total_quote wasn't being used, in this case, it would be food + drugs + books, etc.
# puts "output: #{total_quote}"
