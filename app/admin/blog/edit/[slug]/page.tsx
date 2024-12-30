import BlogEditForm from '@/app/components/BlogEditForm';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EditBlogPage({ params }: PageProps) {
  return <BlogEditForm slug={params.slug} />;
} 