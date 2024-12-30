import { connectToDatabase } from '@/lib/db';
import BlogPost, { IBlogPost } from '@/models/BlogPost';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getBlogPost(slug: string): Promise<IBlogPost | null> {
  await connectToDatabase();
  const post = await BlogPost.findOne({ slug, isPublished: true }).lean();
  return post as IBlogPost | null;
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-[680px] mx-auto px-4 py-12 md:py-20">
      <header className="mb-10">
        <Link href="/blog" className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm font-medium mb-8">
          <span>←</span> Back to Blog
        </Link>
        <h1 className="font-serif text-[32px] md:text-[40px] leading-[1.25] tracking-tight text-[#242424] mb-4 font-bold">{post.title}</h1>
        <p className="text-[#757575] text-base">{formatDate(post.publishedAt)}</p>
      </header>
      <div 
        className="blog-content font-serif text-[20px] leading-[1.8] text-[#242424] 
          [&>p]:mb-7 
          [&>h2]:text-[28px] [&>h2]:leading-tight [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 
          [&>h3]:text-[24px] [&>h3]:leading-tight [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 
          [&>blockquote]:border-l-4 [&>blockquote]:border-[#ddd] [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-[#555] [&>blockquote]:my-8 
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-7 
          [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-7 
          [&>li]:mb-2 
          [&>a]:text-[#1a8917] hover:[&>a]:underline 
          [&>*:first-child]:mt-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
} 