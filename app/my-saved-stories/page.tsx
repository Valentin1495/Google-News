import SavedStories from '@/components/SavedStories';

export function generateMetadata() {
  return {
    title: 'Google News - My saved stories',
  };
}

export default function MySavedStories() {
  return (
    <div>
      <SavedStories />
    </div>
  );
}
