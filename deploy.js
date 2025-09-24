import ghpages from "gh-pages";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildPath = path.join(__dirname, "dist");

ghpages.publish(
  buildPath,
  {
    branch: "gh-pages", // 배포 브랜치
    repo: "https://github.com/entlabs-dev/entlabs-homepage.git", // 원격 저장소
    user: {
      name: "envlabs-dev", // 커밋 이름
      email: "entlabco@gmail.com", // 커밋 이메일
    },
    dotfiles: true, // .gitignore 포함 파일 배포 가능
  },
  (err) => {
    if (err) {
      console.error("배포 실패:", err);
    } else {
      console.log("배포 완료!");
    }
  }
);
