import { useProfileStore } from "../store/profileStore";

export default function Preview() {
  const { activeProfile } = useProfileStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
      <div className="bg-white border rounded p-4 min-h-[150px]">
        {activeProfile.sections.length === 0 && (
          <p className="text-gray-400">No content yet</p>
        )}
        {activeProfile.sections.map((s) => (
          <p key={s.id} className="mb-2">
            {s.data.content}
          </p>
        ))}
      </div>
    </div>
  );
}
