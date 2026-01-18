import Sidebar from "./Sidebar";
import ProfileEditor from "./ProfileEditor";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <ProfileEditor />
    </div>
  );
}
