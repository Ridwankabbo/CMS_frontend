import { templates } from "../templates/templates";
import { useProfileStore } from "../store/profileStore";

export default function TemplateSelector() {
  const { activeProfile, updateProfile } = useProfileStore();

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Template</label>
      <select
        value={activeProfile.template}
        onChange={(e) =>
          updateProfile({ ...activeProfile, template: e.target.value })
        }
        className="border rounded px-3 py-2 w-64"
      >
        {templates.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
