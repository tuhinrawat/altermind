import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import BlogPost from '@/models/BlogPost';

const ADMIN_API_KEY = process.env.NEXT_PUBLIC_ADMIN_API_KEY;

// Helper function to check authorization
function isAuthorized(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return false;
  
  const token = authHeader.split(' ')[1];
  return token === ADMIN_API_KEY;
}

export async function GET() {
  try {
    await connectToDatabase();
    const posts = await BlogPost.find().sort({ lastModified: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const data = await request.json();
    
    // Generate slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const blogPost = new BlogPost({
      ...data,
      slug,
      publishedAt: data.isPublished ? new Date() : null,
      lastModified: new Date()
    });

    await blogPost.save();
    return NextResponse.json({ message: 'Blog post created successfully', post: blogPost });
  } catch (error) {
    console.error('Error creating blog post:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const data = await request.json();
    const { slug } = data;

    const blogPost = await BlogPost.findOneAndUpdate(
      { slug },
      {
        ...data,
        publishedAt: data.isPublished ? new Date() : null,
        lastModified: new Date(),
      },
      { new: true }
    );

    if (!blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog post updated successfully', post: blogPost });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const { slug } = await request.json();
    
    const blogPost = await BlogPost.findOneAndDelete({ slug });
    if (!blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
} 