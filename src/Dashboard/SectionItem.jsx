import { useProfileStore } from "../store/profileStore";

export default function SectionItem({ section }) {
  const { activeProfile, updateProfile } = useProfileStore();

  const updateContent = (value) => {
    updateProfile({
      ...activeProfile,
      sections: activeProfile.sections.map((s) =>
        s.id === section.id ? { ...s, data: { content: value } } : s
      ),
    });
  };

  const deleteSection = () => {
    updateProfile({
      ...activeProfile,
      sections: activeProfile.sections.filter((s) => s.id !== section.id),
    });
  };

  return (
    <div className="bg-white border rounded p-4 shadow-sm">
      <textarea
        value={section.data.content}
        onChange={(e) => updateContent(e.target.value)}
        placeholder="Write your content..."
        className="w-full border rounded p-2 mb-2"
      />
      <button
        onClick={deleteSection}
        className="text-red-600 hover:text-red-800 text-sm"
      >
        Delete section
      </button>
    </div>
  );
}
