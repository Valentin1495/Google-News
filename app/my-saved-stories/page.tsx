import SavedStories from '@/components/saved-stories';

export function generateMetadata() {
  return {
    title: 'Google News - My Saved Stories',
  };
}

export default function MySavedStories() {
  return (
    <div>
      <SavedStories />
    </div>
  );
}
