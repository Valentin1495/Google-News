import SavedStories from '@/components/saved-stories';

export function generateMetadata() {
  return {
    title: 'Google News - My Saved Stories',
  };
}
export const revalidate = 3600;
export default function MySavedStories() {
  return (
    <div>
      <SavedStories />
    </div>
  );
}
