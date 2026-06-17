type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  blog: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
};

type GithubRepo = {
  language: string | null;
};

const languageToStack: Record<string, string> = {
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  HTML: "HTML5",
  CSS: "CSS3",
};

export type GithubProfileData = {
  username: string;
  fullName: string;
  bio: string;
  location: string;
  blog: string;
  avatarUrl: string;
  followers: number;
  publicRepos: number;
  stack: string[];
};

function getGithubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function getGithubProfileData(): Promise<GithubProfileData> {
  const username = process.env.GITHUB_USERNAME || "antoniojunior";
  const headers = getGithubHeaders();
  const fetchOptions = process.env.GITHUB_TOKEN
    ? { headers, next: { revalidate: 21600 } as const }
    : { headers, cache: "no-store" as const };

  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, fetchOptions),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, fetchOptions),
  ]);

  if (!profileResponse.ok) {
    return {
      username,
      fullName: "Antonio Junior dos Santos",
      bio: "Desenvolvedor FullStack focado em performance, acessibilidade e experiencia do usuario.",
      location: "Brasil",
      blog: "",
      avatarUrl: "/g.png",
      followers: 0,
      publicRepos: 0,
      stack: ["JavaScript", "TypeScript", "Node.js", "HTML5", "CSS3", "Git", "GitHub"],
    };
  }

  const profile = (await profileResponse.json()) as GithubProfile;
  const repos = reposResponse.ok ? ((await reposResponse.json()) as GithubRepo[]) : [];

  const languageCount = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language || !languageToStack[repo.language]) continue;
    const key = languageToStack[repo.language];
    languageCount.set(key, (languageCount.get(key) || 0) + 1);
  }

  const topLanguages = [...languageCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([language]) => language);

  const stack = [...new Set([...topLanguages, "Node.js", "Vue.js", "Tailwind", "Git", "GitHub", "MySQL"])]
    .filter(Boolean)
    .slice(0, 12);

  return {
    username: profile.login || username,
    fullName: profile.name || "Antonio Junior dos Santos",
    bio:
      profile.bio?.trim() ||
      "Desenvolvedor FullStack focado em performance, acessibilidade e experiencia do usuario.",
    location: profile.location || "Brasil",
    blog: profile.blog || "",
    avatarUrl: profile.avatar_url || "/g.png",
    followers: profile.followers,
    publicRepos: profile.public_repos,
    stack,
  };
}

export async function getGithubProfileStats() {
  const data = await getGithubProfileData();
  return {
    followers: data.followers,
    publicRepos: data.publicRepos,
    username: data.username,
  };
}
