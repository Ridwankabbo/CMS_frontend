import { useProfileStore } from "../store/profileStore";
import { v4 as uuid } from "uuid";
import SectionItem from "./SectionItem";

export default function SectionEditor() {
  const { activeProfile, updateProfile } = useProfileStore();

  const addSection = () => {
    updateProfile({
      ...activeProfile,
      sections: [
        ...activeProfile.sections,
        { id: uuid(), type: "text", data: { content: "" } },
      ],
    });
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Sections</h2>
        <button
          onClick={addSection}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          + Add Section
        </button>
      </div>

      <div className="space-y-3">
        {activeProfile.sections.map((section) => (
          <SectionItem key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
