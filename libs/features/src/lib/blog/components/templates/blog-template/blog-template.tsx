import { useCallback, useState, useTransition } from 'react';
import { SectionTitle, SearchInput, ALink } from '@bbl-nx/ui-components';
import { BlogItem } from '../../../interfaces';
import { BlogCard } from '../../organisms';

export interface BlogTemplateProps {
  allBlogs: BlogItem[];
}

export function BlogTemplate(props: BlogTemplateProps) {
  const { allBlogs } = props;
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [, startTransition] = useTransition();

  const onSearch = useCallback(
    (text: string) => {
      const searchBlogs = allBlogs.filter((blog) => blog.title.includes(text));
      startTransition(() => {
        setFilteredBlogs(searchBlogs);
      });
    },
    [allBlogs]
  );

  return (
    <div className="flex flex-col items-start flex-1 w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <SectionTitle className="pb-4">All Blogs</SectionTitle>
      <SearchInput className="w-full mb-12" onSearch={onSearch} />
      <div className="w-full space-y-12">
        {filteredBlogs.map((item) => {
          const { id, title, createdAt, url, isExternal } = item;
          return (
            <div key={id}>
              <ALink href={url} isExternal={isExternal}>
                <BlogCard title={title} createdAt={createdAt} />
              </ALink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogTemplate;
