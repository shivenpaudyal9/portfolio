-- ============================================================
-- Portfolio Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. bookings table
--    Stores booking intent from the "Book a Call" section
-- ============================================================
CREATE TABLE IF NOT EXISTS public.bookings (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT DEFAULT '',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for quick lookup by email
CREATE INDEX IF NOT EXISTS bookings_email_idx ON public.bookings (email);
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON public.bookings (created_at DESC);

-- Row-Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (visitors booking calls)
CREATE POLICY "Allow anon insert on bookings"
  ON public.bookings FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (you) can read bookings
CREATE POLICY "Allow authenticated read on bookings"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (true);


-- ============================================================
-- 2. messages table
--    Stores contact form submissions
-- ============================================================
CREATE TABLE IF NOT EXISTS public.messages (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS messages_email_idx ON public.messages (email);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at DESC);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert on messages"
  ON public.messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on messages"
  ON public.messages FOR SELECT
  TO authenticated
  USING (true);


-- ============================================================
-- 3. ai_chats table
--    Logs every visitor conversation with the Claude agent
-- ============================================================
CREATE TABLE IF NOT EXISTS public.ai_chats (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_message   TEXT NOT NULL,
  agent_response    TEXT NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ai_chats_created_at_idx ON public.ai_chats (created_at DESC);

ALTER TABLE public.ai_chats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert on ai_chats"
  ON public.ai_chats FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on ai_chats"
  ON public.ai_chats FOR SELECT
  TO authenticated
  USING (true);


-- ============================================================
-- Verification query (run to confirm tables exist)
-- ============================================================
-- SELECT table_name FROM information_schema.tables
-- WHERE table_schema = 'public'
--   AND table_name IN ('bookings', 'messages', 'ai_chats');
