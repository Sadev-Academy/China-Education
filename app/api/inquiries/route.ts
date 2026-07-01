import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, degree_level, study_field, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    // Insert data into Supabase (or mock)
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? phone.trim() : null,
          degree_level: degree_level || null,
          study_field: study_field ? study_field.trim() : null,
          message: message ? message.trim() : null,
          status: 'pending'
        }
      ]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        { error: 'Failed to submit inquiry to database' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        demoMode: !isSupabaseConfigured,
        data: data?.[0] || null
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Inquiry API Error:', err);
    return NextResponse.json(
      { error: 'Invalid request body or server error' },
      { status: 400 }
    );
  }
}
