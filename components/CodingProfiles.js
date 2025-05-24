const profiles = [
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/sai5056499',
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none"><circle cx="16" cy="16" r="16" fill="#5B4638"/><text x="8" y="22" fontSize="12" fill="#fff" fontFamily="Arial" fontWeight="bold">CC</text></svg>
    ),
    username: 'sai5056499',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/sai5056499/',
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none"><rect width="32" height="32" rx="16" fill="#FFA116"/><text x="6" y="22" fontSize="12" fill="#222" fontFamily="Arial" fontWeight="bold">LC</text></svg>
    ),
    username: 'sai5056499',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/sai5056499',
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none"><rect width="32" height="32" rx="16" fill="#1F8ACB"/><text x="2" y="22" fontSize="12" fill="#fff" fontFamily="Arial" fontWeight="bold">CF</text></svg>
    ),
    username: 'sai5056499',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://auth.geeksforgeeks.org/user/sai5056499/practice/',
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none"><rect width="32" height="32" rx="16" fill="#2F8D46"/><text x="2" y="22" fontSize="12" fill="#fff" fontFamily="Arial" fontWeight="bold">GFG</text></svg>
    ),
    username: 'sai5056499',
  },
  {
    name: 'Coding Ninjas',
    url: 'https://www.codingninjas.com/studio/profile/2e2e7e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e',
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none"><rect width="32" height="32" rx="16" fill="#FF5722"/><text x="2" y="22" fontSize="12" fill="#fff" fontFamily="Arial" fontWeight="bold">CN</text></svg>
    ),
    username: 'sai5056499',
  },
];

export default function CodingProfiles() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24" id="coding-profiles">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Coding Profiles</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center w-full max-w-4xl">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-64 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ textDecoration: 'none' }}
          >
            <div className="mb-3">{profile.icon}</div>
            <div className="font-semibold text-lg text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">{profile.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{profile.username}</div>
          </a>
        ))}
      </div>
    </section>
  );
} 