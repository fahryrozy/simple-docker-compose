-- Create the database table
CREATE TABLE public.message (
  id INT PRIMARY KEY,
  message VARCHAR(1000) NOT NULL
);

-- Insert some data into the table
INSERT INTO public.message (id, message) VALUES
  (1, 'Hello world')