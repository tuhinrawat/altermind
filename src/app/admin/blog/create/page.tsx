'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '../../../components/RichTextEditor';

const inputStyles = "mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out shadow-sm hover:border-gray-300";
const labelStyles = "block text-sm font-semibold text-gray-700 mb-2";

export default function CreateBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_API_KEY}`,
        },
        body: JSON.stringify({
          title,
          content,
          excerpt,
          author,
          tags: tags.split(',').map(tag => tag.trim()),
          coverImage,
          isPublished,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create blog post');
      }

      router.push('/admin/blog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Create New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label htmlFor="title" className={labelStyles}>
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputStyles}
                required
                placeholder="Enter blog post title"
              />
            </div>

            {/* Content */}
            <div>
              <label className={labelStyles}>
                Content
              </label>
              <RichTextEditor value={content} onChange={setContent} />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className={labelStyles}>
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className={inputStyles}
                required
                placeholder="Enter a brief summary of your blog post"
              />
            </div>

            {/* Author */}
            <div>
              <label htmlFor="author" className={labelStyles}>
                Author
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={inputStyles}
                required
                placeholder="Enter author name"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className={labelStyles}>
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className={inputStyles}
                placeholder="technology, ai, machine-learning"
              />
            </div>

            {/* Cover Image URL */}
            <div>
              <label htmlFor="coverImage" className={labelStyles}>
                Cover Image URL
              </label>
              <input
                type="url"
                id="coverImage"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className={inputStyles}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Published Status */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublished"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="isPublished" className="ml-3 block text-sm font-medium text-gray-900 cursor-pointer">
                Publish immediately
              </label>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push('/admin/blog')}
                className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating...' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 