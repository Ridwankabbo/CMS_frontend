import { useProfileStore } from "../store/profileStore";
import TemplateSelector from "./TemplateSelector";
import SectionEditor from "./SectionEditor";
import Preview from "./Preview";

export default function ProfileEditor() {
  const { activeProfile } = useProfileStore();

  if (!activeProfile) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select or create a profile
      </div>
    );
  }

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">{activeProfile.name}</h1>

      <TemplateSelector />
      <SectionEditor />
      <Preview />
    </main>
  );
}
