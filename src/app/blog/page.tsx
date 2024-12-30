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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate pt-24 pb-16">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest insights, trends, and best practices in AI technology.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group relative isolate flex h-full flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/10 hover:shadow-lg hover:ring-gray-900/20 transition duration-300">
                  {post.coverImage && (
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold leading-6 tracking-tight text-gray-900 group-hover:text-indigo-600 transition">
                        {post.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <time className="text-sm text-gray-500" dateTime={new Date(post.publishedAt).toISOString()}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition">
                        Read article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative isolate bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get the latest updates and insights delivered directly to your inbox.
            </p>
            <div className="mt-10">
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
} 