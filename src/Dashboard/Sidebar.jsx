import { useProfileStore } from "../store/profileStore";
import { v4 as uuid } from "uuid";

export default function Sidebar() {
  const { profiles, addProfile, setActiveProfile, deleteProfile, activeProfile } =
    useProfileStore();

  const createProfile = () => {
    const profile = {
      id: uuid(),
      name: "New Profile",
      template: "default",
      sections: [],
    };
    addProfile(profile);
    setActiveProfile(profile);
  };

  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">My Profiles</h2>

      <div className="flex-1 space-y-2">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`flex items-center justify-between p-2 rounded cursor-pointer
              ${
                activeProfile?.id === profile.id
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
          >
            <span onClick={() => setActiveProfile(profile)}>
              {profile.name}
            </span>
            <button
              onClick={() => deleteProfile(profile.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={createProfile}
        className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        + Create Profile
      </button>
    </aside>
  );
}
