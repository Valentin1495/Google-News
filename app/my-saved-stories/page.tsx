import SavedStories from '@/components/SavedStories';

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
