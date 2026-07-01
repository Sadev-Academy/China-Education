-- Create the inquiries table for storing prospective student requests
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    degree_level VARCHAR(100),
    study_field VARCHAR(255),
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending' NOT NULL,
    notes TEXT
);

-- Set up Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts (for prospective students submitting forms on the website)
CREATE POLICY "Allow public anonymous inserts" 
ON inquiries 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Allow authenticated agency staff to select and manage inquiries
CREATE POLICY "Allow authenticated staff to view and manage inquiries" 
ON inquiries 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
