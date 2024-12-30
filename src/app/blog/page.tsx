import { connectToDatabase } from '@/lib/db';
import BlogPost, { IBlogPost } from '@/models/BlogPost';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

async function getPublishedPosts(): Promise<IBlogPost[]> {
  await connectToDatabase();
  const posts = await BlogPost.find({ isPublished: true })
    .select('title content excerpt author slug tags coverImage publishedAt lastModified isPublished')
    .sort({ publishedAt: -1 })
    .lean();
  return posts as unknown as IBlogPost[];
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-24 pt-24">
        {/* Hero Section */}
        <div className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Blog
              </h1>
              <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-500">
                Stay updated with the latest insights, trends, and best practices in AI technology.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {post.coverImage && (
                      <div className="relative h-48">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="text-indigo-600 hover:text-indigo-700">Read more →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-gray-600 mb-12">
                Get the latest updates and insights delivered directly to your inbox.
              </p>
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 